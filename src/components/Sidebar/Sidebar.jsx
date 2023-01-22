import React from "react"
import sidebar from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    const friendsList = props.data.friendsData.map(
        friend => <Friend name={friend.name} image={friend.profileImage}/>)

    return (
        <div className={sidebar.sidebar}>
            <nav className={sidebar.nav}>
				<span><NavLink to="/profile"
                               className={navData => navData.isActive ? sidebar.active : sidebar.sidebar__link}>
					Profile
				</NavLink>
				</span>
                <span><NavLink to="/dialogs"
                               className={navData => navData.isActive ? sidebar.active : sidebar.sidebar__link}>
					Messages
				</NavLink></span>
                <span><NavLink to="/community"
                               className={navData => navData.isActive ? sidebar.active : sidebar.sidebar__link}>
					Community
				</NavLink></span>
                <span><NavLink to="/music"
                               className={navData => navData.isActive ? sidebar.active : sidebar.sidebar__link}>
					Music
				</NavLink></span>
                <span><NavLink to="/videos"
                               className={navData => navData.isActive ? sidebar.active : sidebar.sidebar__link}>
					Videos
				</NavLink></span>
                <span><NavLink to="/settings"
                               className={navData => navData.isActive ? sidebar.active : sidebar.sidebar__link}>
					Settings
				</NavLink></span>

            </nav>
            <div className={sidebar.windowFriends}>
                <span>Friends</span>
                <div className={sidebar.friendsList}>
                    {friendsList}
                </div>
            </div>
        </div>
    )
}

export default Sidebar