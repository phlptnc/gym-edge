import React from "react"

function SectionHeader(props) {
    return (
        <>
            <div className="flex items-center pb-[3rem]">
                <h2 className="text-[1.4rem] min-[450px]:text-[2rem] font-semibold uppercase">
                    {props.title}
                </h2>
                <span className="min-[900px]:border border-[#e0e0e0] min-[900px]:ml-[2.5rem] w-0 min-[900px]:w-[50%] lg:w-[60%] xl:ml-[5rem]"></span>
            </div>
        </>
    )
}

export default SectionHeader
