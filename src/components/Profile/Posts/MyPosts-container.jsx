import React from "react"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const MyPostsContainer = connect(
	(state) => {
		return {
			state: state.profilePage
		}
	},
	(dispatch) => {
		return {
			addPost: () => dispatch(addPostActionCreator()),
			updateNewPost: (text) => dispatch(updateNewPostTextActionCreator(text))
		}
	})(MyPosts)

export default MyPostsContainer
