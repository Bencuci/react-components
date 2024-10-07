import React from "react";
import Badge from "./components-library/badge/Badge";
import Banner from "./components-library/banner"; 

export default function App() {
    return (
        <div>
            <main>
                <h1>React Components</h1>
                <section>
                    <Badge shape="pill" theme="red">Badge</Badge>
                </section>
                <section>
                    <Banner theme="success">
                        <Banner.Head>
                            Banner
                        </Banner.Head>
                    </Banner>
                </section>
            </main>
        </div>
    );
}
