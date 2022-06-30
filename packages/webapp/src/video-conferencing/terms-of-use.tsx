import { Container, Link, Text } from "_app/ui";

export const ZoomTermsOfUse = () => {
    return (
        <Container className="space-y-2.5">
            <Text>
                By using EOS Respect integration with Zoom, you
                understand and accept that EOS Respect will schedule
                meetings on your behalf (but specifically and only when you
                request that a meeting be created) and will invite your election
                meeting co-participants to join and participate in those
                meetings.
            </Text>
            <Text>
                More widely, your membership in the EOS Respect community and your use
                of the EOS Respect software is voluntary and subject to the terms of
                the{" "}
                <Link
                    href="https://www.notion.so/eoscommunity/EOS-Support-Bylaws-dd63860bf4cf431cb75839e675d21725"
                    target="_blank"
                    isExternal
                >
                    EOS-Support bylaws
                </Link>
                .{" "}
            </Text>
        </Container>
    );
};

export default ZoomTermsOfUse;
