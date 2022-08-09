import React, {useEffect} from "react"
import {ErrorBoundaries} from "../listener/ErrorBoundaries"
import {NotificationListener} from "../listener/NotificationListener"
import {RootRoute} from "../route"

import {getFromLocalStorage, saveToLocalStorage} from "~utils/localStorage"
import {addTheme, getTheme} from "~utils/theme"

export const App = () => {
    useEffect(() => {
        const theme = getFromLocalStorage("theme")
        if (theme) addTheme(theme)

        window.addEventListener(
            "beforeunload",
            saveToLocalStorage("theme", getTheme())
        )

        return () => {
            window.removeEventListener(
                "beforeunload",
                saveToLocalStorage("theme", getTheme())
            )
        }
    }, [])

    return (
        <ErrorBoundaries>
            <NotificationListener>
                <RootRoute />
            </NotificationListener>
        </ErrorBoundaries>
    )
}
