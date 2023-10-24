import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { WithRouter } from "../WithRouter/WithRouter";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";




class ProfileContainer extends React.Component {
	componentDidMount() {
		debugger
		const userId = this.props.router.params.userId
		axios.
			get(`https://social-network.samuraijs.com/api/1.0/profile${userId ? "/" + userId : ""}`).then(responce => {
				this.props.setUserProfile(responce.data);
			})
	}
	render() {
		return <Profile {...this.props} />
	}
}

export default connect(
	state => {
		return {
			defaultProfile: state.profilePage.defaultUser,
			profile: state.profilePage.profile
		}
	},
	{
		setUserProfile
	})(WithRouter(ProfileContainer))
