import { userAuth } from "./authReducer";

const SET_INITIALIZE = "SET_INITIALIZE"

const initialState = {
	initialize: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZE:
			return {
				...state,
				initialize: true
			}

		default:
			return { ...state }
	}

}

export const setInitialize = () =>
({
	type: SET_INITIALIZE
})

export const initializeApp = () => (dispatch) => {
	const getPromise = dispatch(userAuth())
	Promise.all([getPromise]).then(() => {
		dispatch(setInitialize())
	})
}