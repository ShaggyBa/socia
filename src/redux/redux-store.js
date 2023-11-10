import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";
import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./appReducer";

const reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogReducer,
		sidebarPage: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
		app: appReducer
	})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store
