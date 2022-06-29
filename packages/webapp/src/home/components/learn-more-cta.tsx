import { Container, Heading, Button } from "_app";

interface Props {
    className?: string;
}

export const LearnMoreCTA = ({ className = "" }: Props) => (
    <div className={className}>
        <Container className="space-y-2.5">
            <Heading size={3}>
                EOS support squads coordinate, build consensus and
                elect delegates to spend pooled funds on projects
                they see fit and gain respect.
            </Heading>
            <Button
                href="https://eossupport.io"
                className="flex-shrink-0 mt-10 sm:mt-0"
                target="_blank"
                isExternal
            >
                Learn more
            </Button>
        </Container>
    </div>
);

export default LearnMoreCTA;
