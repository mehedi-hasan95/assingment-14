import Link from "next/link";

const NavMenu = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link
                    rel="noopener noreferrer"
                    href="/"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <h2 className="text-3xl">MyBlog</h2>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            href="/"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Home
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            href="/blog"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavMenu;
