import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Videos from "./components/Videos/Videos";
import Music from "./components/Music/Music";
import Community from "./components/Community/Community";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="container">
                    <Header/>
                    <Sidebar/>
                    <div className={"app-wrapper-content"}>
                        <Routes>
                            <Route path="/*" element={<Profile/>}/>
                            <Route path="/dialogs/*" element={<Dialogs/>}/>
                            <Route path="/community" element={<Community/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/videos" element={<Videos/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
