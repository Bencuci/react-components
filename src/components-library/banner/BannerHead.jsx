import React from "react"
import { BannerContext } from "./Banner"

export default function BannerHead({className, children, ...rest}) {
    const {headStyle} = React.useContext(BannerContext)

    return (
        <div style={{headStyle}} {...rest} >
            {children}
        </div>
    )
}