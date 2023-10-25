const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

const initialState = {
	id: null,
	email: '',
	login: '',
	isLoading: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data
			}

		default:
			return { ...state }
	}

}

export const setAuthUserData = ({ userId, email, login }) =>
({
	data: {
		userId,
		email,
		login,
	},
	type: SET_AUTH_USER_DATA
})
