import React from "react"

function Banner2() {
    return (
        <>
            <div className="bg-[url('../../assets/banner-2.jpg')] bg-fixed bg-left bg-no-repeat bg-cover">
                <div className="container text-[#f5f5f5] uppercase px-10 lg:px-0 py-[6.5rem] flex items-center">
                    <div className="m-auto w-fit">
                        <h2 className="text-[2.2rem] font-semibold">
                            Fitness classes this summer.
                        </h2>
                        <p className="my-[2rem]  text-[2rem] leading-tight">
                            Pay now and <br /> get{" "}
                            <span className="text-[#fb5b21]">35%</span> discount
                        </p>
                        <button className="button-orange uppercase font-semibold border-2 border-[#fb5b21] rounded-full px-6 py-3 duration-300 ease-in-out">
                            Become a member
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner2
