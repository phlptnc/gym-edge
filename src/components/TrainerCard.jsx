import React from "react"
import { BiSolidChevronUp } from "react-icons/bi"
import {
    RiFacebookFill,
    RiTwitterXFill,
    RiInstagramFill,
    RiMailLine,
} from "react-icons/ri"

function TrainerCard(props) {
    return (
        <>
            <div className="trainers-card w-[300px] relative after:content-[''] after:h-[4px] after:w-[20%] after:bg-[#fb5b21] after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:ease-in-out after:duration-700 cursor-pointer hover:after:w-[100%]">
                {/* Upper */}
                <div className="bg-[url('../../assets/trainer/bg-splash.png')] bg-[length:290px_400px] bg-no-repeat bg-[center_top_1.5rem] flex flex-col items-center justify-end h-[290px] relative overflow-hidden">
                    <img
                        src={"../../assets/trainer/" + props.image + ".png"}
                        alt={props.name}
                        className="h-[100%] grayscale ease-in-out duration-300 hover:grayscale-0"
                    />
                    <div className="mt-[-29px] absolute translate-y-[291px] ease-in-out duration-300 hover:translate-y-0">
                        <div className="bg-[url('../../assets/trainer/button.png')] bg-no-repeat bg-cover w-[130px] h-[1.8rem] mx-auto flex item-center justify-center pt-[5px]">
                            <BiSolidChevronUp size={25} />
                        </div>

                        <p className="bg-[#00000080] h-[290px] p-[2.5rem] text-[#f5f5f5] leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quasi, et, assumenda nobis non dignissimos
                            veritatis deserunt odit, fugiat doloremque
                            voluptates explicabo? Corporis itaque quae
                            consequatur sapiente maiores?
                        </p>
                    </div>
                </div>
                {/* Lower */}
                <div className="lower bg-[#f5f5f5] flex flex-col justify-center items-center py-[2rem]">
                    <p className="text-[1.5rem] font-semibold ease-in-out duration-300 hover:text-[#fb5b21]">
                        {props.name}
                    </p>
                    <p className="font-semibold text-[#646464] font-sans">
                        {props.position}
                    </p>
                    <div className="flex justify-center gap-3 mt-3 text-[20px] text-[#646464]">
                        <RiFacebookFill className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                        <RiTwitterXFill className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                        <RiInstagramFill className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                        <RiMailLine className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainerCard
