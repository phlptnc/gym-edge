import React from "react"
import woman from "/assets/stretching-woman.png"
import { FaBrain, FaPersonRunning, FaArrowsUpDown } from "react-icons/fa6"
import FitnessContent from "./FitnessContent"

function Fitness() {
    return (
        <>
            <section className="flex flex-col md:flex-row relative">
                <div className="hidden md:block orange-box w-10 h-10 bg-[#fb5b21] absolute right-0 left-0 bottom-0 top-0 mx-auto my-auto rotate-45"></div>
                <div className="md:w-[50%] bg-[#fb5b21] py-[6rem] flex justify-center items-center relative">
                    <img
                        src={woman}
                        alt="woman stretching"
                        className=" w-[550px] md:ms-auto"
                    />
                    <div className="text-right absolute top-[25%] right-[5%]">
                        <h2 className="text-[#f5f5f5] text-[4.3rem]">
                            All <span className="font-bold">About</span>
                            <br /> Fitness
                        </h2>
                    </div>
                </div>
                <div className="md:w-[50%] bg-[#f5f5f5] flex flex-col justify-center gap-[3rem] py-[6rem] px-[3rem] lg:ps-[5rem] ">
                    <FitnessContent
                        icon={<FaArrowsUpDown />}
                        title="Weight Lifting"
                        description="Weightlifting, also called Olympic weightlifting, is
                            an athletic discipline in the modern Olympic
                            programme in which the athlete attempts a
                            maximum-weight single lift of a barbell loaded with
                            weight plates."
                    />
                    <FitnessContent
                        icon={<FaPersonRunning />}
                        title="Running"
                        description="Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet."
                    />
                    <FitnessContent
                        icon={<FaBrain size={25} />}
                        title="Yoga"
                        description="Yoga, is a meditative means of discovering dysfunctional perception and cognition, as well as overcoming it for release from suffering, inner peace and salvation"
                    />
                </div>
            </section>
        </>
    )
}

export default Fitness
