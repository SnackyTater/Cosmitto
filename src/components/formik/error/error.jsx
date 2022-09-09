import React from 'react'

export const Error = ({children, message, className}) => {
    return (
        <div className='py-1'>
            <span className={`error fs-14 fw-100 ${className}`}>{children || message}</span>
        </div>
    )
}