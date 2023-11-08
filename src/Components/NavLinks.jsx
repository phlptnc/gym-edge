import React from "react"

function NavLinks() {
    return (
        <>
            <ul className=" hidden lg:flex mx-auto gap-11 uppercase font-semibold font-sans text-lg">
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
        </>
    )
}

export default NavLinks
