import React from "react"
import SectionTitle from "./SectionTitle"

function SectionHeader(props) {
    return (
        <>
            <div className="flex items-center">
                <SectionTitle title={props.title} />
                <span className="min-[900px]:border border-[#e0e0e0] min-[900px]:ml-[2.5rem] w-0 min-[900px]:w-[50%] lg:w-[60%] xl:ml-[5rem]"></span>
            </div>
        </>
    )
}

export default SectionHeader
