import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <div className="fade-image">
                <img src="/images/moodboard.png" />
            </div>
            <div className="home-text">
                <h2>Code Faster</h2>
                <h3>with intuitive React components</h3>
                <p>I, Benjamin Cuci, built react components that you can easily add to your React projects as components.</p>
                <Link className="discover" to="/gallery">Discover</Link>
            </div>
        </div>
    )
}

