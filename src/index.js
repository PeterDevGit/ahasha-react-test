import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { createStore } from "redux";
import {Provider} from "react-redux";

import { createBrowserHistory } from "history";

import App from './Components/App/App';
import reducer from "./Redux/reducer";

const _browserHistory = createBrowserHistory();
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route history={_browserHistory} component={App} />
        </BrowserRouter>
    </Provider>

    ,document.getElementById('root')
);