import React, { useState, useEffect, useMemo } from "react"
import { Card } from "../components-library/"
import Editor from "react-simple-code-editor"
import "highlight.js/styles/atom-one-dark.css"
import hljs from "highlight.js"
import "../styles/library-pages/Badges.css"
import "../styles/library-pages/Cards.css"

export default function Cards() {
    const [importCode] = useState(
        `import { Card } from 'custom-components'`
    )
    const [sampleCode] = useState(
        `<Card\n    title='Your Card Title'\n    iconpath='path/to/yourIcon.png'\n>\n    Your Cards text.\n</Card>`
    )

    function highlightCode(code) {
        return hljs.highlightAuto(code).value
    }

    return (
        <div className="library-page-container">
            <h1>Cards</h1>
            <p>To use the component, import as follows</p>
            <div className="import-code-block">
                <Editor 
                    value={importCode}
                    onValueChange={() => {}}
                    highlight={code => highlightCode(code)}
                    padding={13}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16
                    }}
                />
            </div>
            <hr />
            <div className="sample-container">
                    <Card
                        title="Easy Deployment"
                        iconPath="/images/cardIcon.png"
                    >
                        Components are designed for Developers to utilize them, without struggle.
                    </Card>
                <div className="sample-code-container">
                    <h3>Sample Code</h3>
                    <div className="sample-code-block">
                        <Editor 
                            value={sampleCode}
                            onValueChange={() => {}}
                            highlight={code => highlightCode(code)}
                            padding={13}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12
                            }}
                        />
                    </div>
                </div>
            </div>

            <hr />
            <h3 style={{marginTop: "-.5em"}}>Props</h3>
            <div className="props-container">
                <div className="props-header">name</div>
                <div className="props-header">type</div>
                <div className="props-header">default</div>
                <div className="props-header">description</div>
                
                <div className="props-cell">title</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Title for your Card</div>

                <div className="props-cell">iconPath</div>
                <div className="props-cell">string</div>
                <div className="props-cell">"/images/cardIcon.png"</div>
                <div className="props-cell">Path to your icon for your card icon</div>

                <div className="props-cell">className</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Assign your own classes for further customization</div>
            </div>
        </div>
    )
}