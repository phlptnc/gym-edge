import React from "react"

function NavLinks() {
    return (
        <>
            <ul className=" hidden lg:flex mx-auto gap-11 uppercase font-semibold font-sans text-lg">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Classes</a>
                </li>
                <li>
                    <a href="/">Schedule</a>
                </li>
                <li>
                    <a href="/">Trainers</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
            </ul>
        </>
    )
}

export default NavLinks
