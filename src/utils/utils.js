import React, {useEffect} from "react"
import { useLocation } from "react-router-dom"

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1)

const ScrollToTop = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return null
}

export {capitalize, ScrollToTop}