import React from "react";
import Badge from "./components-library/badge/Badge";
import Banner from "./components-library/banner"; 
import Card from "./components-library/card/Card"
import Testimonial from "./components-library/testimonial/Testimonial"
import Tooltip from "./components-library/tooltip"
import Toast from "./components-library/toast"

export default function App() {
    return (
        <div>
            <main>
                <h1>Custom Components</h1>
                <section>
                    <Badge shape="pill" theme="blue">Badge</Badge>
                </section>
                <section>
                    <Banner theme="neutral">
                        <Banner.Head>
                            Congratulations!
                        </Banner.Head>
                        <Banner.Text>
                            You have found a very easy way to implement custom components!
                        </Banner.Text>
                    </Banner>
                </section>
                <section>
                    <Card
                        title="Easy Deployment"
                        iconPath="/src/images/cardIcon.png"
                    >
                        Components are designed for Developers to utilize them, without struggle.
                    </Card>
                </section>
                <section>
                    <Testimonial
                        name="May Andersons"
                        title="Front-end Developer"
                        imgPath="/src/images/testimonial.jpeg"
                    >
                        I love using Benjamin's custom components. They are so easy to use and customize. It helps a lot when developing!
                    </Testimonial>
                </section>
                <section>
                    <Testimonial
                        name="May Andersons"
                        title="Front-end Developer"
                    >
                        I love using Benjamin's custom components. They are so easy to use and customize. It helps a lot when developing!
                    </Testimonial>
                </section>
                <section>
                    <Tooltip
                        title="Easter Egg"
                        theme="bold-blue"
                    >
                        <Tooltip.Trigger>
                            <h3>
                                Tooltip: Hover
                            </h3>
                        </Tooltip.Trigger>
                        <Tooltip.Popup>
                            I allow everyone to use the components I created, for free.
                        </Tooltip.Popup>
                    </Tooltip>
                </section>
                <section>
                    <Toast>
                        <Toast.Trigger
                            variant="information"
                            title="Mail"
                            text="You have got a new mail!"
                        >
                            <button>Trigger Notification</button>
                        </Toast.Trigger>
                    </Toast>
                </section>
            </main>
        </div>
    );
}
