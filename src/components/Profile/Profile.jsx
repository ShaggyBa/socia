import React from "react"
import profile from "./Profile.module.css"
import MyPosts from "./Posts/MyPosts";
import User from "./User/User"

const Profile = (props) => {
    return (
        <div className={profile.container}>
            <User user__name={props.data.users.user1.user__name}
                  user__status={props.data.users.user1.user__status}
                  user__img={props.data.users.user1.user__img}
                  user__info={props.data.users.user1.user__info}/>
            <MyPosts postsData={props.data.postsData}
                     dispatch={props.dispatch}
                     values={props.values}/>

        </div>
    )
}

export default Profile