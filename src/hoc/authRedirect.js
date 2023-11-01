import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


export const authRedirectComponent = (Component) => {
	class ComponentWithAuthRedirect extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to="/login" />
			return <Component {...this.props} />
		}
	}
	return connect((state) => {
		return {
			isAuth: state.auth.isAuth
		}
	})
		(ComponentWithAuthRedirect)
}