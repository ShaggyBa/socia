import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPosts-container";
import User from "./User/User"

const Profile = (props) => {
    const user = props.store.getState().profilePage.users
    return (
        <div className={profile.container}>
            <User user__name={user.user1.user__name}
                  user__status={user.user1.user__status}
                  user__img={user.user1.user__img}
                  user__info={user.user1.user__info}/>
            <MyPostsContainer store={props.store}/>

        </div>
    )
}

export default Profile