import React from "react"
import Slider from "react-slick"
import SectionHeader from "./sectionHeader"
import PrevArrow from "./Buttons/PrevArrow"
import NextArrow from "./Buttons/NextArrow"
import trainersData from "./TrainersData"
import TrainerCard from "./TrainerCard"

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
            breakpoint: 500,
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
                        <TrainerCard
                            image={item.image}
                            name={item.name}
                            position={item.position}
                        />
                    ))}
                </Slider>
            </div>
            <div></div>
        </section>
    )
}

export default Trainers
