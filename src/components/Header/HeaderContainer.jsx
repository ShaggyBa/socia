import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(responce => {
			if (responce.data.resultCode === 0) {
				const { id, email, login } = responce.data.data
				this.props.setAuthUserData(id, email, login)
			}
		})
	}
	render() {
		return <Header {...this.props} />
	}
}

export default connect(
	(state) => ({
		isAuth: state.auth.isAuth,
		name: state.auth.login,
	}),
	{
		setAuthUserData

	}
)(HeaderContainer)