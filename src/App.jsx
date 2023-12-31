import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Classes from "./pages/Classes"
import Schedule from "./pages/Schedule/Schedule"
import Trainers from "./pages/Trainers"
import Blog from "./pages/Blog"

import Monday from "./pages/Schedule/Monday"
import Tuesday from "./pages/Schedule/Tuesday"
import Wednesday from "./pages/Schedule/Wednesday"
import Thursday from "./pages/Schedule/Thursday"
import Friday from "./pages/Schedule/Friday"
import Saturday from "./pages/Schedule/Saturday"
import Sunday from "./pages/Schedule/Sunday"

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="classes" element={<Classes />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="blog" element={<Blog />} />

                <Route path="schedule" element={<Schedule />}>
                    <Route index element={<Monday />} />
                    <Route path="monday" element={<Monday />} />
                    <Route path="tuesday" element={<Tuesday />} />
                    <Route path="wednesday" element={<Wednesday />} />
                    <Route path="thursday" element={<Thursday />} />
                    <Route path="friday" element={<Friday />} />
                    <Route path="saturday" element={<Saturday />} />
                    <Route path="sunday" element={<Sunday />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
