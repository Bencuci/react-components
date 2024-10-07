import React from "react"
import classnames from "classnames"
import '../../styles/badgeStyle.css'

export default function Badge({theme="gray", shape="square", className, children, ...rest}) {
    let themeClass = theme && theme
    let shapeClass = shape && shape
    const allClasses = classnames('badge', themeClass, shapeClass, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}