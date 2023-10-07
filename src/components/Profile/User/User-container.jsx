import React from "react"
import User from "./User";
import { connect } from "react-redux";

const UserContainer = connect(
	state => {
		return {
			state: state.profilePage.users
		}
	},
	dispatch => {
		return {}
	})(User)

export default UserContainer
