import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-green-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold">
                            LogPatra
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/" className="hover:bg-green-500 px-3 py-2 rounded-md">
                            Home
                        </Link>
                        <Link href="/about" className="hover:bg-green-500 px-3 py-2 rounded-md">
                            About
                        </Link>
                        <Link href="/services" className="hover:bg-green-500 px-3 py-2 rounded-md">
                            Services
                        </Link>
                        <Link href="/contact" className="hover:bg-green-500 px-3 py-2 rounded-md">
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-green-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500">
                            Home
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500">
                            About
                        </Link>
                        <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500">
                            Services
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
