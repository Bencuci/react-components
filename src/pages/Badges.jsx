import React, { useState, useEffect, useMemo } from "react"
import { Badge } from "../components-library/"
import { badgeData } from "./pageData"
import { capitalize } from "/src/utils/utils"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-okaidia.css'
import "../styles/Badges.css"

export default function Badges() {
    const [selectedCell, setSelectedCell] = useState(null)
    const [selectedRowHead, setSelectedRowHead] = useState(null)
    const [selectedColHead, setSelectedColHead] = useState(null)
    const [importCode] = useState(
        `import { Badge } from 'custom-components'`
    )
    const [sampleCode, setSampleCode] = useState(
        `<Badge\n    theme="blue"\n    shape="pill"\n>\n    Sample\n</Badge>`
    )
    
    const selectedShape = useMemo(() => 
        selectedColHead % 2 === 0 ? "pill" : "square", 
    [selectedColHead]
    )
    const selectedThemeObj = useMemo(() => 
        badgeData.find( badge => badge.key === selectedRowHead ),
    [selectedRowHead]
    )

    useEffect(() => {
        const theme = selectedThemeObj ? selectedThemeObj.theme : "blue"
        setSampleCode(
            `<Badge\n    theme="${theme}"\n    shape="${selectedShape}"\n>\n    Sample\n</Badge>`
        )
    }, [selectedThemeObj, selectedShape])

    const handleClick = (cell, colHead, rowHead) => {
        setSelectedCell(cell)
        setSelectedColHead(colHead)
        setSelectedRowHead(rowHead)
    }

    return (
        <div className="badges-page-container">
            <h2>Badges</h2>
            <p className="cancel-gap">To use the component, import as follows</p>
            <div className="code-block">
                <Editor 
                    value={importCode}
                    onValueChange={() => {}}
                    highlight={code => highlight(code, languages.js)}
                    padding={13}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16
                    }}
                />
            </div>
            <hr />
            <p className="cancel-gap" style={{marginTop: "-1em", fontStyle: "italic"}}>Click to get sample</p>
            <div className="sample-container">
                <div className="variant-table">
                    {/* Column Headers */}
                    <div className="empty"></div>
                    <h4 className={`col-header ${selectedColHead === 1 ? "selected" : ""}`}>Square</h4>
                    <h4 className={`col-header ${selectedColHead === 0 ? "selected" : ""} pill`}>Pill</h4>
                    
                    {badgeData.map( badge => (
                        badge.role === "header" ? (
                            <h4 className={`row-header ${selectedRowHead === badge.key ? "selected" : ""}`} key={badge.key}>
                                {capitalize(badge.theme)}
                            </h4>
                        ) : (
                            <div 
                                className={`cell ${selectedCell === badge.key ? "selected" : ""}`}
                                onClick={()=>handleClick(badge.key, badge.key%2, 1000+(Math.round(badge.key/2)))}
                                key={badge.key}
                            >
                                <Badge theme={badge.theme} shape={badge.shape}>{capitalize(badge.theme)}</Badge>
                            </div>
                        )              
                    ))}
                </div>
                <div className="sample-code-container">
                    <h3>Sample Code</h3>
                    <div className="sample-code-block">
                        <Editor 
                            value={sampleCode}
                            onValueChange={() => {}}
                            highlight={code => highlight(code, languages.js)}
                            padding={22}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 18
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
                
                <div className="props-cell">theme</div>
                <div className="props-cell">string</div>
                <div className="props-cell">"gray"</div>
                <div className="props-cell">The selected theme for your Badge.</div>

                <div className="props-cell">shape</div>
                <div className="props-cell">string</div>
                <div className="props-cell">"square"</div>
                <div className="props-cell">The selected shape for your Badge.</div>

                <div className="props-cell">className</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Assign your own classes for further customization</div>

                <div className="props-cell">style</div>
                <div className="props-cell">object</div>
                <div className="props-cell">{"{}"}</div>
                <div className="props-cell">Assign your own styles as camelCase object properties for further customization.</div>
            </div>
        </div>
    )
}