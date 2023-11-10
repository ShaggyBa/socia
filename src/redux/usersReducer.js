import { usersAPI } from "../api/api";

const SET_FOLLOW_TO_USER = "SET_FOLLOW_TO_USER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_LOADING_STATUS = "SET-LOADING-STATUS"
const SET_FOLLOWING_IS_CHANGING = "SET-FOLLOWING-IS-CHANGING"

const initialState = {
	users: [

	],
	pageSize: 5,
	currentPage: 1,
	totalUsersCount: null,
	isLoading: false,
	subscriptionChanges: false
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FOLLOW_TO_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: action.follow }
					}
					return user
				})
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount
			}
		case SET_LOADING_STATUS:
			return {
				...state,
				isLoading: action.isLoading
			}
		case SET_FOLLOWING_IS_CHANGING:
			return {
				...state,
				subscriptionChanges: action.subscriptionChanges
			}
		default:
			return { ...state }
	}

}

export const setFollowToUserState = (id, follow) =>
({
	id,
	follow,
	type: SET_FOLLOW_TO_USER,
})

export const setUsers = (users) =>
({
	users,
	type: SET_USERS,
})

export const setCurrentPage = (currentPage) =>
({
	currentPage,
	type: SET_CURRENT_PAGE,
})

export const setTotalUsersCount = (totalCount) =>
({
	totalCount: totalCount > 100 ? 100 : totalCount,
	type: SET_TOTAL_USERS_COUNT,
})

export const setLoadingStatus = (isLoading) =>
({
	isLoading,
	type: SET_LOADING_STATUS,
})

export const setsubscriptionChanges = (subscriptionChanges) =>
({
	subscriptionChanges,
	type: SET_FOLLOWING_IS_CHANGING
})

export const getUsers = (currentPage, pageSize) => {


	return async (dispatch) => {
		dispatch(setLoadingStatus(true));

		const data = await usersAPI.getUsers(currentPage, pageSize)

		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));

		dispatch(setLoadingStatus(false));
	}
}

export const setFollowToUser = (userId, follow) => {

	return async (dispatch) => {

		dispatch(setsubscriptionChanges(true));

		if (follow) {
			const data = await usersAPI.follow(userId)
			dispatch(setsubscriptionChanges(false));
			if (data.resultCode === 0)
				dispatch(setFollowToUserState(userId, follow))
		}
		else {
			const data = await usersAPI.unFollow(userId)
			dispatch(setsubscriptionChanges(false));
			if (data.resultCode === 0)
				dispatch(setFollowToUserState(userId, follow))
		}
	}
}