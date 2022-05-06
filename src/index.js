import React from 'react';
import ReactDOM from 'react-dom';
import {RootRoute} from './route';
import rootStore from './redux';
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={rootStore}>
        <RootRoute/>
    </Provider>
, document.getElementById('root'));