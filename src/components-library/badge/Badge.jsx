import React from "react"
import classnames from "classnames"
import '../../styles/badgeStyle.css'

export default function Badge({theme="gray", shape="square", classname, children, ...rest}) {
    let themeClass = theme && theme
    let shapeClass = shape && shape
    const allClasses = classnames('badge', themeClass, shapeClass, classname)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}