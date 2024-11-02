import React from "react"
import classnames from "classnames"
import '../../styles/badgeStyle.css'

export default function Badge({theme="gray", shape="square", className, children, ...rest}) {
    const allClasses = classnames('badge', theme, shape, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}