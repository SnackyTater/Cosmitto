import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import {useSelector} from "react-redux"

import {Snackbar} from "~components/snackbar"

const image =
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

export const NotificationListener = props => {
    const [ws, setWS] = useState(null)
    const [displayNotification, setDisplayNotification] = useState(false)
    const [notificationInfo, setNotificationInfo] = useState({
        image,
        title: "title",
        message: "lorem ipsum"
    })

    const auth = useSelector(state => state.auth.data)
    const location = window.location.pathname

    useEffect(() => {
        let mounted = true
        if (mounted) {
            if (auth) {
                if (location.pathname !== "/chat" && !ws)
                    setWS(new WebSocket("wss://ws.localhost:5000"))
                else {
                    ws.close()
                    setWS(null)
                }
            }
        }
        return () => (mounted = false)
    }, [auth, location])

    useEffect(() => {
        if (ws) {
            ws.onopen = event => {
                console.log("event", event)
                ws.send(auth.data._id)
            }

            ws.onmessage = event => {
                const data = JSON.parse(event.data)
            }

            ws.onerror = error => {
                console.log("error", error)
                timeoutID = setTimeout(() => {
                    setWS(new WebSocket(`ws://${process.env.HOST}`))
                }, 10000)
            }
        }

        return () => {
            clearTimeout(timeoutID)
            ws.close()
        }
    }, [ws])

    useEffect(() => {
        if (displayNotification) {
            setTimeout(() => {
                setDisplayNotification(false)
            }, 5000)
        }
    }, [displayNotification])

    const handleCloseNoti = () => setDisplayNotification(false)

    return (
        <div className="p-relative VW-100 VH-100 transparent">
            {props.children}
            <div className="p-absolute transparent bottom-0 left-0 p-3">
                {displayNotification && (
                    <Snackbar {...notificationInfo} onClose={handleCloseNoti} />
                )}
            </div>
        </div>
    )
}
