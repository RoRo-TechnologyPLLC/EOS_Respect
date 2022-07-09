#include <eden.hpp>

const char* eden::withdraw_ricardian = R"(---
spec_version: "0.2.0"
title: Withdraw from my EOS Respect balance
summary: Withdraw {{nowrap quantity}} from my EOS Respect balance
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I am withdrawing {{quantity}} from my available EOS Respect balance.)";

const char* eden::genesis_ricardian = R"(---
spec_version: "0.2.0"
title: Start an EOS Respect Community
summary: Found a new community with Genesis members
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I hereby start a new EOS Respect community named {{community}} with the following founding Peace Treaty and Bylaws:

## Peace Treaty
{{$clauses.peacetreaty}}

## Bylaws
{{$clauses.bylaws}})";

const char* eden::clearall_ricardian = R"(---
spec_version: "0.2.0"
title: Clear EOS Respect Community
summary: WARNING - DELETING COMMUNITY RECORDS
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I hereby clear and remove all tables relating to this EOS Respect community. I affirm that I am authorized to do so by the aforementioned community. I understand that this will remove all community members, and destroy community information stored in chain state. Member information will, however, remain in the blockchain history.)";

const char* eden::inductinit_ricardian = R"(---
spec_version: "0.2.0"
title: Extend EOS Respect Invitation
summary: Invite someone into the community
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

As an active member of this EOS Respect community, I extend an invitation to {{invitee}} to join the EOS Respect community, pending {{invitee}}'s completion of the induction process as witnessed by the following other currently-active community members: {{witnesses.[0]}} and {{witnesses.[1]}}.)";

const char* eden::inductprofil_ricardian = R"(---
spec_version: "0.2.0"
title: Create My EOS Respect Profile
summary: Affirm profile, Peace Treaty and Bylaws
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I, {{new_member_profile.name}}, certify that, to the best of my knowledge, the profile information I am submitting herein is accurate and is my own. I affirm and agree to abide by this EOS Respect community's Peace Treaty and Bylaws:

## Peace Treaty
{{$clauses.peacetreaty}}

## Bylaws
{{$clauses.bylaws}})";

const char* eden::inductvideo_ricardian = R"(---
spec_version: "0.2.0"
title: Add Induction Ceremony to the Record
summary: Add video recording of invitee's induction ceremony to the record
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I witnessed the EOS Respect induction ceremony for the invitee in Induction #{{id}} and hereby attach the IPFS CID of said video recording hereto.)";

const char* eden::inductendors_ricardian = R"(---
spec_version: "0.2.0"
title: Endorse Prospective EOS Respect Member
summary: Endorsement of invitee for induction into EOS Respect community
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I witnessed the EOS Respect induction ceremony for the invitee in Induction #{{id}}. I believe they understand the Peace Treaty and will abide by it. I have carefully reviewed the prospective member's profile information, including their name, profile statement, social links, and induction ceremony video recording, and I affirm their accuracy to the best of my knowledge. I hereby endorse this prospective EOS Support Squad member for induction into this EOS Respect community in accordance with the Peace Treaty and Bylaws:

## Peace Treaty
{{$clauses.peacetreaty}}

## Bylaws
{{$clauses.bylaws}})";

const char* eden::inductdonate_ricardian = R"(---
spec_version: "0.2.0"
title: Donate to the EOS Respect Community
summary: Submit {{nowrap quantity}} donation and activate your membership
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

I have carefully reviewed the profile information I submitted, including my name, profile statement, and social links, and I affirm their accuracy to the best of my knowledge. I hereby donate {{quantity}} to this EOS Respect community. I affirm that I have read and understand the EOS Respect Peace Treaty. I agree to abide by the Peace Treaty.

## Peace Treaty
{{$clauses.peacetreaty}}

## Bylaws
{{$clauses.bylaws}})";

const char* eden::inductcancel_ricardian = R"(---
spec_version: "0.2.0"
title: Cancel Induction
summary: Cancel Induction {{nowrap id}}
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

Cancel induction (pending invitation) #{{id}}. Only the inviter or a witness can cancel the pending induction. This action will delete the induction record and any related witness endorsement records stored in chain state. This information will, however, remain in the blockchain history.)";

const char* eden::inducted_ricardian = R"(---
spec_version: "0.2.0"
title: Inducted (Inline Action)
summary: Internal inline action
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

This action is not intended to be called directly. It is an inline action called at the end of inductdonate that activates the member and cleans up induction tables.)";

