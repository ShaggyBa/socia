import React from 'react';
import { Routes, Route } from "react-router-dom";
import SidebarContainer from './components/Sidebar/Sidebar-container';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import WithSuspense from "./hoc/WithSuspense";

import './App.css';

const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Videos = React.lazy(() => import("./components/Videos/Videos"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Community = React.lazy(() => import("./components/Community/Community"));

const App = (props) => {

	return !props.initialize
		? <h1 className={'app__loading'}>Загрузка</h1>
		: (
			<div className="app-wrapper">
				<HeaderContainer />
				<div className="container">
					<SidebarContainer />
					<div className={"app-wrapper-content"}>
						<Routes>
							<Route path="/" element={<ProfileContainer />}>
								<Route path="/profile" element={<ProfileContainer />}>
									<Route path=":userId?" element={<ProfileContainer />} />
								</Route>
							</Route>
							<Route path="/dialogs/*" element={<DialogsContainer />} />
							<Route path="/community" element={
								WithSuspense(Community)({...props})
							}/>
							<Route path="/music" element={
								WithSuspense(Music)({...props})
							}/>
							<Route path="/videos" element={
								WithSuspense(Videos)({...props})
							}/>
							<Route path="/settings" element={
								WithSuspense(Settings)({...props})
							}/>
							<Route path="/users" element={<UsersContainer />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</div>
				</div>
			</div>
		);
}

export default App;