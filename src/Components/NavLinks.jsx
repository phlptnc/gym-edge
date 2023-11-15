import React from "react"

function NavLinks() {
    return (
        <>
            <ul className=" hidden lg:flex mx-auto gap-11 uppercase font-semibold font-sans text-lg">
                <li>
                    <a href="/ " className="hover:text-[#fb5b21]">
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
        </>
    )
}

export default NavLinks
