import React from "react"

function Pricing() {
    const pricingData = [
        {
            title: "Standard",
            price: "99",
            lists: [
                "Free Hand",
                "Gym Fitness",
                "Running",
                "-------",
                "-------",
            ],
        },
        {
            title: "Premium",
            price: "199",
            lists: ["Free Hand", "Gym Fitness", "Running", "Yoga", "-------"],
        },
        {
            title: "Platinum",
            price: "299",
            lists: [
                "Free Hand",
                "Gym Fitness",
                "Running",
                "Body Building",
                "-------",
            ],
        },
    ]

    return (
        <>
            <section className="bg-[#222222]">
                <div className="container py-[6rem] px-10 lg:px-0">
                    <h2 className="uppercase text-[#f5f5f5] text-[2rem] font-semibold pb-[3rem]">
                        Our pricing plan
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-between gap-6">
                        {pricingData.map((item) => (
                            <div className="price-wrapper relative sm:w-[31%]">
                                <div className="float sm:h-[650px] py-[3rem] sm:py-0 bg-[#fff] flex flex-col gap-10 justify-center items-center relative z-20 ease-in-out duration-300">
                                    <h4 className="uppercase text-[1.2rem] font-semibold font-sans tracking-[0.3rem]">
                                        {item.title}
                                    </h4>
                                    <h3 className="text-[#fb5b21] text-[3rem] font-semibold font-sans">
                                        ${item.price}
                                        <span className="text-[#a4a4a4] text-[1.3rem]">
                                            /month
                                        </span>
                                    </h3>
                                    <div>
                                        <ul className="text-center font-semibold flex flex-col gap-3">
                                            <li>{item.lists[0]}</li>
                                            <li>{item.lists[1]}</li>
                                            <li>{item.lists[2]}</li>
                                            <li>{item.lists[3]}</li>
                                            <li>{item.lists[4]}</li>
                                        </ul>
                                    </div>
                                    <button className="button-orange border-[#fb5b21] border-2 py-3 px-9 rounded-full font-semibold hover:underline ease-in-out duration-300">
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
