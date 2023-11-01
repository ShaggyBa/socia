import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { WithRouter } from "../WithRouter/WithRouter";
import { getUserProfile } from "../../redux/profileReducer";
import { authRedirectComponent } from "../../hoc/authRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.router.params.userId
		this.props.getUserProfile(userId)
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
			}
		},
		{
			getUserProfile
		}),
	WithRouter,
	authRedirectComponent
)(ProfileContainer)
