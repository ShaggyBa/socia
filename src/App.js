import React from 'react';
import { Routes, Route } from "react-router-dom";
import SidebarContainer from './components/Sidebar/Sidebar-container';
import Settings from "./components/Settings/Settings";
import Videos from "./components/Videos/Videos";
import Music from "./components/Music/Music";
import Community from "./components/Community/Community";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

import './App.css';

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
							<Route path="/community" element={<Community />} />
							<Route path="/music" element={<Music />} />
							<Route path="/videos" element={<Videos />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/users" element={<UsersContainer />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</div>
				</div>
			</div>
		);
}

export default App;