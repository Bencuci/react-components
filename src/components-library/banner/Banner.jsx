import React from "react"
import "../../styles/bannerStyle.css"
import classnames from "classnames"

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({theme, headStyle, textStyle, children, className, ...rest}) {
    let themeClass = theme && theme
    const allClasses = classnames(className, themeClass)

    return (
        <BannerContext.Provider
            value={{headStyle, textStyle}}
        >
            <div className={allClasses} {...rest}>
                {children}
            </div>
        </BannerContext.Provider>
    )
}