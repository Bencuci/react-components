import React from "react"
import classnames from "classnames"
import { TooltipContext } from "./Tooltip"
export { TooltipContext } from "./Tooltip"

export default function TooltipTrigger({children, ...rest}) {
    const {show, hide} = React.useContext(TooltipContext)

    return (
        <div 
            className={classnames("trigger", rest.className)}
            onMouseOver={show}
            onMouseLeave={hide}
        >
            {children}
        </div>
    )
}