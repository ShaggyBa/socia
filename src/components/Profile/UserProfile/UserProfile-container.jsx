import React from "react"
import UserProfile from "./UserProfile";
import { connect } from "react-redux";

const UserContainer = connect(
	state => {
		return {
			state: state.profilePage.users
		}
	},
	dispatch => {
		return {}
	})(UserProfile)

export default UserContainer
