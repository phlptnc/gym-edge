import React from "react"
import SectionHeader from "./sectionHeader"
import Slider from "react-slick"
import PrevArrow from "./Buttons/PrevArrow"
import NextArrow from "./Buttons/NextArrow"
import postData from "./PostData"
import PostCard from "./PostCard"

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
    return (
        <>
            <section className="bg-[#f5f5f5]">
                <div className="container py-[3rem] min-[400px]:py-[6rem] px-10 lg:px-0 ">
                    <SectionHeader title="Latest Posts" />
                    <Slider {...settings}>
                        {postData.map((item) => (
                            <PostCard
                                title={item.title}
                                date={item.date}
                                description={item.description}
                            />
                        ))}
                    </Slider>
                    <div className="flex justify-between gap-6"></div>
                </div>
            </section>
        </>
    )
}

export default Post
