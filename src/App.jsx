import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}
