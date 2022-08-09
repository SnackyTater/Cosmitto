import React from "react"
import {Provider} from "react-redux"
import {createRoot} from "react-dom/client"

import {NotificationListener} from "./listener/NotificationListener"
import {ErrorBoundaries} from "./listener/ErrorBoundaries"
import {store as rootStore} from "./redux"
import {RootRoute} from "./route"

import "./styles/metric.scss"
import "./styles/color.scss"
import "./styles/main.scss"
import "./styles/text.scss"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <Provider store={rootStore}>
        <ErrorBoundaries>
            <NotificationListener>
                <RootRoute />
            </NotificationListener>
        </ErrorBoundaries>
    </Provider>
)
