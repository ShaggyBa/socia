import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userLogin } from "../../redux/authReducer";
import { connect } from "react-redux";

import s from "./Login.module.css";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
	return (
		!props.isAuth
			? <div className={s.container}>
				<h1>Login</h1>

				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(values) => {
						props.userLogin(values.email, values.password);
					}}
				>
					<Form className={s.form}>
						<div>
							<Field type="email" id="email" name="email" minLength="5" />
							<label htmlFor="email">Login</label>
							<ErrorMessage name="email" component="div" />
						</div>
						<div>
							<Field type="password" id="password" name="password" />
							<label htmlFor="password">Password</label>
							<ErrorMessage name="password" component="div" />
						</div>
						<button className="btn" type="submit">Submit</button>
					</Form>
				</Formik>
			</div>
			: <Navigate to="/" />
	);
}

export default connect((state) => ({ isAuth: state.auth.isAuth }), { userLogin })(LoginForm)