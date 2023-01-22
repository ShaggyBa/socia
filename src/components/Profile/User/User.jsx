import React from "react"
import user from "./User.module.css"

const User = (props) => {
    return (
        <div className={user.user__profile}>
            <div className={user.user__img}>
                <img src={props.user__img} alt="изображение профиля"/>
            </div>

            <div className={user.user__name}>{props.user__name}</div>
            <div className={user.user__status}>{props.user__status}</div>
            <div className={user.user__info}>{props.user__info}</div>
        </div>
    )
}

export default User