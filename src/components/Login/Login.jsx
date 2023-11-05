import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { userLogin } from "../../redux/authReducer";
import { connect } from "react-redux";

import s from "./Login.module.css";
import { Navigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
	email: Yup.string()
		.required('Required')
		.email('Invalid email'),
	password: Yup.string()
		.required('Required')
		.min(2, 'Too Short!')
		.max(70, 'Too Long!')
});

const LoginForm = (props) => {
	return (
		!props.isAuth
			? <div className={s.container}>
				<h1>Login</h1>

				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={SignupSchema}
					onSubmit={(values, submitProps) => {
						props.userLogin({ ...values }, submitProps);
					}}
				>
					{({ errors, touched }) => (
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
							<div>
								{errors.general ? (<div>{errors.general}</div>) : null}
								<button className="btn" type="submit">Authorize</button>
							</div>
						</Form>)}
				</Formik>
			</div>
			: <Navigate to="/" />
	);
}

export default connect((state) => ({ isAuth: state.auth.isAuth }), { userLogin })(LoginForm)