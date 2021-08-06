import * as eosjsSerialize from "eosjs/dist/eosjs-serialize";
import * as eosjsNumeric from "eosjs/dist/eosjs-numeric";

import { devUseFixtureData } from "config";
import {
    ActiveStateConfigType,
    ElectionState,
    VoteData,
} from "elections/interfaces";
import {
    EdenMember,
    VoteDataQueryOptionsByField,
    VoteDataQueryOptionsByGroup,
} from "members";
import {
    CONTRACT_CURRENT_ELECTION_TABLE,
    CONTRACT_ELECTION_STATE_TABLE,
    CONTRACT_MEMBER_TABLE,
    CONTRACT_VOTE_TABLE,
    getRow,
    getTableRawRows,
    getTableRows,
    isValidDelegate,
} from "_app";
import {
    fixtureCurrentElection,
    fixtureElectionState,
    fixtureVoteDataRow,
    fixtureVoteDataRows,
} from "./fixtures";
import { fixtureMembersInGroup } from "members/api/fixtures";

const getMemberGroupFromIndex = (
    memberIdx: number,
    totalParticipants: number,
    numGroups: number
) => {
    const maxGroupSize = Math.floor(
        (totalParticipants + numGroups - 1) / numGroups
    );
    const numShortGroups = maxGroupSize * numGroups - totalParticipants;
    const numLargeGroups = numGroups - numShortGroups;
    const minGroupSize = maxGroupSize - 1;
    const totalMembersInLargeGroups = (minGroupSize + 1) * numLargeGroups;

    let groupNumber = -1;
    let lowerBound = -1;
    let upperBound = -1;
    if (memberIdx < totalMembersInLargeGroups) {
        groupNumber = Math.floor(memberIdx / (minGroupSize + 1));
        lowerBound = groupNumber * (minGroupSize + 1);
        upperBound = lowerBound + minGroupSize;
    } else {
        groupNumber =
            Math.floor((memberIdx - totalMembersInLargeGroups) / minGroupSize) +
            numLargeGroups;
        lowerBound =
            (groupNumber - numLargeGroups) * minGroupSize +
            totalMembersInLargeGroups;
        upperBound = lowerBound + minGroupSize - 1;
    }

    return {
        groupNumber: groupNumber,
        lowerBound: lowerBound,
        upperBound: upperBound,
    };
};

export const getMemberGroupParticipants = async (
    memberAccount?: string,
    config?: ActiveStateConfigType
) => {
    if (!config)
        throw new Error(
            "getMemberGroupParticipants requires a config object (got 'undefined')"
        );
    if (!memberAccount)
        throw new Error(
            "getMemberGroupParticipants requires an account (got 'undefined')"
        );

    const totalParticipants = config.num_participants;
    const numGroups = config.num_groups;

    // get member index
    const memberVoteData = await getVoteDataRow({
        fieldValue: memberAccount,
    });
    if (!memberVoteData) return [];

    // return all indexes that represent members in this member's group
    const { groupNumber, lowerBound, upperBound } = getMemberGroupFromIndex(
        // TODO: remove this -1 if no conversion is needed between 0=based and 1=based arrays
        memberVoteData.index,
        totalParticipants,
        numGroups
    );

    // get all members in this member's group
    const rows = await getVoteDataRows({
        lowerBound,
        upperBound,
    });

    if (!rows || !rows.length) {
        return undefined;
    }

    return rows;
};

export const getVoteDataRow = async (
    opts: VoteDataQueryOptionsByField
): Promise<VoteData | undefined> => {
    if (devUseFixtureData)
        return Promise.resolve(fixtureVoteDataRow(opts.fieldValue));

    const memberVoteData = await getRow<VoteData>(
        CONTRACT_VOTE_TABLE,
        opts.fieldName || "name",
        opts.fieldValue
    );
    return memberVoteData;
};

const getVoteDataRows = async (
    opts: VoteDataQueryOptionsByGroup
): Promise<VoteData[] | undefined> => {
    if (devUseFixtureData)
        return Promise.resolve(
            fixtureVoteDataRows.filter(
                (vote) =>
                    vote.index >= opts.lowerBound &&
                    vote.index <= opts.upperBound
            )
        );

    // TODO: see what real data looks like and real use-cases and see if we need the electionState flag;
    // If not, switch this back to getTableRows()
    const rawRows = await getTableRawRows<VoteData>(CONTRACT_VOTE_TABLE, opts);
    // const electionState = rawRows[0][0];

    const rows = rawRows.map((row) => row[1]);

    if (!rows.length) {
        return undefined;
    }

    return rows;
};

export const getVoteData = getVoteDataRows;

const getCommonDelegateAccountForGroupWithThisMember = (
    round: number,
    member?: EdenMember
) => {
    if (!member) {
        return "";
    }
    console.info(
        `getCommonDelegateAccountForGroupWithThisMember().round[${round}], member.account[${member.account}]`
    );
    console.info("getCommonDelegateAccountForGroupWithThisMember().member:");
    console.info(member);
    const commonDelegate =
        member.election_rank > round ? member.account : member.representative;
    return isValidDelegate(commonDelegate) ? commonDelegate : "";
};

export const getParticipantsInCompletedRound = async (
    electionRound: number,
    member: EdenMember
) => {
    const commonDelegate = getCommonDelegateAccountForGroupWithThisMember(
        electionRound,
        member
    );
    if (devUseFixtureData)
        return fixtureMembersInGroup(electionRound, commonDelegate);

    const serialBuffer = new eosjsSerialize.SerialBuffer();
    serialBuffer.pushName(commonDelegate);
    serialBuffer.pushNumberAsUint64(electionRound);

    const bytes = serialBuffer.getUint8Array(16);
    const lowerBound: string = eosjsNumeric
        .signedBinaryToDecimal(bytes)
        .toString();

    return await getTableRows(CONTRACT_MEMBER_TABLE, {
        index_position: 2,
        key_type: "i128",
        lowerBound,
        limit: 6,
    });
};

export const getCurrentElection = async () => {
    // 1. When testing Registration phase
    // if (devUseFixtureData) return fixtureRegistrationElection;

    // 2. When testing Current election phase
    if (devUseFixtureData) return fixtureCurrentElection;

    const rawRows = await getTableRawRows<any>(CONTRACT_CURRENT_ELECTION_TABLE);
    const electionState = rawRows[0][0];

    const rows = rawRows.map((row) => row[1]);

    if (!rows.length) {
        return undefined;
    }

    return { electionState, ...rows[0] };
};

export const getElectionState = async () => {
    if (devUseFixtureData) return fixtureElectionState;

    return await getRow<ElectionState>(CONTRACT_ELECTION_STATE_TABLE);
};
