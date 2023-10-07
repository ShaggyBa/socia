import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import SidebarContainer from './components/Sidebar/Sidebar-container';
import {Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Videos from "./components/Videos/Videos";
import Music from "./components/Music/Music";
import Community from "./components/Community/Community";
import DialogsContainer from './components/Dialogs/Dialogs-container';

const App = (props) => {
    return (
        <div className="app-wrapper">
                <Header/>
            <div className="container">
                <SidebarContainer />
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/*" element={
                            <Profile/>}/>
                        <Route path="/dialogs/*" element={
                            <DialogsContainer/>}/>
                        <Route path="/community" element={<Community/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/videos" element={<Videos/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
