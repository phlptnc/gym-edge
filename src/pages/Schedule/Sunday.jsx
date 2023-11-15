import React from "react"
import ScheduleLink from "./ScheduleLink"
import ScheduleBlock from "../../components/ScheduleBlock"

function Sunday() {
    return (
        <>
            <ScheduleLink />
            {/* Schedules */}
            <div className="flex flex-col gap-2">
                <ScheduleBlock
                    class="Cycling"
                    time="7:00 AM - 9:00 AM"
                    trainer="Mari Joy"
                />
                <ScheduleBlock
                    class="Crossfit"
                    time="10:00 PM - 12:00 PM"
                    trainer="John Lewis"
                />
                <ScheduleBlock
                    class="Running"
                    time="4:00 PM - 6:00 PM"
                    trainer="Vin Diesel"
                />
                <ScheduleBlock
                    class="Boxing"
                    time="7:00 PM - 9:00 PM"
                    trainer="Joy Isabel"
                />
            </div>
        </>
    )
}

export default Sunday
