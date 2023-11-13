import React from "react"
import Slider from "react-slick"
import SectionHeader from "./sectionHeader"
import PrevArrow from "./Buttons/PrevArrow"
import NextArrow from "./Buttons/NextArrow"
import trainersData from "./TrainersData"
import { BiSolidChevronUp } from "react-icons/bi"
import {
    RiFacebookFill,
    RiTwitterXFill,
    RiInstagramFill,
    RiMailLine,
} from "react-icons/ri"

var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    draggable: true,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

function Trainers() {
    return (
        <section className="bg-[url('../../assets/trainer/trainers-bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="container px-10 lg:px-0 py-[9rem] overflow-hidden relative">
                {/* Title Header */}
                <SectionHeader title="Expert Trainers" />
                <Slider {...settings}>
                    {/* Card */}
                    {trainersData.map((item) => (
                        <div className="w-[300px] relative after:content-[''] after:h-[4px] after:w-[20%] after:bg-[#fb5b21] after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:ease-in-out after:duration-700 cursor-pointer hover:after:w-[100%]">
                            {/* Upper */}
                            <div className="bg-[url('../../assets/trainer/bg-splash.png')] bg-[length:290px_400px] bg-no-repeat bg-[center_top_1.5rem] flex flex-col items-center justify-end h-[290px] relative overflow-hidden">
                                <img
                                    src={
                                        "../../assets/trainer/" +
                                        item.image +
                                        ".png"
                                    }
                                    alt={item.name}
                                    className="h-[100%] grayscale ease-in-out duration-300 hover:grayscale-0"
                                />
                                <div className="mt-[-29px] absolute translate-y-[291px] ease-in-out duration-300 hover:translate-y-0">
                                    <div className="bg-[url('../../assets/trainer/button.png')] bg-no-repeat bg-cover w-[130px] h-[1.8rem] mx-auto flex item-center justify-center pt-[5px]">
                                        <BiSolidChevronUp size={25} />
                                    </div>

                                    <p className="bg-[#00000080] h-[290px] p-[2.5rem] text-[#f5f5f5] leading-relaxed">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Quasi, et, assumenda
                                        nobis non dignissimos veritatis deserunt
                                        odit, fugiat doloremque voluptates
                                        explicabo? Corporis itaque quae
                                        consequatur sapiente maiores?
                                    </p>
                                </div>
                            </div>
                            {/* Lower */}
                            <div className="lower bg-[#f5f5f5] flex flex-col justify-center items-center py-[2rem]">
                                <p className="text-[1.5rem] font-semibold ease-in-out duration-300 hover:text-[#fb5b21]">
                                    {item.name}
                                </p>
                                <p className="font-semibold text-[#646464] font-sans">
                                    {item.position}
                                </p>
                                <div className="flex justify-center gap-3 mt-3 text-[20px] text-[#646464]">
                                    <RiFacebookFill className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                                    <RiTwitterXFill className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                                    <RiInstagramFill className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                                    <RiMailLine className="ease-in-out duration-300 hover:text-[#fb5b21]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div></div>
        </section>
    )
}

export default Trainers
