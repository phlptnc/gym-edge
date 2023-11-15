import React from "react"
import PageTitle from "../components/Title/PageTitle"
import TrainerCard from "../components/TrainerCard"
import trainersData from "../components/TrainersData"

function Trainers() {
    return (
        <>
            <PageTitle title="All Trainers" />
            <div className="container flex flex-col min-[900px]:flex-row justify-between gap-10 py-[6rem] px-10 lg:px-0">
                <div className="flex flex-wrap justify-around gap-8">
                    {trainersData.map((item) => (
                        <TrainerCard
                            image={item.image}
                            name={item.name}
                            position={item.position}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Trainers
