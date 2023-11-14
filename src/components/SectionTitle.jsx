import React from "react"

function SectionTitle(props) {
    return (
        <h2 className="text-[1.4rem] min-[450px]:text-[2rem] font-semibold uppercase">
            {props.title}
        </h2>
    )
}

export default SectionTitle
