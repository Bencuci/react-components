import React from "react"
import { Badge } from "../components-library/"
import { badgeData } from "./pageData"
import { capitalize } from "/src/utils/utils"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import "../styles/Badges.css"

export default function Badges() {
    const [selectedIndex, setSelectedIndex] = React.useState(null)
    const [code, setCode] = React.useState(
        `import { Badge } from 'custom-components'`
    )

    const badgesData = {

    }

    const handleClick = (index) => {
        setSelectedIndex(index)
    }

    return (
        <div className="badges-page-container">
            <h2>Badges</h2>
            <div className="code-block">
                <Editor 
                    value={code}
                    onValueChange={() => {}}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16
                    }}
                />
            </div>
            <div className="variant-table">
                {/* Column Headers */}
                <div className="empty"></div>
                <div className="col-header">Square</div>
                <div className="col-header">Pill</div>
                
                {badgeData.map( badge => (
                    badge.role === "header" ? (
                        <div className="row-header" key={badge.key}>
                            {capitalize(badge.theme)}
                        </div>
                    ) : (
                        <div 
                            className={`cell ${selectedIndex === badge.key ? "selected" : ""}`}
                            onClick={()=>handleClick(badge.key)}
                            key={badge.key}
                        >
                            <Badge theme={badge.theme} shape={badge.shape}>{capitalize(badge.theme)}</Badge>
                        </div>
                    )              
                ))}
            </div>
        </div>
    )
}