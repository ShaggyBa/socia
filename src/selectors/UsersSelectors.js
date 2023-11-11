import { createSelector } from "reselect";

export const getUsersSelector = state => state.usersPage.users;
export const getPageSizeSelector = state => state.usersPage.pageSize;
export const getTotalUsersCountSelector = state => state.usersPage.totalUsersCount;
export const getCurrentPageSelector = state => state.usersPage.currentPage;
export const getIsLoadingSelector = state => state.usersPage.isLoading;
export const getSubscriptionChangesSelector = state => state.usersPage.subscriptionChanges;
export const getPortionSizeSelector = state => state.usersPage.portionSize;

export const getUserSuperSelector = createSelector(getUsersSelector, (users) => {
	return users
})