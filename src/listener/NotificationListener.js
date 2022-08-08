import React, { useEffect, useState } from 'react'

export const NotificationListener = (props) => {
    const [ws, setWS] = useState(new WebSocket(`ws://${process.env.HOST}`))

    useEffect(() => {
        let timeoutID

        ws.onopen = (event) => {
            console.log('open', event)
        }

        ws.onmessage = (event) => {
            console.log('event', event)
        }

        ws.onerror = (error) => {
            console.log('error', error);
            // timeoutID = setTimeout(() => {
            //     setWS(new WebSocket(`ws://${process.env.HOST}`))
            // }, 10000)
        }

        return () => {
            clearTimeout(timeoutID)
            ws.close()
        }
    }, [ws])

    return (
        <>
            {props.children}
        </>
    )
}
