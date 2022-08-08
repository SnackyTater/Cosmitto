import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app'
import { store as rootStore } from './redux';
import { Provider } from 'react-redux'
import './styles/main.scss'
import './styles/text.scss'
import './styles/color.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={rootStore}>
        <App />
    </Provider>
)