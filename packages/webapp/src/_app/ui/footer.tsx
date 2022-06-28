import { Image, Link } from "_app/ui";
import { ROUTES } from "_app/routes";

export const Footer = () => (
    <footer className="border-t text-gray-600 body-font border-gray-200 bg-white xs:pb-0">
        <div className="px-2.5 py-5 sm:px-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap">
                <div className="lg:w-1/4 md:w-1/2 w-full">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-1">
                        EDEN
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
                                href="https://help.eossupport.io/en/articles/5889842-how-to-join-the-genesis-english-eden-on-eos-community"
                                isExternal
                                target="_blank"
                            >
                                Get an Invite
                            </Link>
                        </li>
                    </nav>
                    <div className="flex items-center space-x-1 mb-6">
                        <Image
                            src="/images/eden-logo-small.svg"
                            alt="Eden logo"
                            className="h-4"
                        />
                        <p className="text-gray-400">EDEN</p>
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
                                href="https://eoscommunity.notion.site/Eden-Peace-Treaty-9381824206ce43ac84199861a5d60020"
                                isExternal
                                target="_blank"
                            >
                                Eden Peace Treaty
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="https://eoscommunity.notion.site/Active-bylaws-66b7d4661ba342759e82b3eef1bcdd3b"
                                isExternal
                                target="_blank"
                            >
                                Eden bylaws
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="http://eden.eoscommunity.org"
                                isExternal
                                target="_blank"
                            >
                                Eden on EOS
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="https://eoscommunity.notion.site/Eden-86ec758b069947a8b0e3d6aca2549813"
                                target="_blank"
                                isExternal
                            >
                                Eden Public Wiki
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-400"
                                href="https://github.com/EOS-Support/Eden"
                                target="_blank"
                                isExternal
                            >
                                EdenOS Github Repo
                            </Link>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);
