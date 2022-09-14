import React from "react"
import "./style.scss"

export const NormalButton = ({label, onClick, children, className, style}) => {
    return (
        <button 
            onClick={onClick} 
            className={`btn banner txt-white ${className}`}
            style={{...style}}
        >
            {label || children}
        </button>
    )
}
