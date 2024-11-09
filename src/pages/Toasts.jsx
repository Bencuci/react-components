import React, { useState, useEffect, useMemo } from "react"
import { Toast } from "../components-library/"
import { toastData } from "./pageData"
import { capitalize } from "/src/utils/utils"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-okaidia.css'
import "../styles/Badges.css"
import "../styles/Toasts.css"

export default function Toasts() {
    const [selectedCell, setSelectedCell] = useState(null)
    const [selectedRowHead, setSelectedRowHead] = useState(null)
    const [importCode] = useState(
        `import { Toast } from 'custom-components'`
    )
    const [sampleCode, setSampleCode] = useState(
        `<Toast>\n    <Toast.Trigger\n        variant="information"\n        title="Mail"\n        text="Your Text"\n    >\n        Trigger element\n    </Toast.Trigger>\n</Toast>`
    )
    const selectedVariationObj = useMemo(() => 
        toastData.find( toast => toast.key === selectedRowHead ),
    [selectedRowHead]
    )

    useEffect(() => {
        const variant = selectedVariationObj ? selectedVariationObj.variant : "information"
        setSampleCode(
            `<Toast>\n    <Toast.Trigger\n        variant=${variant}\n        title="${capitalize(variant)}"\n        text="${variant} toast"\n    >\n        Trigger element\n    </Toast.Trigger>\n</Toast>`
        )
    }, [selectedVariationObj])

    const handleClick = (cell, rowHead) => {
        setSelectedCell(cell)
        setSelectedRowHead(rowHead)
    }
    
    return (
        <div className="library-page-container">
            <h1>Toasts</h1>
            <p>To use the component, import as follows</p>
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
            <div className="sample-container sample-container-toasts">
                <Toast>
                    <div className="variant-table one-col-table">
                        {toastData.map(toast => (
                            toast.role === "header" ? (
                                <h4 className={`row-header ${selectedRowHead === toast.key ? "selected" : ""}`} key={toast.key}>
                                    {capitalize(toast.variant)}
                                </h4>
                            ) : (
                                <div 
                                    className={`cell ${selectedCell === toast.key ? "selected" : ""}`}
                                    onClick={()=>handleClick(toast.key, 1000+toast.key)}
                                    key={toast.key}
                                >
                                    <Toast.Trigger
                                        variant={toast.variant}
                                        title={`${capitalize(toast.variant)}`}
                                        text={`${toast.variant} toast`}
                                    >
                                        <button className="toast-tooltip-trigger">Trigger Notification</button>
                                    </Toast.Trigger>
                                </div>
                            ) 
                        ))}                    
                    </div>
                </Toast>
                <div className="sample-code-container">
                    <h3>Sample Code</h3>
                    <div className="sample-code-block">
                        <Editor 
                            value={sampleCode}
                            onValueChange={() => {}}
                            highlight={code => highlight(code, languages.js)}
                            padding={14}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 13
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
                
                <div className="props-cell">variant</div>
                <div className="props-cell">string</div>
                <div className="props-cell">"information"</div>
                <div className="props-cell">Chosen type for your toast notification</div>

                <div className="props-cell">title</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Chosen title for your toast notification</div>

                <div className="props-cell">text</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Chosen body text for your toast notification</div>

                <div className="props-cell">className</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Assign your own classes for further customization</div>
            </div>
        </div>
    )
}