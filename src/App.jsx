import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Classes from "./pages/Classes"
import Schedule from "./pages/Schedule"
import Trainers from "./pages/Trainers"
import Blog from "./pages/Blog"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/Trainers" element={<Trainers />} />
                <Route path="/Blog" element={<Blog />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
