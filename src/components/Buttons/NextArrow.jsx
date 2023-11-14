import React from "react"
import { HiMiniChevronRight } from "react-icons/hi2"

function NextArrow({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="absolute top-[-4.8rem] min-[450px]:top-[-5.5rem] right-0 lg:right-0"
        >
            <div className="button-black text-[#f5f5f5] text-[50px] min-[450px]:text-[30px] w-6 h-6 min-[450px]:w-8 min-[450px]:h-8 bg-[#fb5b21] flex items-center justify-center ease-in-out duration-300">
                <HiMiniChevronRight />
            </div>
        </div>
    )
}

export default NextArrow
