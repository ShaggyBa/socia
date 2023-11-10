import { loginAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

const initialState = {
	id: null,
	email: '',
	login: '',
	isAuth: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: action.data.isAuth
			}

		default:
			return { ...state }
	}

}

export const setAuthUserData = (userId, email, login, isAuth) =>
({
	data: {
		userId,
		email,
		login,
		isAuth
	},
	type: SET_AUTH_USER_DATA
})

export const userAuth = () => (dispatch) => {
	return loginAPI.auth().then(data => {
		if (data.resultCode === 0) {
			const { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}

export const userLogin = ({ email, password, rememberMe = false }, submitProps) => (dispatch) => {
	loginAPI.userLogin(email, password).then((data) => {
		if (data.resultCode === 0) {
			dispatch(userAuth())
			submitProps.resetForm()
		}
		else {
			submitProps.setErrors({ general: data.messages[0] })
			submitProps.setSubmitting(false)
		}
	})
}

export const userLogout = () => async (dispatch) => {
	const data = await loginAPI.userLogout()
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, "", "", false))
	}
}