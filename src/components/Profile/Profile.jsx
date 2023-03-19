import React from "react"
import profile from "./Profile.module.css"
import MyPostsContainer from "./Posts/MyPosts-container";
import UserContainer from "./User/User-container";

const Profile = () => {
    return (
        <div className={profile.container}>
            <UserContainer/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile