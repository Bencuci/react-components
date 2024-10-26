import React from "react"

export default function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Benjamin Cuci. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a> | 
                <a href="/terms-of-service">Terms of Service</a> | 
                <a href="/contact">Contact Us</a>
            </div>
        </footer>
    )
}