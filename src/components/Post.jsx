import React from "react"
import SectionHeader from "./sectionHeader"
import Slider from "react-slick"
import PrevArrow from "./Buttons/PrevArrow"
import NextArrow from "./Buttons/NextArrow"

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
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

function Post() {
    const postData = [
        {
            date: "04 May 2023",
            title: "My Transformation Journey",
            description:
                "Be inspire and motivated as we venture the transformation journey of one of our clients. From thin young boy, to a solid body.",
        },
        {
            date: "14 Nov 2023",
            title: "Yoga for Everyone 2023",
            description:
                "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.",
        },
        {
            date: "01 Nov 2023",
            title: "Keeping your Body Healthy",
            description:
                "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.",
        },
        {
            date: "14 Nov 2023",
            title: "Yoga for Everyone 2023",
            description:
                "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.",
        },
    ]

    return (
        <>
            <section className="bg-[#f5f5f5]">
                <div className="container py-[3rem] min-[400px]:py-[6rem] px-10 lg:px-0 ">
                    <SectionHeader title="Latest Posts" />

                    <Slider {...settings}>
                        {postData.map((item) => (
                            // Card
                            <div className="blog-card">
                                {/* image */}
                                <div className="relative">
                                    <div className="bg-[#fb5b21] text-center text-[#f5f5f5] font-semibold font-sans leading-5 min-[400px]:py-3 py-1 min-[400px]:px-3 px-1 absolute min-[400px]:left-5 left-3 top-[-1rem] z-20">
                                        <p className="w-[40px] text-[0.8rem] min-[400px]:text-[1rem]">
                                            {item.date}
                                        </p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <img
                                            src={
                                                "../../assets/blog/" +
                                                item.title +
                                                ".jpg"
                                            }
                                            alt={item.title}
                                            className="h-[200px] min-[400px]:h-[250px] w-full hover:scale-110 ease-in-out duration-700 cursor-pointer object-cover"
                                        />
                                    </div>
                                </div>
                                {/* lower section */}
                                <h3 className="text-[1.2rem] min-[400px]:text-[1.5rem] font-semibold hover:text-[#fb5b21] hover:underline cursor-pointer ease-in-out duration-300">
                                    {item.title}
                                </h3>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-between gap-6"></div>
                </div>
            </section>
        </>
    )
}

export default Post
