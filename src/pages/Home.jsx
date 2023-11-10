import React from "react"
import Hero from "../components/Hero"
import Fitness from "../components/Fitness"
import Banner from "../components/Banner"
import Pricing from "../components/Pricing"
import Post from "../components/Post"
import BMI from "../components/BMI"

function Home() {
    return (
        <>
            <Hero />
            <Fitness />
            <Banner />
            <BMI />
            <Pricing />
            <Post />
        </>
    )
}

export default Home
