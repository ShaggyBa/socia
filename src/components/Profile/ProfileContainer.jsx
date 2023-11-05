import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { WithRouter } from "../WithRouter/WithRouter";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { authRedirectComponent } from "../../hoc/authRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
	componentDidMount() {
		let currentUserId = this.props.router.params.userId
		if (!currentUserId)
			currentUserId = this.props.userId

		this.props.getUserProfile(currentUserId)

		this.props.getStatus(2)
	}
	render() {
		return <Profile {...this.props} />
	}
}


export default compose(
	connect(
		state => {
			return {
				defaultProfile: state.profilePage.defaultUser,
				profile: state.profilePage.profile,
				status: state.profilePage.status,
				userId: state.auth.id,
				isAuth: state.auth.isAuth
			}
		},
		{
			getUserProfile,
			getStatus,
			updateStatus
		}),
	WithRouter,
	authRedirectComponent
)(ProfileContainer)
