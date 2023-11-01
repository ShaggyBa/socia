import React from "react"
import user from "./UserProfile.module.css"

const UserProfile = (props) => {
	return (
		<div className={`${user.user__profile} block`}>
			<div className={user.user__img}>
				<img src={props.profile?.photos.large || "https://placehold.co/150x150"} alt="изображение профиля" />
			</div>
			<div className={user.user__content}>
				<div className={user.user__name}>{props.profile?.fullName || "no name"}</div>
				<div className={user.user__status}>{props.profile?.lookingForAJob ? "looking for a job" : "not looking for a job"}</div>
				<div className={user.user__info}>{props.profile?.lookingForAJobDescription || "no description"}</div>
			</div>
		</div>
	)
}

export default UserProfile