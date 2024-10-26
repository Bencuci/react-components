import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const [collapsed, setCollapsed] = React.useState(true)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    function toggleCollapsed() {
        setCollapsed(prevCollapsed => !prevCollapsed)
    }

    return (
        <header>
            <Link className="site-logo" to="/">Custom-Components</Link>
            <button 
                className={`collapse-btn ${!collapsed ? "opened" : ""}`}
                onClick={toggleCollapsed}
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <nav className={`fade ${collapsed ? "" : "visible"}`}>
                <NavLink
                    to="/badges"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Badges
                </NavLink>
                <hr/>
                <NavLink
                    to="/banners"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Banners
                </NavLink>
                <hr/>
                <NavLink
                    to="/cards"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Cards
                </NavLink>
                <hr/>
                <NavLink
                    to="/testimonials"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Testimonials
                </NavLink>
                <hr/>
                <NavLink
                    to="/toasts"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Toasts
                </NavLink>
                <hr/>
                <NavLink
                    to="/tooltips"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Tooltips
                </NavLink>
            </nav>
        </header>
    )
}