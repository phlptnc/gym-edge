import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Wednesday() {
    return (
        <>
            <ScheduleLink />
            {/* Schedules */}
            <div className="flex flex-col gap-2">
                <ScheduleBlock
                    class="Boxing"
                    time="10:00 AM - 12:00 PM"
                    trainer="Joy Isabel"
                />
                <ScheduleBlock
                    class="Crossfit"
                    time="2:00 PM - 4:00 PM"
                    trainer="John Lewis"
                />
            </div>
        </>
    )
}

export default Wednesday
