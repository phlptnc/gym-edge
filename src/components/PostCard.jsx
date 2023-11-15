import React from "react"

function PostCard(props) {
    return (
        <>
            <div className="blog-card w-full">
                {/* image */}
                <div className="relative">
                    <div className="bg-[#fb5b21] text-center text-[#f5f5f5] font-semibold font-sans leading-5 min-[400px]:py-3 py-1 min-[400px]:px-3 px-1 absolute min-[400px]:left-5 left-3 top-[-1rem] z-20">
                        <p className="w-[40px] text-[0.8rem] min-[400px]:text-[1rem]">
                            {props.date}
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <img
                            src={"../../assets/blog/" + props.title + ".jpg"}
                            alt={props.title}
                            className="h-[200px] min-[400px]:h-[250px] w-full hover:scale-110 ease-in-out duration-700 cursor-pointer object-cover"
                        />
                    </div>
                </div>
                {/* lower section */}
                <h3 className="text-[1.2rem] min-[400px]:text-[1.5rem] font-semibold hover:text-[#fb5b21] hover:underline cursor-pointer ease-in-out duration-300">
                    {props.title}
                </h3>
                <div>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default PostCard
