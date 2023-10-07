import React from "react"
import user from "./User.module.css"

const User = (props) => {
	const data = props.state.user1
	return (
		<div className={`${user.user__profile} block`}>
			<div className={user.user__img}>
				<img src={data.user__img} alt="изображение профиля" />
			</div>
			<div className={user.user__content}>
				<div className={user.user__name}>{data.user__name}</div>
				<div className={user.user__status}>{data.user__status}</div>
				<div className={user.user__info}>{data.user__info}</div>
			</div>
		</div>
	)
}

export default User