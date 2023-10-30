import { usersAPI } from "../api/api";

const FOLLOW_TO_USER = "FOLLOW-TO-USER"
const UNFOLLOW_TO_USER = "UNFOLLOW-TO-USER"
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
		case FOLLOW_TO_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: true }
					}
					return user
				})
			}
		case UNFOLLOW_TO_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: false }
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

export const followToUserState = (id) =>
({
	id: id,
	type: FOLLOW_TO_USER
})

export const unfollowToUserState = (id) =>
({
	id: id,
	type: UNFOLLOW_TO_USER,
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


	return (dispatch) => {
		dispatch(setLoadingStatus(true));

		usersAPI.getUsers(currentPage, pageSize).then((data) => {

			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));

			dispatch(setLoadingStatus(false));

		});
	}
}

export const unfollow = (userId) => {

	return (dispatch) => {

		dispatch(setsubscriptionChanges(true));

		usersAPI.unFollow(userId).then((data) => {
			dispatch(setsubscriptionChanges(false));
			if (data.resultCode === 0)
				dispatch(unfollowToUserState(userId))

		})
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(setsubscriptionChanges(true));

		usersAPI.follow(userId).then(data => {
			dispatch(setsubscriptionChanges(false));
			if (data.resultCode === 0)
				dispatch(followToUserState(userId))
		})
	}
}