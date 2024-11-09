import React from "react"
import "../styles/Gallery.css"
import { Badge, Banner, Card, Testimonial, Toast, Tooltip } from "../components-library/"
import { Link } from "react-router-dom"

export default function Gallery() {
    return (
        <div className="gallery">
            <section>
                <h1>Gallery</h1>
                <p>Here, we showcase every component we have to offer. Go to the component's page if you want to check its details on how to customize and use them.</p>
            </section>

            <section>
                <article>
                    <h3>Badges</h3>
                    <ul>
                        <li><span>Status indicators:</span> Marking items as "new," "featured," or "bestseller."</li>
                        <li><span>Counts:</span> Displaying counts for items in a shopping cart or task list.</li>
                        <li><span>Labels:</span> Tagging items with categories or levels, like “premium” or “free.”</li>
                    </ul>
                </article>
                <div className="badge-container">
                    <Badge theme="blue" shape="pill">Badge</Badge>
                    <Badge theme="red" shape="pill">New</Badge>
                    <Badge>99+</Badge>
                    <Badge theme="indigo" shape="square">Free</Badge>
                </div>
                <Link to="/badges" className="discover-btn">Discover Badges</Link>
            </section>
            
            <section>
                <article>
                    <h3>Banners</h3>
                    <ul>
                        <li><span>Promotions:</span> Highlighting sales or special offers (e.g., "50% off this weekend!").</li>
                        <li><span>Announcements:</span> Sharing important updates or events (e.g., "Join our webinar!").</li>
                        <li><span>Calls to Action:</span> Encouraging user actions like subscriptions (e.g., "Subscribe for exclusive content!").</li>
                    </ul>
                </article>
                <div className="banner-container">
                    <Banner theme="information">
                        <Banner.Head>
                            Important!
                        </Banner.Head>
                        <Banner.Text>
                            You have found a very easy way to implement custom components!
                        </Banner.Text>
                    </Banner>
                </div>
                <Link to="/banners" className="discover-btn">Discover Banners</Link>
            </section>

            <section>
                <article>
                    <h3>Cards</h3>
                    <ul>
                        <li><span>Content Previews:</span> Summarizing articles, products, or profiles (e.g., product details, blog snippets).</li>
                        <li><span>Organisation: </span> Structuring information into sections that are easy to scan.</li>
                        <li><span>User Interaction: </span> Highlighting interactive elements like buttons, links, or media (e.g., "Learn More" or "Add to Cart").</li>
                    </ul>
                </article>
                <div className="card-container">
                    <Card
                        title="Easy Deployment"
                        iconPath="/images/cardIcon.png"
                    >
                        Components are designed for Developers to utilize them, without struggle.
                    </Card>
                </div>
                <Link to="/cards" className="discover-btn">Discover Cards</Link>
            </section>

            <section>
                <article>
                    <h3>Testimonials</h3>
                    <ul>
                        <li><span>Quotes: </span> Positive experiences or reviews in a structured format.</li>
                        <li><span>Attribution: </span> Information about the person, like name, photo, or job title, adding authenticity.</li>
                        <li><span>Visual Appeal: </span> Often styled to stand out, drawing attention to customer endorsements.</li>
                    </ul>
                </article>
                <div className="testimonial-container">
                    <Testimonial
                        name="May Andersons"
                        title="Front-end Developer"
                        imgPath="/images/testimonial.jpeg"
                    >
                        I love using Benjamin's custom components. They are so easy to use and customize. It helps a lot when developing!
                    </Testimonial>
                </div>
                <Link to="/testimonials" className="discover-btn">Discover Testimonials</Link>
            </section>

            <section>
                <article>
                    <h3>Tooltips</h3>
                    <ul>
                            <li><span>Clarification: </span> Explaining icons, buttons, or terms without cluttering the interface.</li>
                            <li><span>Guidance: </span> Showing progress, like "uploading" or "sent."</li>
                            <li><span>Accessibility: </span> Alerting to updates or prompts, like "new message."</li>
                    </ul>
                </article>
                <div className="tooltip-container">
                    <Tooltip
                        title="Easter Egg"
                        theme="bold-blue"
                    >
                        <Tooltip.Trigger>
                            <button className="toast-tooltip-trigger">Tooltip: Hover</button>
                        </Tooltip.Trigger>
                        <Tooltip.Popup>
                            I allow everyone to use the components I created, for free.
                        </Tooltip.Popup>
                    </Tooltip>

                    <Tooltip
                        title="Easter Egg"
                        theme="light-gray"
                    >
                        <Tooltip.Trigger>
                            <button className="toast-tooltip-trigger">Tooltip: Hover</button>
                        </Tooltip.Trigger>
                        <Tooltip.Popup>
                            I allow everyone to use the components I created, for free.
                        </Tooltip.Popup>
                    </Tooltip>
                </div>
                <Link to="/tooltips" className="discover-btn">Discover Tooltips</Link>
            </section>

            <section>
                <article>
                    <h3>Toasts</h3>
                    <ul>
                        <li><span>Feedback: </span> Informing users of actions, like "saved successfully" or "error occurred".</li>
                        <li><span>Status Updates: </span> Offering extra details, such as form field requirements.</li>
                        <li><span>User Prompts: </span> Helping users understand features without disrupting layout.</li>
                    </ul>
                </article>
                <div className="toast-container">
                    <Toast>
                        <Toast.Trigger
                            variant="information"
                            title="Mail"
                            text="You have got a new mail!"
                        >
                            <button className="toast-tooltip-trigger">Trigger Notification</button>
                        </Toast.Trigger>
                        
                        <Toast.Trigger
                            variant="success"
                            title="Deployment"
                            text="Project successfully deployed!"
                        >
                            <button className="toast-tooltip-trigger">Trigger Notification</button>
                        </Toast.Trigger>
                    </Toast>
                </div>
                <Link to="/toasts" className="discover-btn">Discover Toasts</Link>
            </section>
        </div>
    )
}