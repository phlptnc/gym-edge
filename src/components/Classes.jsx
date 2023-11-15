import React from "react"
import Slider from "react-slick"
import PrevArrow from "./Buttons/PrevArrow"
import NextArrow from "./Buttons/NextArrow"
import SectionHeader from "./SectionHeader"
import { BsPersonFill } from "react-icons/bs"
import classData from "./ClassesData"

var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    draggable: true,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

function Classes() {
    return (
        <>
            <section>
                <div className="container px-10 lg:px-0 py-[9rem]  relative">
                    <SectionHeader title="Featured Classes" />
                    <Slider {...settings}>
                        {classData.map((item) => (
                            <div className="class-card w-[380px] duration-300 ease-in-out hover:text-[#f5f5f5]">
                                {/* Upper */}
                                <div className="h-250px relative">
                                    <img
                                        src={
                                            "../../assets/classes/" +
                                            item.image +
                                            ".jpg"
                                        }
                                        alt={item.class}
                                        className="h-[250px] w-full object-cover"
                                    />
                                    <div className="filter top-0 bottom-0 my-auto absolute w-full h-0 translate-y-0 bg-[#00000080] duration-200 ease-in-out overflow-hidden">
                                        {/* Schedule */}
                                        <div className="schedule absolute z-20 bottom-0 ">
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
                                <div className="lower pt-6 pb-7 px-7 bg-[#f5f5f5]">
                                    <p className="text-[1.5rem] font-semibold cursor-pointer w-fit hover:underline">
                                        {item.class}
                                    </p>
                                    <div className="flex pt-2">
                                        <span className="text-[#fb5b21] text-[20px] mr-2 duration-300  ease-in-out">
                                            <BsPersonFill />
                                        </span>
                                        <p className="font-regular text-[15px]">
                                            {item.name.first},{" "}
                                            {item.name.second}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Classes
