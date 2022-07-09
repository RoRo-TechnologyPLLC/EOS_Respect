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
    R"(I. The initial Board shall consist of the people on the Genesis Call and shall have the power to propose and ratify bylaws until such time as the first election occurs.
II. Genesis members are to only participate in up to 15 induction meetings until membership reaches 100 members.)";
