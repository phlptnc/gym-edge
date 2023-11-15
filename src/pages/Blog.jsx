import React from "react"
import PageTitle from "../components/Title/PageTitle"
import PostCard from "../components/PostCard"
import postData from "../components/PostData"
import OutlineButton from "../components/Buttons/OutlineButton"
import { FiSearch } from "react-icons/fi"

function Blog() {
    return (
        <>
            <PageTitle title="Blog" />
            <div className="container flex flex-col min-[600px]:flex-row justify-between gap-10 min-[600px]:gap-0 py-[6rem] px-10 lg:px-0">
                <div className="left w-full min-[600px]:w-[70%] grid grid-cols-1 min-[900px]:grid-cols-2 gap-5 gap-y-16">
                    {postData.map((item) => (
                        <div className="flex flex-col gap-4">
                            <PostCard
                                title={item.title}
                                date={item.date}
                                description={item.description}
                            />
                            <OutlineButton name="Read More" />
                        </div>
                    ))}
                </div>
                <div className="right w-full min-[600px]:w-[27%] flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-[1.5rem] pb-3 relative after:contents-[''] after:h-1 after:w-16 after:bg-[#fb5b21] after:absolute after:bottom-0 after:left-0 ">
                            Search
                        </h3>
                        <div className="flex h-9">
                            <input
                                type="search"
                                placeholder="Search"
                                className="bg-[#f5f5f5] w-full min-[900px]:w-3/5 ps-3"
                            />
                            <div className="bg-[#fb5b21] flex items-center justify-center text-[20px] text-white px-3">
                                <FiSearch />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-[1.5rem] pb-3 relative after:contents-[''] after:h-1 after:w-16 after:bg-[#fb5b21] after:absolute after:bottom-0 after:left-0 ">
                            Categories
                        </h3>
                        <div className="text-[#666666]">
                            <div className="flex py-3">
                                <p className="mr-1 cursor-pointer ease-in-out duration-300 hover:text-[#fb5b21]">
                                    Fitness
                                </p>
                                <span className="text-[#212529]">(11)</span>
                            </div>

                            <div className="flex border-b-2 border-t-2 py-3">
                                <p className="mr-1 cursor-pointer ease-in-out duration-300 hover:text-[#fb5b21]">
                                    Gym
                                </p>
                                <span className="text-[#212529]">(11)</span>
                            </div>
                            <div className="flex py-3">
                                <p className="mr-1 cursor-pointer ease-in-out duration-300 hover:text-[#fb5b21]">
                                    Yoga
                                </p>
                                <span className="text-[#212529]">(11)</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-[1.5rem] pb-3 relative after:contents-[''] after:h-1 after:w-16 after:bg-[#fb5b21] after:absolute after:bottom-0 after:left-0 ">
                            Archieves
                        </h3>
                        <div className="text-[#666666]">
                            <div className="flex py-3">
                                <p className="mr-1 cursor-pointer ease-in-out duration-300 hover:text-[#fb5b21]">
                                    Nov 2023
                                </p>
                                <span className="text-[#212529]">(11)</span>
                            </div>
                            <div className="flex py-3 border-t-2">
                                <p className="mr-1 cursor-pointer ease-in-out duration-300 hover:text-[#fb5b21]">
                                    Oct 2023
                                </p>
                                <span className="text-[#212529]">(11)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
