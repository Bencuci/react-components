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
                    <Badge shape="pill" theme="red">Badge</Badge>
                </section>
                <section>
                    <Banner theme="success">
                        <Banner.Head>
                            Congratulations!
                        </Banner.Head>
                        <Banner.Text>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                        </Banner.Text>
                    </Banner>
                </section>
                <section>
                    <Card
                        title="Easy Deployment"
                        iconPath="/src/images/cardIcon.png"
                    >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                </section>
                <section>
                    <Testimonial
                        name="May Andersons"
                        title="Front-end Developer"
                        imgPath="/src/images/testimonial.jpeg"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </Testimonial>
                </section>
                <section>
                    <Tooltip
                        title="Tooltip"
                        theme="bold-gray"
                    >
                        <Tooltip.Trigger>
                            <h3>
                                Tooltip:Hover
                            </h3>
                        </Tooltip.Trigger>
                        <Tooltip.Popup>
                            Lorem ipsum dolor sit 
                            amet consectetur adipisicing elit oluptatum tenetur.
                        </Tooltip.Popup>
                    </Tooltip>
                </section>
                <section>
                    <Toast>
                        <Toast.Trigger
                            variant="error"
                            title="Title"
                            text="Your work has been saved"
                        >
                            <button>Trigger Notification</button>
                        </Toast.Trigger>
                    </Toast>
                </section>
            </main>
        </div>
    );
}
