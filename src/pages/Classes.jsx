import React from "react"
import PageTitle from "../components/Title/PageTitle"
import classData from "../components/ClassesData"

function Classes() {
    return (
        <>
            <PageTitle title="All Classes" />
            <div className="container flex flex-col min-[900px]:flex-row justify-between gap-10 py-[6rem] px-10 lg:px-0">
                <div className="flex flex-wrap justify-around gap-10 min-[920px]:gap-y-20">
                    {classData.map((item) => (
                        <div className="class-card w-[400px] duration-300 ease-in-out  hover:text-[#f5f5f5]">
                            {/* Upper */}
                            <div className="h-[350px] relative">
                                <img
                                    src={
                                        "../../assets/classes/" +
                                        item.image +
                                        ".jpg"
                                    }
                                    alt={item.class}
                                    className="h-full w-full object-cover"
                                />
                                <div className="filter top-0 bottom-0 my-auto left-0 absolute w-full h-0 translate-y-0 bg-[#00000080] duration-200 ease-in-out overflow-hidden">
                                    {/* Schedule */}
                                    <div className="schedule absolute z-20 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                                        <ul className="font-sans uppercase font-medium">
                                            <li>
                                                <ul className="flex">
                                                    <li className="w-[71px] bg-[#fb5b21] text-white py-2 ps-3 mr-[2px]">
                                                        {item.day.first}
                                                    </li>
                                                    <li className="w-[95px] bg-white text-black py-2 ps-3">
                                                        {item.time.first}
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul className="flex">
                                                    <li className="w-[71px] bg-[#fb5b21] text-white py-2 ps-3 mr-[2px]">
                                                        {item.day.second}
                                                    </li>
                                                    <li className="w-[95px] bg-white text-black py-2 ps-3">
                                                        {item.time.second}
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Lower */}
                            <div className="mx-auto w-[90%] lower mt-[-1.75rem] relative z-10 py-3 px-7 bg-[#fff] shadow-[#eee] shadow-sm rounded-full">
                                <p className="text-[1.5rem] font-semibold cursor-pointer text-center hover:underline">
                                    {item.class}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Classes
