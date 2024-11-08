import React from "react"
import "../../styles/bannerStyle.css"
import classnames from "classnames"

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({theme = "information", headStyle, textStyle, children, className, ...rest}) {
    const allClasses = classnames('banner', className, theme)

    return (
        <BannerContext.Provider
            value={{headStyle, textStyle, theme}}
        >
            <div className={allClasses} {...rest}>
                {children}
            </div>
        </BannerContext.Provider>
    )
}