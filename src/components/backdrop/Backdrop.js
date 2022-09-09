import React, {useRef, useEffect} from "react"

import './style.scss'

export const Backdrop = ({children, onClickBackdrop}) => {
    const backdropRef = useRef()

    useEffect(() => {
        const handleClickOutside = event => {
            if (
                backdropRef.current &&
                !backdropRef.current.contains(event.target)
            ) {
                onClickBackdrop()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [backdropRef])

    return (
        <div className="VW-100 VH-100 bg-backdrop d-flex center top-0 left-0 right-0 bottom-0 p-absolute">
            <div
                ref={backdropRef}
                className="p-3 rounded d-flex center bg-white flex-column backdrop"
            >
                {children}
            </div>
        </div>
    )
}
