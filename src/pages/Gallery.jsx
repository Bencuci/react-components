import React from "react"
import "../styles/Gallery.css"
import { Badge, Banner, Card, Testimonial, Toast, Tooltip } from "../components-library/"

export default function Gallery() {
    return (
        <div className="gallery">
            <section>
                <article>
                    <h3>Badges</h3>
                    <ul>
                        <li><span>Notifications:</span> Showing unread messages or alerts (e.g., a red dot or number)</li>
                        <li><span>Status indicators:</span> Marking items as "new," "featured," or "bestseller."</li>
                        <li><span>Counts:</span> Displaying counts for items in a shopping cart or task list.</li>
                        <li><span>Labels:</span> Tagging items with categories or levels, like “premium” or “free.”</li>
                    </ul>
                </article>
                <div className="badge-container">
                    <Badge theme="blue" shape="pill">Badge</Badge>
                    
                </div>
            </section>
        </div>
    )
}