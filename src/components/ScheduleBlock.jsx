import React from "react"

function ScheduleBlock(props) {
    return (
        <>
            <div className="flex min-[800px]:flex-row flex-col justify-between items-center text-center min-[800px]:text-left min-[800px]:gap-0 gap-4 bg-[#f5f5f5] px-12 py-5">
                <div className="flex flex-col gap-2">
                    <p className="text-[#A0A0A0] font-medium font-sans">
                        Class Name
                    </p>
                    <p className="font-semibold text-[1.2rem]">{props.class}</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className="text-[#A0A0A0] font-medium font-sans">Time</p>
                    <p className="font-semibold text-[1.2rem]">{props.time}</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className="text-[#A0A0A0] font-medium font-sans">
                        Trainer
                    </p>
                    <p className="font-semibold text-[1.2rem]">
                        {props.trainer}
                    </p>
                </div>
                <div>
                    <button className="rounded-full bg-[#555555] text-white px-4 py-2 ease-in-out duration-200 hover:bg-[#fb5b21]">
                        Join Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default ScheduleBlock
