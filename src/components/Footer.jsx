import React from "react"
import logo from "../../public/assets/logo.png"
import { RiFacebookFill, RiTwitterXFill, RiInstagramFill } from "react-icons/ri"

function Footer() {
    return (
        <>
            <footer className="bg-[#121212]">
                <div className="container py-[5rem]">
                    <div className="flex justify-between md:flex-row flex-col gap-[3rem] items-center">
                        <div className="text-[#b3b3b3] flex flex-col gap-6  w-3/4 md:w-[40%]">
                            <a href="/">
                                <img
                                    src={logo}
                                    alt="website logo"
                                    className="w-[15rem]"
                                />
                            </a>

                            <p>
                                Take your health and body to the next level with
                                our comprehensive program designed to help you
                                reach your fitness goals.
                            </p>
                            <div className="flex gap-3 text-[#f5f5f5]">
                                <div className="button-white w-9 h-9 rounded-full bg-[#fb5b21] flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                    <RiFacebookFill size={25} />
                                </div>
                                <div className="button-white w-9 h-9 rounded-full bg-[#fb5b21] flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                    <RiTwitterXFill size={20} />
                                </div>
                                <div className="button-white w-9 h-9 rounded-full bg-[#fb5b21] flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                    <RiInstagramFill size={25} />
                                </div>
                            </div>
                            <div>
                                <p>Privacy Policy | © 2016 GymEdge</p>
                                <p>
                                    Design by
                                    <a
                                        href="https://www.radiustheme.com/"
                                        target="_blank"
                                        className="ml-[5px]"
                                    >
                                        RadiusTheme
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="text-[#b3b3b3] flex flex-col gap-6 w-3/4 md:w-auto">
                            <h3 className="text-2xl font-semibold  text-[#f5f5f5]">
                                Our Classes
                            </h3>
                            <p className="hover:text-[#fb5b21] font-medium hover:font-semibold cursor-pointer ease-in-out duration-300">
                                Fitness Classes
                            </p>
                            <p className="hover:text-[#fb5b21] font-medium hover:font-semibold cursor-pointer ease-in-out duration-300">
                                Aerobics Classes
                            </p>
                            <p className="hover:text-[#fb5b21] font-medium hover:font-semibold cursor-pointer ease-in-out duration-300">
                                Power Yoga
                            </p>
                            <p className="hover:text-[#fb5b21] font-medium hover:font-semibold cursor-pointer ease-in-out duration-300">
                                Lean Machines
                            </p>
                            <p className="hover:text-[#fb5b21] font-medium hover:font-semibold cursor-pointer ease-in-out duration-300">
                                Full Body Strength
                            </p>
                        </div>
                        <div className="text-[#b3b3b3] flex flex-col gap-6 w-3/4 md:w-auto">
                            <h3 className="text-2xl text-[#f5f5f5] font-semibold">
                                Working Hours
                            </h3>
                            <p className="font-semibold">Monday - Friday:</p>
                            <p>7:00am - 21:00pm</p>
                            <p className="font-semibold">Saturday:</p>
                            <p>7:00am - 19:00pm</p>
                            <p className="font-semibold">Sunday - Closed</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
