import React from "react"

function FitnessContent(props) {
    return (
        <>
            <div className="lg:w-3/4 lg:max-w-[600px]">
                <div className="flex items-center gap-1">
                    <i className="text-[#fb5b21] text-[30px] ">{props.icon}</i>
                    <h2 className="font-semibold text-2xl">{props.title}</h2>
                </div>
                <p className="ml-[2rem] mt-4 leading-relaxed">
                    {props.description}
                </p>
            </div>
        </>
    )
}

export default FitnessContent
