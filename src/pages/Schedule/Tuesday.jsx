import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Tuesday() {
    return (
        <>
            <ScheduleLink />
            {/* Schedules */}
            <div className="flex flex-col gap-2">
                <ScheduleBlock
                    class="Running"
                    time="7:00 AM - 9:00 AM"
                    trainer="John Lewis"
                />
                <ScheduleBlock
                    class="Yoga"
                    time="8:30 AM - 10:30 AM"
                    trainer="Mari Joy"
                />
            </div>
        </>
    )
}

export default Tuesday
