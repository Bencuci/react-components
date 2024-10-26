import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function MainLayout() {
    return (
        <div className="site-wrapper">
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}