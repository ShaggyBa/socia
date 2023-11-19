import { loginAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
const SET_CAPTCHA_TO_AUTH = "SET_CAPTCHA_TO_AUTH"

const initialState = {
	id: null,
	email: '',
	login: '',
	isAuth: false,
	captcha: null // null | string - if null, then captcha is not required
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: action.data.isAuth
			}

		case SET_CAPTCHA_TO_AUTH:
			return {
				...state,
				captcha: action.captcha
			}

		default:
			return { ...state }
	}

}

export const setAuthUserData = (id, email, login, isAuth) =>
({
	data: {
		id,
		email,
		login,
		isAuth
	},
	type: SET_AUTH_USER_DATA
})

export const setCaptcha = (captcha) => ({
	type: SET_CAPTCHA_TO_AUTH,
	captcha
})

export const userAuth = () => (dispatch) => {
	return loginAPI.auth().then(data => {
		if (data.resultCode === 0) {
			const { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}

export const userLogin = ({ email, password, rememberMe = false, captcha=null }, submitProps) => (dispatch) => {
	loginAPI.userLogin(email, password, rememberMe, captcha).then((data) => {

		if (data.resultCode === 0) {
			dispatch(userAuth())
			submitProps.resetForm()
		}
		else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaToAuth())
			}
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

export const getCaptchaToAuth = () => async  (dispatch) => {
	const data = await loginAPI.getCaptcha()
	dispatch(setCaptcha(data.url))
}