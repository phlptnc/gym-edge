import React, { useState } from "react"
import NavLinks from "./NavLinks"
import { CgMenu, CgClose } from "react-icons/cg"
import logo from "/public/assets/logo.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <nav className="flex items-center py-5 px-[2rem] mx-auto fixed lg:static z-40 bg-[#fff] w-full border-b-2 border-[#fb5b21]">
                <a href="/" className="lg:mx-auto">
                    <img src={logo} alt="GymEdge logo" />
                </a>
                <NavLinks />
                <div
                    onClick={toggleMenu}
                    className="ms-auto z-50 lg:hidden fixed right-10"
                >
                    {!menuOpen ? <CgMenu size={25} /> : <CgClose size={25} />}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        !menuOpen
                            ? "lg:hidden fixed right-[-100%] top-0 h-full w-[60%] border-l-4 bg-[#F5F5F5] border-[#fb5b21] z-40 ease-in-out duration-500"
                            : "lg:hidden fixed right-[0] top-0 h-full w-[60%] border-l-4 bg-[#F5F5F5] border-[#fb5b21] z-40 ease-in-out duration-500"
                    }
                >
                    <ul className="flex flex-col items-center h-full justify-center gap-10 uppercase font-semibold font-sans text-lg">
                        <li>
                            <a
                                href="/"
                                className="hover:text-[#fb5b21] ease-in-out duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-[#fb5b21] ease-in-out duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/classes"
                                className="hover:text-[#fb5b21] ease-in-out duration-300"
                            >
                                Classes
                            </a>
                        </li>
                        <li>
                            <a
                                href="/schedule"
                                className="hover:text-[#fb5b21] ease-in-out duration-300"
                            >
                                Schedule
                            </a>
                        </li>
                        <li>
                            <a
                                href="/trainers"
                                className="hover:text-[#fb5b21] ease-in-out duration-300"
                            >
                                Trainers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/blog"
                                className="hover:text-[#fb5b21] ease-in-out duration-300"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
