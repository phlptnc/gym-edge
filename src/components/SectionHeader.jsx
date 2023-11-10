import React from "react"
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2"

function SectionHeader(props) {
    return (
        <>
            <div className="flex justify-between items-center pb-[3rem]">
                <h2 className="text-[1.3rem] min-[400px]:text-[2rem] font-semibold uppercase">
                    {props.title}
                </h2>
                <span className="w-0 md:w-[50%] lg:w-[65%] border border-[#e0e0e0]"></span>
                <div className="flex flex-row gap-[5px]">
                    <i className="button-black text-[#f5f5f5] text-[50px] min-[400px]:text-[30px] w-6 h-6 min-[400px]:w-8 min-[400px]:h-8 bg-[#fb5b21] flex items-center justify-center ease-in-out duration-300">
                        <HiMiniChevronLeft />
                    </i>

                    <i className="button-black text-[#f5f5f5] text-[50px] min-[400px]:text-[30px] w-6 h-6 min-[400px]:w-8 min-[400px]:h-8  bg-[#fb5b21] flex items-center justify-center ease-in-out duration-300">
                        <HiMiniChevronRight size={30} />
                    </i>
                </div>
            </div>
        </>
    )
}

export default SectionHeader
