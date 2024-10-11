import React from "react"
import classnames from "classnames"
import { TooltipContext } from "./Tooltip"

export default function TooltipPopup({children, ...rest}) {
    const {title, theme, visible, show, hide} = React.useContext(TooltipContext)
    const variant = theme.substring(0,3) === "lig" ? "light" : "bold"

    return (
        <div 
            className={classnames(
                "popup", 
                variant, 
                theme, 
                rest.className, 
                {"popup-showup":visible})}
            style={{
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden'
            }}
            onMouseOver={show}
            onMouseLeave={hide}
        >
            <i className="fa-regular fa-lightbulb"></i>
            <div>
                <h3>{title}</h3>
                 <p>{children}</p>
            </div>
            <i 
                className="fa-solid fa-x"
                onClick={hide}
            />
        </div>
    )    
}