import { Component } from "react";
import { connect } from "react-redux";
import {
	setFollowToUser,
	setCurrentPage,
	setsubscriptionChanges, getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import { authRedirectComponent } from "../../hoc/authRedirect";
import { compose } from "redux";
import {
	getUsersSelector,
	getPageSizeSelector,
	getTotalUsersCountSelector,
	getCurrentPageSelector,
	getIsLoadingSelector,
	getSubscriptionChangesSelector,
} from '../../selectors/UsersSelectors';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onChangePage = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
		this.props.setPage(pageNumber)
	}

	render() {
		return (<Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			setFollowToUser={this.props.setFollowToUser}
			onChangePage={this.onChangePage}
			loadingStatus={this.props.isLoading}
			subscriptionChanges={this.props.subscriptionChanges}

		/>)
	}

}

export default compose(
	connect(
		state => {
			return {
				users: getUsersSelector(state),
				pageSize: getPageSizeSelector(state),
				totalUsersCount: getTotalUsersCountSelector(state),
				currentPage: getCurrentPageSelector(state),
				isLoading: getIsLoadingSelector(state),
				subscriptionChanges: getSubscriptionChangesSelector(state),
			}
		},
		{
			setFollowToUser,
			setPage: setCurrentPage,
			setsubscriptionChanges,
			getUsers

		}),
	authRedirectComponent
)(UsersContainer);