import React from "react"
import { HiMiniChevronLeft } from "react-icons/hi2"

function PrevArrow({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="absolute top-[-1.8rem] min-[450px]:top-[-2.5rem] right-[1.7rem] min-[450px]:right-[2.2rem] lg:right-[2.2rem] z-50"
        >
            <div className="button-black text-[#f5f5f5] text-[50px] min-[450px]:text-[30px] w-6 h-6 min-[450px]:w-8 min-[450px]:h-8 bg-[#fb5b21] flex items-center justify-center ease-in-out duration-300">
                <HiMiniChevronLeft />
            </div>
        </div>
    )
}

export default PrevArrow
