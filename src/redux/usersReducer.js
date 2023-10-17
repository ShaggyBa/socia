const FOLLOW_TO_USER = "FOLLOW-TO-USER"
const UNFOLLOW_TO_USER = "UNFOLLOW-TO-USER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_LOADING_STATUS = "SET-LOADING-STATUS"

const initialState = {
	users: [

	],
	pageSize: 5,
	currentPage: 1,
	totalUsersCount: null,
	isLoading: false
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_TO_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, isFollowed: true }
					}
					return user
				})
			}
		case UNFOLLOW_TO_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, isFollowed: false }
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
		default:
			return { ...state }
	}

}

export const followToUserStateActionCreator = (id) =>
({
	id: id,
	type: FOLLOW_TO_USER
})

export const unfollowToUserStateActionCreator = (id) =>
({
	id: id,
	type: UNFOLLOW_TO_USER,
})

export const setUsersActionCreator = (users) =>
({
	users,
	type: SET_USERS,
})

export const setCurrentPageActionCreator = (currentPage) =>
({
	currentPage,
	type: SET_CURRENT_PAGE,
})

export const setTotalUsersCountActionCreator = (totalCount) =>
({
	totalCount: totalCount > 100 ? 100 : totalCount,
	type: SET_TOTAL_USERS_COUNT,
})

export const setLoadingStatusActionCreator = (isLoading) =>
({
	isLoading,
	type: SET_LOADING_STATUS,
})