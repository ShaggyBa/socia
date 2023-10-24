import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPosts-container";
import UserProfile from "./UserProfile/UserProfile";

const Profile = (props) => {
	return (
		!props.profile
			? <div className={profile.container}>
				<UserProfile profile={props.defaultProfile.user1} />
				<MyPostsContainer />
			</div>
			: <div className={profile.container}>
				<UserProfile profile={props.profile} />
				<MyPostsContainer />
			</div>

	)
}

export default Profile