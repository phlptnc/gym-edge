import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Monday() {
    return (
        <>
            {/* Days */}
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
                    time="3:00 PM - 5:00 PM"
                    trainer="Joy Isabel"
                />
                <ScheduleBlock
                    class="Boxing"
                    time="5:00 PM - 7:00 PM"
                    trainer="John Lewis"
                />
            </div>
        </>
    )
}

export default Monday
