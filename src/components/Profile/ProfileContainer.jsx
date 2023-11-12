import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { WithRouter } from "../WithRouter/WithRouter";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profileReducer";
import { authRedirectComponent } from "../../hoc/authRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
	componentDidMount() {
		this.updateProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.router.params.userId !== prevProps.router.params.userId) {
			this.updateProfile()
		}
	}

	updateProfile = () => {
		let currentUserId = this.props.router.params.userId
		if (!currentUserId)
			currentUserId = this.props.userId

		this.props.getUserProfile(currentUserId)
		this.props.getStatus(currentUserId)
	}

	render() {
		return <Profile isOwner={!this.props.router.params.userId} {...this.props} />
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
			updateStatus,
			savePhoto: savePhoto
		}),
	WithRouter,
	authRedirectComponent
)(ProfileContainer)
