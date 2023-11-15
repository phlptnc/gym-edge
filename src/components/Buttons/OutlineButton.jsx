import React from "react"

function OutlineButton(props) {
    return (
        <>
            <button className="w-fit border-2 border-[#fb5b21] text-[#fb5b21] font-semibold rounded-full px-5 py-2 ease-in-out duration-300 hover:bg-[#fb5b21] hover:text-white hover:underline ">
                {props.name}
            </button>
        </>
    )
}

export default OutlineButton
