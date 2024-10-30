import React from "react"
import "../styles/About.css"

export default function About() {
    return (
        <div className="about">
            <div className="about-me">
                <h2 className="about-me-title">About Me</h2>
                <div className="pp-desc-container">
                    <img src="/images/me.JPEG" />
                    <p>Hello! I’m Benjamin Cuci, the developer of this website. I’m a React developer focused on frontend development and a 4th-year Software Engineering student at Bahcesehir University in Istanbul. Currently, I’m building React websites (like this one) to further hone my skills.
                    </p>
                </div>
            </div>
            <hr />
            <div className="contact">
                <h2><i className="fa-solid fa-address-card"></i> Contact Me</h2>
                <div className="contact-list">
                    <p><i className="fa-solid fa-phone"></i> +90 545 973 0218</p>
                    <p><i className="fa-solid fa-envelope"></i> bunyamin.cuci@hotmail.com</p>
                    <p><i className="fa-brands fa-square-github"></i> <a href="https://github.com/Bencuci" target="_blank">Github</a></p>
                    <p><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/benjamin-cuci/" target="_blank">LinkedIn</a></p>
                    <p><i className="fa-regular fa-user"></i> <a href="#">Portfolio website</a></p>
                </div>
            </div>
        </div>
    )
}