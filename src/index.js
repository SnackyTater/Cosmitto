import React from "react"
import {Provider} from "react-redux"
import {createRoot} from "react-dom/client"

import {store as rootStore} from "./redux"
import {App} from "./app"

import "./styles/metric.scss"
import "./styles/color.scss"
import "./styles/main.scss"
import "./styles/text.scss"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <Provider store={rootStore}>
        <App />
    </Provider>
)
