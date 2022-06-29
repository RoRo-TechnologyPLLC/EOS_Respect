import { Image, Link } from "_app/ui";
import { ROUTES } from "_app/routes";

export const Footer = () => (
    <footer className="border-t text-gray-600 body-font border-gray-200 bg-white xs:pb-0">
        <div className="px-2.5 py-5 sm:px-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap">
                <div className="lg:w-1/4 md:w-1/2 w-full">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-1">
                        EOS Respect
                    </h2>
                    <nav className="list-none mb-5">
                        <li>
                            <Link
                                className="text-gray-400"
                                href={ROUTES.MEMBERS.href}
                            >
                                The Community
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href={ROUTES.INDUCTION.href}
                            >
                                Membership Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="https://www.notion.so/eoscommunity/EOS-Support-Squad-a22666b89d544be1a0b2f27eb06ec8ce"
                                isExternal
                                target="_blank"
                            >
                                Become a member
                            </Link>
                        </li>
                    </nav>
                    <div className="flex items-center space-x-1 mb-6">
                        <Image
                            src="/images/eos-respect-logo-small.png"
                            alt="EOS Respect logo"
                            className="h-4"
                        />
                        <p className="text-gray-400"> EOS Respect </p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-1">
                        RESOURCES
                    </h2>
                    <nav className="list-none">
                        <li>
                            <Link
                                className="text-gray-400"
                                href="https://www.notion.so/eoscommunity/EOS-Support-Bylaws-dd63860bf4cf431cb75839e675d21725"
                                isExternal
                                target="_blank"
                            >
                                EOS-Support bylaws
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="http://eossupport.io"
                                isExternal
                                target="_blank"
                            >
                                EOS-Support
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="https://eosrespect.io"
                                target="_blank"
                                isExternal
                            >
                                EOS-Respect
                            </Link>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);
