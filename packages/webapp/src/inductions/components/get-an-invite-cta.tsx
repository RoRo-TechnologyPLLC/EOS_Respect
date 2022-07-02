import { Button } from "_app";
import { InductionStepsContainer, InductionStepInvitee } from "inductions";

export const GetAnInviteCTA = () => {
    return (
        <InductionStepsContainer step={InductionStepInvitee.GetInvite}>
            <>
                <p className="mb-10 text-2xl font-medium title-font text-gray-900">
                    Ready to join EOS Respect? The membership process begins with an
                    invitation. Reach out to a current member to get yours!
                    We'll guide you through the rest.
                </p>
                <Button
                    href="https://www.notion.so/eoscommunity/EOS-Support-Squad-a22666b89d544be1a0b2f27eb06ec8ce"
                    size="lg"
                    target="_blank"
                    isExternal
                >
                    Learn more
                </Button>
            </>
        </InductionStepsContainer>
    );
};
