import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {state} from "./State";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = () => {
    root.render
    (
        <React.StrictMode>
            <BrowserRouter>
                <App data={state}/>
            </BrowserRouter>
        </React.StrictMode>
    )
}
state.subscribe(rerenderEntireTree)
rerenderEntireTree()
