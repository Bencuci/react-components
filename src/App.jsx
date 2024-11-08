import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Badges from "./pages/Badges"
import Banners from "./pages/Banners"
import Cards from "./pages/Cards"
import Testimonials from "./pages/Testimonials"
import { ScrollToTop } from "./utils/utils"

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="badges" element={<Badges />} />
                    <Route path="banners" element={<Banners />} />
                    <Route path="cards" element={<Cards />} />
                    <Route path="testimonials" element={<Testimonials />} />
                </Route>
            </Routes>
        </Router>
    )
}
