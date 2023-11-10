import React from "react"
import banner from "../../public/assets/banner.png"

function Banner() {
    return (
        <>
            <div className="bg-[#f5f5f5]">
                <div className="pt-[5rem] pb-[5rem] md:pb-0 flex items-center justify-center flex-col md:flex-row">
                    <div>
                        <img
                            src={banner}
                            alt="flexing back"
                            className="w-[85%] m-auto z-10 relative"
                        />
                    </div>
                    <div className="font-sans text-center lg:ml-[-6.5rem] lg:pt-[2.5rem] md:text-left ">
                        <h2 className="uppercase font-semibold text-[3rem] min-[400px]:text-[4rem] lg:text-[6rem]">
                            Being <span className="text-[#fb5b21]">Body</span>
                        </h2>
                        <h3 className="text-[#a4a4a4] uppercase font-semibold text-[2rem] tracking-[1rem] min-[400px]:tracking-[2.2rem] mt-[-1rem] lg:text-[3.3rem] lg:tracking-[3rem] lg:mt-[-2rem]">
                            Builders
                        </h3>
                        <button className="bg-[#fb5b21] text-[#f5f5f5] uppercase font-semibold mt-5 md:mt-2 py-4 px-14 rounded-full hover:opacity-75 duration-300 ease-in-out">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
