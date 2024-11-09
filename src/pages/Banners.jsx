import React, { useState, useEffect, useMemo } from "react"
import { Banner } from "../components-library/"
import { bannerData } from "./pageData"
import { capitalize } from "/src/utils/utils"
import Editor from "react-simple-code-editor"
import "highlight.js/styles/atom-one-dark.css"
import hljs from "highlight.js"
import "../styles/Badges.css"
import "../styles/Banners.css"

export default function Banners() {
    const [selectedCell, setSelectedCell] = useState(null)
    const [selectedRowHead, setSelectedRowHead] = useState(null)
    const [importCode] = useState(
        `import { Banner } from 'custom-components'`
    )
    const [sampleCode, setSampleCode] = useState(
        `<Banner\n    theme='information'\n>\n    <Banner.Head>\n        Title\n    </Banner.Head>\n    <Banner.Text>\n        Your text\n    </Banner.Text>\n</Banner>`
    )
    const selectedThemeObj = useMemo(() => 
        bannerData.find( banner => banner.key === selectedRowHead ),
    [selectedRowHead]
    )

    useEffect(() => {
        const theme = selectedThemeObj ? selectedThemeObj.theme : "information"
        setSampleCode(
            `<Banner\n    theme='${theme}'\n>\n    <Banner.Head>\n        ${capitalize(theme)}\n    </Banner.Head>\n    <Banner.Text>\n        Your text\n    </Banner.Text>\n</Banner>`
        )
    }, [selectedThemeObj])

    function highlightCode(code) {
        return hljs.highlightAuto(code).value
    }
    
    const handleClick = (cell, rowHead) => {
        setSelectedCell(cell)
        setSelectedRowHead(rowHead)
    }
    
    return (
        <div className="library-page-container">
            <h1>Banners</h1>
            <p>To use the component, import as follows</p>
            <div className="code-block">
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
                <div className="variant-table one-col-table">
                    {bannerData.map(banner => (
                        banner.role === "header" ? (
                            <h4 className={`row-header ${selectedRowHead === banner.key ? "selected" : ""}`} key={banner.key}>
                                {capitalize(banner.theme)}
                            </h4>
                        ) : (
                            <div 
                                className={`cell ${selectedCell === banner.key ? "selected" : ""}`}
                                onClick={()=>handleClick(banner.key, 1000+banner.key)}
                                key={banner.key}
                            >
                                <Banner theme={banner.theme}>
                                    <Banner.Head>
                                        {capitalize(banner.theme)}
                                    </Banner.Head>
                                    <Banner.Text>
                                        Example {banner.theme} banner.
                                    </Banner.Text>
                                </Banner>
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
                <div className="props-cell">"information"</div>
                <div className="props-cell">The selected theme for your Banner.</div>

                <div className="props-cell">className</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Assign your own classes for further customization</div>

                <div className="props-cell">headStyle</div>
                <div className="props-cell">object</div>
                <div className="props-cell">{"{}"}</div>
                <div className="props-cell">Assign your own styles as camelCase object properties for Banner Head section, for further customization.</div>

                <div className="props-cell">textStyle</div>
                <div className="props-cell">object</div>
                <div className="props-cell">{"{}"}</div>
                <div className="props-cell">Assign your own styles as camelCase object properties for Banner Text section, for further customization.</div>
            </div>
        </div>
    )
}