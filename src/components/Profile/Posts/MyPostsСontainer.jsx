import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const MyPostsContainer = connect(
	(state) => {
		return {
			state: state.profilePage
		}
	},
	{
		addPost,
		updateNewPostText
	})(MyPosts)

export default MyPostsContainer
