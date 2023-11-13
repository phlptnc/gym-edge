import React from "react"
import { HiMiniChevronLeft } from "react-icons/hi2"

function PrevArrow({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="absolute top-[9.2rem] min-[450px]:top-[9.5rem] right-[4.2rem] min-[450px]:right-[4.7rem] lg:right-[2.2rem]"
        >
            <div className="button-black text-[#f5f5f5] text-[50px] min-[450px]:text-[30px] w-6 h-6 min-[450px]:w-8 min-[450px]:h-8 bg-[#fb5b21] flex items-center justify-center ease-in-out duration-300">
                <HiMiniChevronLeft />
            </div>
        </div>
    )
}

export default PrevArrow
