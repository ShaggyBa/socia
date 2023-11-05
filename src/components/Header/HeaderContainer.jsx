import React from "react";
import Header from "./Header";

import { connect } from "react-redux";
import { userLogout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {

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
		userLogout
	}
)(HeaderContainer)