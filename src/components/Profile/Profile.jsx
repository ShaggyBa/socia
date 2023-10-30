import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPosts-container";
import UserProfile from "./UserProfile/UserProfile";
import { redirect } from "react-router";

const Profile = (props) => {
	return (
		props.isAuth
			? !props.profile
				? <div className={profile.container}>
					<UserProfile profile={props.defaultProfile.user1} />
					<MyPostsContainer />
				</div>
				: <div className={profile.container}>
					<UserProfile profile={props.profile} />
					<MyPostsContainer />
				</div>
			: redirect("/login")
	)
}

export default Profile