import React from "react"
import classnames from "classnames"

export default function ToastItem({id, variant, title, text, removeToast, ...rest}) {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true)

        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => removeToast(id), 300)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const allClasses = classnames(
        'toast', 
        `toast-${variant}`, 
        rest.className,
        {"toast-enter": isVisible, "toast-exit": !isVisible}
    )

    let icon
    switch(variant) {
        case("success"):
            icon = <i className="fa-regular fa-circle-check"></i>
            break;
        case("error"):
            icon = <i className="fa-solid fa-circle-xmark"></i>
            break;
        case("warning"):
            icon = icon = <i className="fa-solid fa-triangle-exclamation"></i>
            break;
        default:
            icon = <i className="fa-solid fa-circle-info"></i>
    }

    return (
        <div className={allClasses}>
            {icon}
            <article>
                <h4>{title}</h4>
                <p>{text}</p>
            </article>
        </div>
    )
}