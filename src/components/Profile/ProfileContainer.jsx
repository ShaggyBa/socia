import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { WithRouter } from "../WithRouter/WithRouter";
import { getUserProfile } from "../../redux/profileReducer";




class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.router.params.userId
		this.props.getUserProfile(userId)
	}
	render() {
		return <Profile {...this.props} />
	}
}

export default connect(
	state => {
		return {
			defaultProfile: state.profilePage.defaultUser,
			profile: state.profilePage.profile,
			isAuth: state.auth.isAuth
		}
	},
	{
		getUserProfile
	})(WithRouter(ProfileContainer))
