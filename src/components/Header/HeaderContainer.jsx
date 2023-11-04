import React from "react";
import Header from "./Header";

import { connect } from "react-redux";
import { userAuth, userLogout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.userAuth()
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
		userAuth,
		userLogout
	}
)(HeaderContainer)