import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (

        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return (<MyPosts
                        state={store.getState().profilePage}
                        addPost={addPost}
                        updateNewPost={onPostChange}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer