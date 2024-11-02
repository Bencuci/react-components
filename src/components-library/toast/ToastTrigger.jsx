import React from "react"
import { ToastContext } from "./Toast"
import classnames from "classnames"

export default function ToastTrigger({variant="information", title="Notification", text="", children, ...rest}) {
    const {addToast} = React.useContext(ToastContext)
    const allClasses = classnames("trigger", rest.ClassName)

    return (
        <div className={allClasses} onClick={()=>addToast(variant, title, text)}>
            {children}
        </div>
    )
}