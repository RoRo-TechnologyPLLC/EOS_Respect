import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { BsInfoCircle } from "react-icons/bs";

import {
    useUALAccount,
    useCommunityGlobals,
    useCurrentMember,
    useOngoingElectionData,
    useCurrentElection,
} from "_app";
import { Button, Container, Heading, Loader, Link, Text } from "_app/ui";
import { ErrorLoadingElection } from "elections";
import {
    ActiveStateConfigType,
    Election,
    ElectionStatus,
} from "elections/interfaces";

import * as Ongoing from "./ongoing-election-components";

// TODO: Make sure time zone changes during election are handled properly
export const OngoingElection = ({ election }: { election: any }) => {
    const [awaitingNextRound, setAwaitingNextRound] = useState(false);
    const {
        data: globals,
        isLoading: isLoadingGlobals,
        isError: isErrorGlobals,
    } = useCommunityGlobals();
    const {
        data: ongoingElectionData,
        isLoading: isLoadingElectionData,
        isError: isErrorElectionData,
    } = useOngoingElectionData({
        currentElection: election,
    });
    console.info("useOngoingElectionData() return:", ongoingElectionData);

    useEffect(() => {
        if (!awaitingNextRound) return;
        setAwaitingNextRound(false);
    }, [election.round]);

    // Poll for updated election information while awaitingNextRound or processing round.
    const isProcessing = election?.electionState === ElectionStatus.PostRound;
    useCurrentElection({
        enabled: isProcessing || awaitingNextRound,
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
    });

    if (isProcessing || isLoadingGlobals || isLoadingElectionData) {
        return (
            <Container className="py-10">
                <Loader />
            </Container>
        );
    }

    if (isErrorGlobals || isErrorElectionData) {
        return <ErrorLoadingElection />;
    }

    const { roundDurationMs, roundEndTime, roundStartTime } = getRoundTimes(
        globals,
        election
    );

    return (
        <div className="divide-y">
            <Container darkBg>
                <Heading size={2}>Today's election</Heading>
                <Text>Currently in progress</Text>
            </Container>
            <Ongoing.SupportSegment />

            <CompletedRounds ongoingElectionData={ongoingElectionData} />
            <SignInContainer />
            <SignUpContainer />
            <NoParticipationInFurtherRoundsMessage
                ongoingElectionData={ongoingElectionData}
            />
            <CurrentRound
                ongoingElectionData={ongoingElectionData}
                electionState={election.electionState}
                roundStartTime={roundStartTime}
                roundEndTime={roundEndTime}
                roundDurationMs={roundDurationMs}
                electionConfig={election.config}
                onRoundEnd={() => setAwaitingNextRound(true)}
            />
        </div>
    );
};

interface NoFurtherParticipationProps {
    ongoingElectionData?: Election;
}

const NoParticipationInFurtherRoundsMessage = ({
    ongoingElectionData,
}: NoFurtherParticipationProps) => {
    if (!ongoingElectionData) return null;
    if (ongoingElectionData.isMemberStillParticipating) {
        return null;
    }

    let statusText = "You are not involved in further rounds.";
    if (ongoingElectionData.isMemberOptedOut)
        statusText = "You are not participating in this election.";

    return (
        <Container className="flex items-center space-x-2 pr-8 py-8">
            <BsInfoCircle
                size={22}
                className="ml-px text-gray-400 place-self-start mt-1"
            />
            <div className="flex-1">
                <Text size="sm">
                    {statusText} Please{" "}
                    <Link href={""}>join the Community Room</Link> &amp; Support
                    for news and updates of the ongoing election. The results
                    will be displayed in the{" "}
                    <span className="font-semibold">My Delegation</span> area
                    after the election is complete.{" "}
                    {!ongoingElectionData.inSortitionRound &&
                        "Once the Chief Delegates are selected, they will be displayed below."}
                </Text>
            </div>
        </Container>
    );
};

export default OngoingElection;

interface CompletedRoundsProps {
    ongoingElectionData?: Election;
}

const CompletedRounds = ({ ongoingElectionData }: CompletedRoundsProps) => {
    const { data: currentMember } = useCurrentMember();
    const numCompletedRounds = ongoingElectionData?.completedRounds?.length;

    if (
        !currentMember ||
        ongoingElectionData?.isMemberOptedOut ||
        !numCompletedRounds
    )
        return null;

    return (
        <>
            {[...Array(numCompletedRounds)].map((_, i) => {
                return (
                    <Ongoing.CompletedRoundSegment
                        key={`election-round-${i + 1}`}
                        roundIndex={i}
                    />
                );
            })}
        </>
    );
};

export interface CurrentRoundProps {
    ongoingElectionData?: Election;
    electionState: string;
    roundStartTime: Dayjs;
    roundEndTime: Dayjs;
    roundDurationMs: number;
    electionConfig?: ActiveStateConfigType;
    onRoundEnd: () => void;
}

const CurrentRound = (props: CurrentRoundProps) => {
    const { data: currentMember } = useCurrentMember();

    if (props.electionState === ElectionStatus.Final) {
        return (
            <Ongoing.ChiefsRoundSegment
                roundEndTime={props.roundEndTime}
                onRoundEnd={props.onRoundEnd}
            />
        );
    }

    if (
        !currentMember ||
        !props.ongoingElectionData?.isMemberStillParticipating
    )
        return null;

    return (
        <Ongoing.OngoingRoundSegment
            electionState={props.electionState}
            roundIndex={props.ongoingElectionData.completedRounds.length}
            roundStartTime={props.roundStartTime}
            roundEndTime={props.roundEndTime}
            roundDurationMs={props.roundDurationMs}
            electionConfig={props.electionConfig}
            onRoundEnd={props.onRoundEnd}
        />
    );
};

export const SignInContainer = () => {
    const [ualAccount, _, ualShowModal] = useUALAccount();
    if (ualAccount) return null;
    return (
        <Container className="flex flex-col justify-center items-center py-16">
            <Button onClick={ualShowModal} size="sm">
                Sign in to continue
            </Button>
        </Container>
    );
};

export const SignUpContainer = () => {
    const [ualAccount] = useUALAccount();
    const { data: currentMember } = useCurrentMember();
    if (!ualAccount || Boolean(currentMember)) return null;
    return (
        <Container className="flex flex-col justify-center items-center py-16">
            <Button href="/induction" size="sm">
                Join Eden
            </Button>
        </Container>
    );
};

export const getRoundTimes = (
    communityGlobals: any,
    currentElection: any
): {
    roundDurationMs: number;
    roundEndTime: Dayjs;
    roundStartTime: Dayjs;
} => {
    const roundDurationSec = communityGlobals.election_round_time_sec;
    const roundEndTimeRaw =
        currentElection.round_end ?? currentElection.seed.end_time;
    const roundDurationMs = roundDurationSec * 1000;
    const roundEndTime = dayjs(roundEndTimeRaw + "Z");
    return {
        roundDurationMs,
        roundEndTime,
        roundStartTime: dayjs(roundEndTime).subtract(roundDurationMs),
    };
};
