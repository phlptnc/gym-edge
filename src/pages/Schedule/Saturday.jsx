import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Saturday() {
    return (
        <>
            <ScheduleLink />
            {/* Schedules */}
            <div className="flex flex-col gap-2">
                <ScheduleBlock
                    class="Boxing"
                    time="3:00 PM - 5:00 AM"
                    trainer="Joy Isabel"
                />
                <ScheduleBlock
                    class="Cycling"
                    time="6:30 PM - 8:30 PM"
                    trainer="Joy Isabel"
                />
            </div>
        </>
    )
}

export default Saturday
