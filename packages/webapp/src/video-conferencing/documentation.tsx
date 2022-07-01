import Image from "next/image";

import { Container, Heading, Link, Text } from "_app/ui";
import { ROUTES } from "_app/routes";

export const ZoomDocumentation = () => (
    <Container className="space-y-10">
        <div className="space-y-2.5">
            <Heading size={3}>Prerequisites</Heading>
            <Text>
                The EOS Respect Zoom integration is used within the context of an
                ongoing election. To participate in an election, you must first{" "}
                <Link
                    href="https://www.notion.so/eoscommunity/EOS-Support-Squad-a22666b89d544be1a0b2f27eb06ec8ce"
                    target="_blank"
                    isExternal
                >
                    be a member
                </Link>{" "}
                of this EOS Respect community. Then you must{" "}
                <Link href={ROUTES.ELECTION.href} target="_blank">
                    opt-in to an upcoming election
                </Link>{" "}
                more than 24 hours prior to the start of the election.
            </Text>
        </div>
        <div className="space-y-2.5">
            <Heading size={3}>Installation</Heading>
            <Heading size={4}>1. Sign in with Zoom</Heading>
            <Text>
                When your election round begins, you will find yourself randomly
                grouped with 3 or 4 other EOS Respect members in an Election group. If
                no Zoom link has been generated by another member of your group
                yet, you'll see a "Sign in with Zoom" button.
            </Text>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                <div className="space-y-2.5 text-center">
                    <Text type="info">Click "Sign in with Zoom"</Text>
                    <Screenshot fileName="1-sign-in-with-zoom.webp" />
                </div>
                <div className="space-y-2.5 text-center">
                    <Text type="info">And continue to "Link Zoom account"</Text>
                    <Screenshot fileName="2-link-zoom-account-modal.webp" />
                </div>
            </div>
        </div>
        <div className="space-y-2.5">
            <Heading size={4}>2. Authorize the EOS Respect Genesis Zoom app</Heading>
            <Text>
                You'll be redirected to the Zoom website where you'll be asked
                to install the EOS Respect Genesis app integration with Zoom. Click
                "Authorize" and you'll be redirected back to the in-progress
                election.
            </Text>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                <div className="space-y-2.5 text-center">
                    <Text type="info">Click "Authorize"</Text>
                    <Screenshot fileName="3-authorize.webp" />
                </div>
                <div className="space-y-2.5 text-center">
                    <Text type="info">
                        Redirecting to the in-progress election
                    </Text>
                    <Screenshot fileName="4-redirecting.webp" />
                </div>
            </div>
        </div>
        <div className="space-y-2.5">
            <Heading size={3}>Usage</Heading>
            <Heading size={4}>
                3. Create the meeting link for your group
            </Heading>
            <Text>
                Back on the election page, you'll now see a blue "Get meeting
                link" button. Click that button and "Continue" in the resulting
                modal window.
            </Text>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                <div className="space-y-2.5 text-center">
                    <Text type="info">Click "Get meeting link"</Text>
                    <Screenshot fileName="5-get-meeting-link.webp" />
                </div>
                <div className="space-y-2.5 text-center">
                    <Text type="info">Click "Continue"</Text>
                    <Screenshot fileName="6-continue.webp" />
                </div>
            </div>
        </div>
        <div className="space-y-2.5">
            <Heading size={4}>4. Finish creating the meeting link</Heading>
            <Text>
                You may be asked to sign a transaction. Complete the signing
                ceremony with whichever EOSIO authenticator you're using.
            </Text>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                <div className="space-y-2.5 text-center">
                    <Text type="info">Sign EOSIO transaction</Text>
                    <Screenshot fileName="7-sign.webp" />
                </div>
                <div className="space-y-2.5 text-center">
                    <Text type="info">Success!</Text>
                    <Screenshot fileName="8-success.webp" />
                </div>
            </div>
        </div>
        <div className="space-y-2.5">
            <Heading size={4}>5. Join your group in the meeting</Heading>
            <Text>
                You've created a Zoom meeting link for your group! On the
                ongoing election page, you should now see a "Join meeting"
                button. If the round has not yet started, it will be disabled
                until the round begins. Once enabled, click the button and work
                with your group to come to consensus!
            </Text>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                <div className="space-y-2.5 text-center">
                    <Text type="info">Waiting for round to begin</Text>
                    <Screenshot fileName="9-wait-to-join.webp" />
                </div>
                <div className="space-y-2.5 text-center">
                    <Text type="info">Join the meeting!</Text>
                    <Screenshot fileName="10-join-meeting.webp" />
                </div>
            </div>
        </div>
        <div className="space-y-2.5">
            <Heading size={3}>Uninstallation</Heading>
            <Text>
                Uninstalling the EOS Respect Zoom app integration will decouple your
                Zoom account from EOS Respect. EOS Respect will no longer be able to
                schedule election meetings on your behalf unless you reinstall
                the application according to the Installation instructions
                above. Because EOS Respect does not store any information relating to
                your Zoom account, no information is retained after you
                uninstall the Zoom app.
            </Text>
            <ol className="list-inside list-decimal">
                <li>
                    Login to your Zoom Account and navigate to the Zoom App
                    Marketplace.
                </li>
                <li>
                    Click{" "}
                    <span className="font-medium">
                        Manage &gt; Installed Apps
                    </span>{" "}
                    or search for the "EOS Respect Genesis" app.
                </li>
                <li>Click the "EOS Respect Genesis" app.</li>
                <li>
                    Click <span className="font-medium">uninstall</span>.
                </li>
            </ol>
        </div>
    </Container>
);

export default ZoomDocumentation;

const Screenshot = ({ fileName }: { fileName: string }) => (
    <div className="max-w-xs shadow-md border">
        <Image
            src={`/images/zoom-walkthrough/${fileName}`}
            width={920}
            height={1770}
        />
    </div>
);
