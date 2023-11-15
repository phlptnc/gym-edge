import React from "react"

function PageTitle(props) {
    return (
        <>
            <div className="bg-[url('../../assets/header-bg.jpg')] bg-center py-[7rem]">
                <div className="container">
                    <h2 className="text-[3rem] text-center text-[#f5f5f5] font-semibold">
                        {props.title}
                    </h2>
                </div>
            </div>
        </>
    )
}

export default PageTitle
