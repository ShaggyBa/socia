import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from "./redux/redux-state";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (props) => {
    root.render
    (
        <React.StrictMode>
            <BrowserRouter>
                <App
                    data={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>
    )
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))