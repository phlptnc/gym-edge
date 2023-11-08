import React, { useState } from "react"
import NavLinks from "./NavLinks"
import { CgMenu, CgClose } from "react-icons/cg"
import logo from "../images/logo.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <nav className="flex items-center py-6 px-[2rem] mx-auto">
                <a href="/" className="lg:mx-auto">
                    <img src={logo} alt="GymEdge logo" />
                </a>
                <NavLinks />
                <div onClick={toggleMenu} className="ms-auto z-10 lg:hidden">
                    {!menuOpen ? <CgMenu size={25} /> : <CgClose size={25} />}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        !menuOpen
                            ? "lg:hidden fixed right-[-100%] top-0 h-full w-[60%] border-l-4 bg-[#F5F5F5] border-[#fb5b21] ease-in-out duration-500"
                            : "lg:hidden fixed right-[0] top-0 h-full w-[60%] border-l-4 bg-[#F5F5F5] border-[#fb5b21] ease-in-out duration-500"
                    }
                >
                    <ul className="flex flex-col items-center h-full justify-center gap-10 uppercase font-semibold font-sans text-lg">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/classes">Classes</a>
                        </li>
                        <li>
                            <a href="/schedule">Schedule</a>
                        </li>
                        <li>
                            <a href="/trainers">Trainers</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
