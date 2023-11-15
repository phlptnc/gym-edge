import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Thursday() {
    return (
        <>
            <ScheduleLink />
            {/* Schedules */}
            <div className="flex flex-col gap-2">
                <ScheduleBlock
                    class="Crossfit"
                    time="9:00 AM - 11:00 AM"
                    trainer="Johnny Bravo"
                />
                <ScheduleBlock
                    class="Yoga"
                    time="5:30 PM - 7:30 PM"
                    trainer="Mari Joy"
                />
            </div>
        </>
    )
}

export default Thursday