const char* eden::gc_ricardian = R"(---
spec_version: "0.2.0"
title: Garbage Collect
summary: Clean up expired or moot invitations and endorsements
icon: https://gateway.pinata.cloud/ipfs/QmTvHpzUBnAdRaLdWvNukBh6qqWQHtamdsJQAZJztvX6Ek
---

Remove expired induction records, moot duplicate induction records, and related endorsement records. This is a safe-to-call, housekeeping action.)";

const char* eden::peacetreaty_clause =
    R"(I. The size of an independent EOS Respect community shall not exceed 10,000 members.
II. Delegates shall be elected by the following process:
II.a. Members are randomly organized into roughly equally-sized groups of 12 or fewer, where total number of groups = population / average group size.
II.b. Each group must select a representative from their group with greater than ⅔ approval.
II.c. The process shall then repeat, fractally, by randomly grouping the representatives approved in the previous round of elections, until a single lead representative is chosen.
III. Elections shall occur at least monthly or according to the bylaws.
IV. The community may adopt bylaws, which contain all rules, processes, regulations that are binding on anyone who wishes to remain a member.
IV.a. The level of representation that voted in the lead representative shall be known as the Board.
IV.b. The active and a proposed set of bylaws are indivisible, single documents, ie. the former Board cannot provide the next board numerous options.
IV.c. Bylaws may only be ratified if they were proposed at least 14 days before the last election.
IV.d. The lead representative can act inside the existing bylaws.
IV.e. The board can propose a new set of bylaws. The vote to approve a proposal as well as ratify a proposed set of bylaws shall be approved by ⅔+1 vote, which shall include the lead representative.
V. Bylaws may not override, change, eliminate, or extend the Peace Treaty.
VI. Members must be invited according to community bylaws and can be removed according to community bylaws.
VII. Membership is voluntary. Members may leave at any time by giving notice.
VIII. The Peace Treaty may be amended by a ⅔+1 vote of all members.)";

const char* eden::bylaws_clause =
    R"(I. EOS Support Squad is an ambassadorship program for EOS support.
II. EOS Support Squad members agree to follow the basic rules and regulations of the non-profit organization to prevent the breaching of contractual obligations that EOS Support has entered into with the EOS Network and other businesses.
III. All EOS support Squads will be greater than 18 years of age.
IV. EOS support Squads shall familiarize themselves with the EOS Support learning center articles and FAQs.
V. EOS Support Squads have to be invited into the EOS Respect community by EOS support agents.
VI. EOS Support Squad can resign or opt-out at any time by notice to the EOS Respect community and EOS support organization.
VII. EOS Support Squad members shall be professional and abide by non-violent communication.
VIII. EOS Support Squad members will participate in monthly meetings to be elected to receive funds. Each elected member will govern the funds to improve EOS Support and EOS.
IX. No EOS Support Squad member shall solicit or raise funds in the name of the EOS Support organization.
X. EOS Support Squad members with privileged information about the EOS network and how it does business, including its coding practices and designs, shall keep this information confidential.
XI. EOS Support Squad member who participates in any suspicious activity to scam or trick users shall be removed from the EOS Respect community.
XII. An EOS Support Squad who misses two consecutive monthly elections without notice would be removed from the EOS Respect community.
XIII. Any EOS Support Squad inactive for more than two months would automatically be removed from the EOS Respect community.
XIV. EOS Support Squad member who participates in issuing threats, bullying, and discriminating against others in the EOS Respect community would be investigated and, if allegations are true, would be removed through dispute resolution.
XV. EOS Support Squad members who have EOSsupport.io next to their names should be mindful when making comments in the public domain. (please remove EOSsupport.io from your name when expressing your personal views in the EOS community.)
XVI. EOS Support Squad members agree that all disputes will be resolved using> ⅔ consensus of the vote cast.
XVII. EOS Support Squad members who break bylaws repeatedly will have a dispute filed against them.
XVIII. All EOS Support Squad members agree to discuss with the leadership of the EOS Support organization if there are problems, disagreements, and disputes.
XIX. Members agree that the EOS Support organization will be funding the EOS Respect treasury and will adjust the treasury based on recommendations from EOS Support Squad delegates and the EOS support organization.
XX. Head Chief delegate, Chief delegates, and delegates of the EOS squad members could discuss feedback with the squads and the EOS support organization.
XXI. If there is a consensus to make bylaw changes for the support squad, the head chief delegate will introduce the bylaw on-chain to be ratified by the chief delegates.
XXII. Members agree that there will not be constant bylaw changes and that a bylaw not ratified on-chain would not be considered official.
XXIII. All members agree that they have joined the EOS Respect community at their will and shall not hold the EOS Support organization liable.)";
