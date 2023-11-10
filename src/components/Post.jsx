import React from "react"
import SectionHeader from "./sectionHeader"

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
    ]

    return (
        <>
            <section className="bg-[#f5f5f5]">
                <div className="container py-[3rem] min-[400px]:py-[6rem] px-10 lg:px-0 ">
                    <SectionHeader title="Latest Posts" />
                    <div className="flex justify-between gap-6">
                        {postData.map((item) => (
                            <div className="blog md:w-1/3 flex flex-col gap-3">
                                {/* image */}
                                <div className="relative">
                                    <div className="bg-[#fb5b21] text-center text-[#f5f5f5] font-semibold font-sans leading-5 py-3 px-3 absolute left-5 top-[-1rem] z-20">
                                        <p className="w-[40px]">{item.date}</p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <img
                                            src={
                                                "../../assets/blog/" +
                                                item.title +
                                                ".jpg"
                                            }
                                            alt={item.title}
                                            className="h-[150px] min-[400px]:h-[250px] w-full hover:scale-110 ease-in-out duration-700 cursor-pointer"
                                        />
                                    </div>
                                </div>
                                {/* lower section */}
                                <h3 className="text-[1.5rem] min-[400px]:text-[2rem] font-semibold hover:text-[#fb5b21] hover:underline cursor-pointer ease-in-out duration-300">
                                    {item.title}
                                </h3>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post
