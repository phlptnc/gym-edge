import React from "react"
import PageTitle from "../../components/Title/PageTitle"
import { Outlet } from "react-router-dom"
import Pricing from "../../components/Pricing"

function Schedule() {
    return (
        <>
            <PageTitle title="Schedule" />
            <div className="container py-[6rem] px-10 lg:px-0 flex flex-col gap-8">
                <Outlet />
            </div>
            <Pricing />
        </>
    )
}

export default Schedule
