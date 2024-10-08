import React from "react"
import { BannerContext } from "./Banner"
import classnames from "classnames"

export default function BannerHead({ className, children, ...rest }) {
    const { headStyle, theme } = React.useContext(BannerContext)
    const allClasses = classnames('banner-head', className)
    let icon

    switch (theme) {
        case "warning":
            icon = <i className="fa-solid fa-triangle-exclamation"></i>
            break

        case "neutral":
            icon = <i className="fa-solid fa-circle-info"></i>
            break

        case "success":
            icon = <i className="fa-solid fa-circle-check"></i>
            break

        case "error":
            icon = <i className="fa-solid fa-circle-xmark"></i>
            break

        default:
            icon = null
            break
    }

    return (
        <div className={allClasses} style={{headStyle}} {...rest}>
            {icon}
            {children}
        </div>
    )
}
