import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPostsСontainer";
import UserProfile from "./UserProfile/UserProfile";
import {Preloader} from "../Common/Preloader/Preloader";

const Profile = (props) => {
	return (
		props.profile
			? <div className={profile.container}>
			 <UserProfile
				profile={props?.profile ? props.profile : props.defaultProfile.user1}
				status={props.status || ""}
				updateStatus={props.updateStatus}
				updateProfile={props.updateProfile}
			 	isOwner={props.isOwner}
				savePhoto={props.savePhoto}
			 />
			<MyPostsContainer />
		</div>
			: <Preloader />
	)
}

export default Profile