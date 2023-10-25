import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";
import { combineReducers, legacy_createStore } from "redux";


const reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogReducer,
		sidebarPage: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer
	})
const store = legacy_createStore(reducers)

window.store = store

export default store
