import React from "react"
import Hero from "../components/Hero"
import Fitness from "../components/Fitness"
import Banner from "../components/Banner"
import Pricing from "../components/Pricing"
import Post from "../components/Post"

function Home() {
    return (
        <>
            <Hero />
            <Fitness />
            <Banner />
            <Pricing />
            <Post />
        </>
    )
}

export default Home
