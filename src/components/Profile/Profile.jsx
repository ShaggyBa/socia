import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPostsСontainer";
import UserProfile from "./UserProfile/UserProfile";
import { useLocation } from "react-router-dom";
import {Preloader} from "../Common/Preloader/Preloader";

const Profile = (props) => {
	const currentPath = useLocation().pathname
	return (
		props.profile
			? <div className={profile.container}>
			 <UserProfile
				profile={currentPath === "/" || currentPath === "/profile" ? props.defaultProfile.user1 : props?.profile}
				status={props.status || ""}
				updateStatus={props.updateStatus}
			 	isOwner={props.isOwner}
				savePhoto={props.savePhoto}
			 />
			<MyPostsContainer />
		</div>
			: <Preloader />
	)
}

export default Profile