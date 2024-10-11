import React from "react"
import ToastItem from "./ToastItem"
import "/src/styles/toastStyle.css"

const ToastContext = React.createContext()
export { ToastContext }

export default function Toast({children, ...rest}) {
    const [toasts, setToasts] = React.useState([])

    function addToast(variant, title, text) {
        const newToast = {variant, title, text, id: Date.now()}
        setToasts(prevToasts => [...prevToasts, newToast])
    }

    function removeToast(id) {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
    }

    return (
        <div>
            <div className="toast-list">
                {toasts.map( toast => (
                    <ToastItem 
                        key={toast.id}
                        id={toast.id}
                        variant={toast.variant}
                        title={toast.title}
                        text={toast.text}
                        removeToast={removeToast}
                    />
                ))}
            </div>
            <ToastContext.Provider value={{addToast}}>
                {children}
            </ToastContext.Provider>
        </div>
    )
}