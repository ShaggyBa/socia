import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import  thunkMiddleware from "redux-thunk";


const reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogReducer,
		sidebarPage: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer
	})
const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
