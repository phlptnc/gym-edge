import React from "react"
import { Link } from "react-router-dom"

function PageTitle(props) {
    return (
        <>
            <div className="bg-[url('../../assets/header-bg.jpg')] bg-center py-[7rem] relative">
                <div className="container">
                    <h2 className="text-[3rem] text-center text-[#f5f5f5] font-semibold">
                        {props.title}
                    </h2>
                    <div className="text-white absolute left-0 right-0 mx-auto bottom-[-1.5rem]">
                        <p className="w-fit mx-auto bg-[#fb5b21] rounded-full px-7 py-3">
                            <Link to=".." className="hover:underline">
                                Home
                            </Link>{" "}
                            / {props.title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle
