import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import {combineReducers, legacy_createStore} from "redux";


const reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        sidebarPage: sidebarReducer
    })
const store = legacy_createStore(reducers)


export default store
