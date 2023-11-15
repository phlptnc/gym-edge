import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Friday() {
    return (
        <>
            <ScheduleLink />
            {/* Schedules */}
            <div className="flex flex-col gap-2">
                <ScheduleBlock
                    class="Cycling"
                    time="7:30 AM - 9:30 AM"
                    trainer="Mari Joy"
                />
                <ScheduleBlock
                    class="Running"
                    time="4:00 PM - 6:00 PM"
                    trainer="John Lewis"
                />
            </div>
        </>
    )
}

export default Friday
