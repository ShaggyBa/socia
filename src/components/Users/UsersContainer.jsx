import { Component } from "react";
import { connect } from "react-redux";
import {
	follow,
	unfollow,
	setCurrentPage,
	setsubscriptionChanges, getUsers
} from "../../redux/usersReducer";
import Users from "./Users";

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
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			onChangePage={this.onChangePage}
			loadingStatus={this.props.isLoading}
			subscriptionChanges={this.props.subscriptionChanges}

		/>)
	}

}

export default connect(
	state => {
		return {
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage,
			isLoading: state.usersPage.isLoading,
			subscriptionChanges: state.usersPage.subscriptionChanges
		}
	},
	{
		follow,
		unfollow,
		setPage: setCurrentPage,
		setsubscriptionChanges,
		getUsers

	})(UsersContainer);