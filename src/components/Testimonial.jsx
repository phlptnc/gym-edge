import React from "react"
import SectionHeader from "./sectionHeader"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BiSolidQuoteLeft } from "react-icons/bi"

var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
    ],
}

const testimonialData = [
    {
        name: "Peter Parker",
        comments:
            "Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.",
    },
    {
        name: "Gwen Stacy",
        comments:
            "Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.",
    },
    {
        name: "Lebonk James",
        comments:
            "Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.",
    },
    {
        name: "Stewart Little",
        comments:
            "Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.",
    },
]

function Testimonial() {
    return (
        <>
            <section className="testimonials">
                <div className="container px-10 lg:px-0 pt-[9rem] pb-[12rem]">
                    <SectionHeader title="What client's say" />
                    <Slider {...settings} className="testimonials">
                        {/* Testimonail Card */}
                        {testimonialData.map((item) => (
                            <div className="testimonial-card gap-7 flex-col min-[450px]:flex-row">
                                {/* left */}
                                <div className="w-fit min-[-450px]:mx-auto">
                                    <div className="bg-[#ececec] rounded-full overflow-hidden w-[100px] h-[100px]">
                                        <img
                                            src={
                                                "../../assets/testimonials/" +
                                                item.name +
                                                ".jpg"
                                            }
                                            alt={item.name}
                                            className="ml-2 rounded-full"
                                        />
                                    </div>
                                </div>
                                {/* right */}
                                <div className="flex flex-col gap-4 font-sans">
                                    <div className="h-[50px] relative flex after:contents-[''] after:absolute after:bottom-0 after:left-0 after:border after:border-[#fb5b21] after:w-[3rem]">
                                        <p className="text-[1.3rem] font-semibold me-auto">
                                            {item.name}
                                        </p>
                                        <div className="text-[25px] text-[#c4c4c4] me-9 min-[320px]:block hidden">
                                            <BiSolidQuoteLeft />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">
                                        {item.comments}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Testimonial
