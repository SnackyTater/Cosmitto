import React from 'react';
import ReactDOM from 'react-dom';
import {RootRoute} from './route';
import { store as rootStore } from './redux';
import { Provider } from 'react-redux'
import './styles/main.scss'

ReactDOM.render(
    <Provider store={rootStore}>
        <RootRoute/>
    </Provider>
, document.getElementById('root'));