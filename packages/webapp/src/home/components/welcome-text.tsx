import { Container, Heading, Link, Text } from "_app";

interface Props {
    className?: string;
}

export const WelcomeText = ({ className = "" }: Props) => (
    <div className={className}>
        <Container className="grid grid-cols-2 gap-2.5 lg:gap-4">
            <FirstParagraph className="col-span-2 lg:col-span-1" />
            <SecondParagraph className="col-span-2 lg:col-span-1" />
        </Container>
    </div>
);

export default WelcomeText;

const FirstParagraph = ({ className = "" }: { className?: string }) => (
    <div className={"space-y-2.5 " + className}>
        <Heading size={2}>Welcome to EOS Respect</Heading>
        <Text>
            EOS Respect creates the opportunity for community members to pool
            money, align with those that will be voted to receive funds and
            allocate those funds for EOS support's interest.
        </Text>
    </div>
);

const SecondParagraph = ({ className = "" }: { className?: string }) => (
    <div className={"space-y-2.5 " + className}>
        <Text>
            Individual members can maximize their independence by becoming
            an EOS support squad member and just recieving some pooled funds
            and collaborating for the betterment of EOS and EOS support.
        </Text>
        <Text>
            To learn more, visit{" "}
            <Link
                href="http://eosrespect.io"
                target="_blank"
                isExternal
            >
                eosrespect.io
            </Link>
            .
        </Text>
    </div>
);
