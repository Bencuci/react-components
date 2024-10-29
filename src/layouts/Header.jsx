import React, { useState, useEffect, useRef} from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const [collapsed, setCollapsed] = useState(true)
    const [libCollapsed, setLibCollapsed] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // refs for listening if clicks are outside of menus.
    const menuRef = useRef()
    const libMenuRef = useRef()
    const btnRef = useRef()
    
    // Applied style for the current page's <a> tag
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline"
    }
    // Animated button's toggle function
    const collapseBtnToggle = screenWidth>1320 ? toggleLibCollapsed : toggleCollapsed
    // If the animated button is open or closed (used for conditionally rendering library sub-menu in mobile view)
    const isBtnOpen = screenWidth>1320 ? !libCollapsed : !collapsed

    // Listening screen width dynamically.  used in onClick event of collapse-btn
    useEffect(() => {
        const handleResize = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(()=> { // Debouncing the handleResize
                setScreenWidth(window.innerWidth)
            }, 100)
        }
        let timeoutId
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            clearTimeout(timeoutId)
        }
    }, [])

    // Listening clicks if they are outside of menus, so they collapse.
    useEffect(() => {
        function handleClickOutside(event) {
            const refs = [menuRef, libMenuRef, btnRef]
            
            if(!refs.some(ref => ref.current?.contains(event.target))) {
                setCollapsed(true)
                setLibCollapsed(true)
            }
        }
        document.addEventListener("click", handleClickOutside)

        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    // !menuRef.current.contains(event.target) && !libMenuRef.current.contains(event.target) && !btnRef.current.contains(event.target)

    function toggleCollapsed() {
        setCollapsed(prevCollapsed => !prevCollapsed)
        setLibCollapsed(true) // so that we close the sub-menu when we toggle the main menu
    }
    function toggleLibCollapsed() {
        setLibCollapsed(prevCollapsed => !prevCollapsed)
    }

    return (
        <header>
            <Link className="site-logo" to="/">Custom-Components</Link>

            {/* Navigation links while above 1320px width */}
            <div className="extra-links">
                <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    About Me
                </NavLink>
                <NavLink
                    to="/gallery"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Gallery
                </NavLink>
            </div>
            
            <div 
                className="library-button-container" 
                onClick={collapseBtnToggle}
                ref={btnRef}
            >
                <button className={`collapse-lib-btn ${libCollapsed ? "" : "highlighted"}`}>Library</button>
                <button 
                    className={`collapse-btn ${isBtnOpen ? "opened" : ""}`}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            {/* Navigation links and buttons while under 1320px width */}
            <nav 
                className={`menu slide ${isBtnOpen ? "visible" : ""}`}
                ref={menuRef}
            >
                <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    About Me
                </NavLink>
                <hr/>
                <NavLink
                    to="/gallery"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Gallery
                </NavLink>
                <hr/>
                {/* Library sub-menu toggle button*/}
                <button 
                    onClick={toggleLibCollapsed}
                    className={`collapse-lib-btn ${libCollapsed ? "" : "highlighted"}`}
                >
                    <span><i className="fa-solid fa-angle-left"></i></span>
                    Library
                </button>
            </nav>

            {/* Collapsable library
                main menu above 1320px width
                sub-menu under 1320px width
            */}
            <nav
                className={`lib-menu slide ${!libCollapsed && isBtnOpen ? "visible" : ""}`}
                ref={libMenuRef}
            >
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