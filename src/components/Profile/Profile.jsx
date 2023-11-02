import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPostsСontainer";
import UserProfile from "./UserProfile/UserProfile";
import { useLocation } from "react-router-dom";

const Profile = (props) => {
	const currentPath = useLocation().pathname

	return (
		<div className={profile.container}>
			<UserProfile
				profile={currentPath === "/" || currentPath === "/profile" ? props.defaultProfile.user1 : props?.profile}
				status={props.status || ""}
				updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile