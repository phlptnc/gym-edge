import React from "react"
import { Link } from "react-router-dom"

function Saturday() {
    return (
        <>
            <div className="flex justify-center gap-4 font-semibold">
                <Link
                    to="/schedule/monday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Monday
                </Link>
                <Link
                    to="/schedule/tuesday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Tuesday
                </Link>
                <Link
                    to="/schedule/wednesday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Wednesday
                </Link>
                <Link
                    to="/schedule/thursday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Thursday
                </Link>
                <Link
                    to="/schedule/friday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Friday
                </Link>
                <Link
                    to="/schedule/saturday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Saturday
                </Link>
                <Link
                    to="/schedule/sunday"
                    className="border rounded-full px-5 py-2 ease-in-out duration-200 hover:text-white hover:bg-[#fb5b21]"
                >
                    Sunday
                </Link>
            </div>
            {/* Schedules */}
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center bg-[#f5f5f5] px-12 py-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-[#A0A0A0] font-medium font-sans">
                            Class Name
                        </p>
                        <p className="font-semibold text-[1.2rem]">Crossfit</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#A0A0A0] font-medium font-sans">
                            Time
                        </p>
                        <p className="font-semibold text-[1.2rem]">
                            9:00 AM - 11:00 AM
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#A0A0A0] font-medium font-sans">
                            Trainer
                        </p>
                        <p className="font-semibold text-[1.2rem]">
                            Johnny Bravo
                        </p>
                    </div>
                    <div>
                        <button className="rounded-full bg-[#555555] text-white px-4 py-2 ease-in-out duration-200 hover:bg-[#fb5b21]">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Saturday
