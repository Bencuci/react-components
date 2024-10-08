import React from "react"
import classnames from "classnames"
import "../../styles/cardStyle.css"

export default function Card({children, title, iconPath, ...rest}) {
    return (
        <div className={classnames("card", rest.className)}>
            <img src="/src/images/cardIcon.png"/>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}