import React from "react"
import {SingleAvatar} from "~components/avatar/single"

export const Snackbar = ({message, image, onClose, title}) => {
    return (
        <div className="d-flex border-shadow">
            <div className="p-3 d-flex center">
                <SingleAvatar src={image} alt={""} size={"ava-m"} />
            </div>
            <div className="py-3 px-1 d-flex center-vertical columns">
                <b>{title}</b>
                <p>{message}</p>
            </div>
            <div className="p-3 d-flex center">
                <button className="border-0" onClick={onClose}>
                    x
                </button>
            </div>
        </div>
    )
}
