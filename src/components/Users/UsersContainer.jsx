import { Component } from "react";
import { usersAPI } from "../../api/api";
import { connect } from "react-redux";
import {
	followToUserState,
	unfollowToUserState,
	setCurrentPage,
	setFollowingIsChanging, getUsers
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

	onUnFollow = (userId) => {
		this.props.setFollowingIsChanging(true);

		usersAPI.unFollow(userId).then((response) => {
			this.props.setFollowingIsChanging(false);
			if (response.data.resultCode === 0)
				this.props.unfollow(userId)

		})
	}

	onFollow = (userId) => {
		this.props.setFollowingIsChanging(true);

		usersAPI.follow(userId).then(data => {
			this.props.setFollowingIsChanging(false);
			if (data.resultCode === 0)
				this.props.follow(userId)
		})
	}

	render() {
		return (<Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			follow={this.onFollow}
			unfollow={this.onUnFollow}
			onChangePage={this.onChangePage}
			loadingStatus={this.props.isLoading} />)
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
			followingIsChanging: state.usersPage.followingIsChanging
		}
	},
	{
		follow: followToUserState,
		unfollow: unfollowToUserState,
		setPage: setCurrentPage,
		setFollowingIsChanging: setFollowingIsChanging,
		getUsers

	})(UsersContainer);