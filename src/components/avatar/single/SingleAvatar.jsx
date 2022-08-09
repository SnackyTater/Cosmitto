import React from "react"

export const SingleAvatar = ({src, alt, size}) => {
    return <img src={src} alt={alt} className={`circle ${size}`} />
}
