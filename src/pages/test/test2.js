import React from 'react'
import { history } from '~constants/history'

export const Test2 = () => {
    const handleClick = () => {
        history.push('/test1')
    }

    return (
        <div>
            <p>
                Test2
            </p>
            <button onClick={handleClick}>test1</button>
        </div>
    )
}
