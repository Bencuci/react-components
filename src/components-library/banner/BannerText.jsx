import React from "react"
import { BannerContext } from "./Banner"
import classnames from "classnames"

export default function BannerText({ children, className, ...rest} ) {
    const { textStyle } = React.useContext(BannerContext)
    const allClasses = classnames('banner-text', className)

    return (
        <div className={allClasses} style={{textStyle}} {...rest}>
            {children}
        </div>
    )
}
