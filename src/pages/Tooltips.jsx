import React, { useState, useEffect, useMemo } from "react"
import { Tooltip } from "../components-library/"
import { tooltipData } from "./pageData"
import { capitalize } from "/src/utils/utils"
import Editor from "react-simple-code-editor"
import "highlight.js/styles/atom-one-dark.css"
import hljs from "highlight.js"
import "../styles/library-pages/Badges.css"
import "../styles/library-pages/Tooltips.css"

export default function Tooltips() {
    const [selectedCell, setSelectedCell] = useState(null)
    const [selectedRowHead, setSelectedRowHead] = useState(null)
    const [selectedColHead, setSelectedColHead] = useState(null)
    const [importCode] = useState(
        `import { Tooltip } from 'custom-components'`
    )
    const [sampleCode, setSampleCode] = useState(
        `<Tooltip\n    theme='bold-gray'\n    title='bold-gray tooltip'\n>\n    <Tooltip.Trigger>\n        Trigger element\n    </Tooltip.Trigger>\n    <Tooltip.Popup>\n        Your Popup text\n    </Tooltip.Popup>\n</Tooltip>`
    )
    
    const selectedWeight = useMemo(() => 
        selectedColHead % 2 === 0 ? "bold" : "light", 
    [selectedColHead]
    )
    const selectedThemeObj = useMemo(() => 
        tooltipData.find( tooltip => tooltip.key === selectedRowHead ),
    [selectedRowHead]
    )

    useEffect(() => {
        const theme = selectedThemeObj ? selectedThemeObj.theme : "blue"
        setSampleCode(
            `<Tooltip\n    theme='${selectedWeight}-${theme}'\n    title='Easter Egg'\n>\n    <Tooltip.Trigger>\n        trigger element\n    </Tooltip.Trigger>\n    <Tooltip.Popup>\n        Your Popup text\n    </Tooltip.Popup>\n</Tooltip>`
        )
    }, [selectedThemeObj, selectedWeight])

    function highlightCode(code) {
        return hljs.highlightAuto(code).value
    }
    
    const handleClick = (cell, colHead, rowHead) => {
        setSelectedCell(cell)
        setSelectedColHead(colHead)
        setSelectedRowHead(rowHead)
    }

    return (
        <div className="library-page-container">
            <h2>Tooltips</h2>
            <p className="cancel-gap">To use the component, import as follows</p>
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
            <p className="cancel-gap" style={{marginTop: "-1em", fontStyle: "italic"}}>Click to get sample</p>
            <div className="sample-container">
                <div className="variant-table variant-table-tooltips">
                    {/* Column Headers */}
                    <div className="empty"></div>
                    <h4 className={`col-header ${selectedColHead === 1 ? "selected" : ""} pill`}>Bold</h4>
                    <h4 className={`col-header ${selectedColHead === 0 ? "selected" : ""} pill`}>Light</h4>
                    
                    {tooltipData.map( tooltip => (
                        tooltip.role === "header" ? (
                            <h4 className={`row-header ${selectedRowHead === tooltip.key ? "selected" : ""}`} key={tooltip.key}>
                                {capitalize(tooltip.theme)}
                            </h4>
                        ) : (
                            <div 
                                className={`cell ${selectedCell === tooltip.key ? "selected" : ""}`}
                                onClick={()=>handleClick(tooltip.key, tooltip.key%2, 1000+(Math.round(tooltip.key/2)))}
                                key={tooltip.key}
                            >
                                <Tooltip
                                    title="Easter Egg"
                                    theme={`${tooltip.weight}-${tooltip.theme}`}
                                >
                                    <Tooltip.Trigger>
                                        <button className="toast-tooltip-trigger">Tooltip: Hover</button>
                                    </Tooltip.Trigger>
                                    <Tooltip.Popup>
                                        I allow everyone to use the components I created, for free.
                                    </Tooltip.Popup>
                                </Tooltip>
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
                            highlight={code => highlightCode(code)}
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
                <div className="props-cell">"bold-gray"</div>
                <div className="props-cell">The selected theme for your Tooltip.</div>

                <div className="props-cell">title</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Title for your Tooltip.</div>

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