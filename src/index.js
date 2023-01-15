import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {state, store} from "./state";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
// export const rerenderEntireTree = () => {
//     root.render
//     (
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App data={state}/>
//             </BrowserRouter>
//         </React.StrictMode>
//     )
// }
// state.subscribe(rerenderEntireTree)
// rerenderEntireTree()


export const rerenderEntireTree = (props) => {
    root.render
    (
        <React.StrictMode>
            <BrowserRouter>
                <App
                    data={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    values={store.values}
                />
            </BrowserRouter>
        </React.StrictMode>
    )
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)