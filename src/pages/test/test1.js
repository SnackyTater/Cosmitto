import React from 'react'
import { history } from '~constants/history'

export const Test1 = () => {
    const handleClick = () => {
        history.push('/test2')
    }

    return (
        <div>
            <p>
                Test1
            </p>
            <button onClick={handleClick}>test2</button>
        </div>
    )
}
