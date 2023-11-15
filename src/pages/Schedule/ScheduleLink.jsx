import React from "react"
import { NavLink } from "react-router-dom"

function ScheduleLink() {
    return (
        <>
            <div className="schedule-link flex flex-wrap justify-center gap-4 font-semibold">
                <NavLink
                    to="/schedule/monday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Monday
                </NavLink>
                <NavLink
                    to="/schedule/tuesday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Tuesday
                </NavLink>
                <NavLink
                    to="/schedule/wednesday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Wednesday
                </NavLink>
                <NavLink
                    to="/schedule/thursday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Thursday
                </NavLink>
                <NavLink
                    to="/schedule/friday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Friday
                </NavLink>
                <NavLink
                    to="/schedule/saturday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Saturday
                </NavLink>
                <NavLink
                    to="/schedule/sunday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Sunday
                </NavLink>
            </div>
        </>
    )
}

export default ScheduleLink
