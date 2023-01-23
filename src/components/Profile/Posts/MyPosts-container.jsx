import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            state={props.store.getState().profilePage}
            addPost={addPost}
            updateNewPost={onPostChange}
        />
    )
}

export default MyPostsContainer