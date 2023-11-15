import React from "react"

function Hero() {
    return (
        <>
            <section className="background bg-[url('../../assets/hero.jpg')] bg-slate-600 w-full h-[90vh] text-[#f5f5f5] flex flex-col justify-center items-center text-center mt-[84px] lg:mt-0">
                <h1 className="uppercase text-[2rem] md:text-[4.5rem] font-semibold">
                    Build <span className="text-[#fb5b21]">your</span> body
                    <span className="text-[#fb5b21]">strong</span>
                </h1>
                <p className="font-semibold text-lg md:text-[1.5rem] mb-4">
                    Ready to change your physique, but can't workout in the gym?
                </p>
                <button className="button-orange font-semibold py-4 px-9 border-2 border-[#fb5b21] rounded-full duration-300 ease-in-out">
                    Join with us
                </button>
            </section>
        </>
    )
}

export default Hero
