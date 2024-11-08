import React, { useState, useEffect, useMemo } from "react"
import { Testimonial } from "../components-library/"
import { testimonialData } from "./pageData"
import { capitalize } from "/src/utils/utils"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-okaidia.css'
import "../styles/Testimonials.css"

export default function Testimonials() {
    const [selectedCell, setSelectedCell] = useState(null)
    const [selectedRowHead, setSelectedRowHead] = useState(null)
    const [importCode] = useState(
        `import { Testimonial } from 'custom-components'`
    )
    const [sampleCode, setSampleCode] = useState(
        `<Testimonial\n    name="John Doe"\n    title="React Developer"\n    imgPath="/images/testimonial.jpeg"\n>\n    Testimonial text\n</Testimonial>`
    )
    const selectedVariationObj = useMemo(() => 
        testimonialData.find( testimonial => testimonial.key === selectedRowHead ),
    [selectedRowHead]
    )

    useEffect(() => {
        const variant = selectedVariationObj ? selectedVariationObj.variant : "non-image"
        setSampleCode(
            `<Testimonial\n    name="May Andersons"\n    title="React Developer"\n${variant === "non-image" ?  '' : '    imgPath="/images/testimonial.jpeg"\n'}>\n    Testimonial text\n</Testimonial>`
        )
    }, [selectedVariationObj])

    const handleClick = (cell, rowHead) => {
        setSelectedCell(cell)
        setSelectedRowHead(rowHead)
    }
    
    return (
        <div className="library-page-container">
            <h1>Testimonials</h1>
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
            <div className="sample-container">
                <div className="variant-table badges-table">
                    {testimonialData.map(testimonial => (
                        testimonial.role === "header" ? (
                            <h4 className={`row-header ${selectedRowHead === testimonial.key ? "selected" : ""}`} key={testimonial.key}>
                                {capitalize(testimonial.variant)}
                            </h4>
                        ) : (
                            <div 
                                className={`cell ${selectedCell === testimonial.key ? "selected" : ""}`}
                                onClick={()=>handleClick(testimonial.key, 1000+testimonial.key)}
                                key={testimonial.key}
                            >
                                <Testimonial
                                    name="May Andersons"
                                    title="React Developer"
                                    imgPath={testimonial.variant === "non-image" ? null : "/images/testimonial.jpeg"}
                                >
                                    I love using Benjamin's custom components. They are so easy to use and customize. It helps a lot when developing!
                                </Testimonial>
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
                
                <div className="props-cell">imgPath</div>
                <div className="props-cell">string</div>
                <div className="props-cell">null</div>
                <div className="props-cell">If you provide image path 1st variation; if it stays default, 2nd variation applies.</div>

                <div className="props-cell">className</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Assign your own classes for further customization</div>

                <div className="props-cell">name</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Testimonial owner's name, under the text</div>

                <div className="props-cell">title</div>
                <div className="props-cell">string</div>
                <div className="props-cell">""</div>
                <div className="props-cell">Testimonial owner's title, under the name</div>
            </div>
        </div>
    )
}