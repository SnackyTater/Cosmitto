import React from "react"
import "./style.scss"

export const NormalButton = ({label, onClick, children}) => {
    return (
        <button onClick={onClick} className="btn banner txt-white">
            {label || children}
        </button>
    )
}
