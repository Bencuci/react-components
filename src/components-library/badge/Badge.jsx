import React from "react"
import classnames from "classnames"
import '../../styles/badgeStyle.css'

export default function Badge({theme="gray", shape="square", className, children="", style, ...rest}) {
    const allClasses = classnames('badge', theme, shape, className)

    return (
        <div 
            className={allClasses}
            style={style}
            {...rest}
        >
            {children}
        </div>
    )
}