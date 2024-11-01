import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </Router>
    )
}
