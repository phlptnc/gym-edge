import React from "react"
import Hero from "../components/Hero"
import Fitness from "../components/Fitness"
import Banner from "../components/Banner"
import Pricing from "../components/Pricing"
import Post from "../components/Post"
import BMI from "../components/BMI"
import Banner2 from "../components/Banner2"
import Trainers from "../components/Trainers"
import Classes from "../components/Classes"

function Home() {
    return (
        <>
            <Hero />
            <Fitness />
            <Classes />
            <Banner />
            <Trainers />
            <BMI />
            <Pricing />
            <Banner2 />
            <Post />
        </>
    )
}

export default Home
