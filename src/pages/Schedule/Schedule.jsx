import React from "react"
import PageTitle from "../../components/Title/PageTitle"
import { Link, Outlet } from "react-router-dom"

function Schedule() {
    return (
        <>
            <PageTitle title="Schedule" />
            <div className="container py-[6rem] px-10 lg:px-0 outline flex flex-col gap-4">
                <Outlet />
            </div>
        </>
    )
}

export default Schedule
