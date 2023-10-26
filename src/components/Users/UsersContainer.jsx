import { Component } from "react";
import { usersAPI } from "../../api/api";
import { connect } from "react-redux";
import {
	followToUserState,
	unfollowToUserState,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	setLoadingStatus,
	setFollowingIsChanging
} from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
	componentDidMount() {
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {

			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
			this.props.setLoading(true);
		});
	}

	onChangePage = (pageNumber) => {
		this.props.setPage(pageNumber);
		this.props.setLoading(false);

		usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
			this.props.setUsers(data.items);
			this.props.setLoading(true);
		});
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
		setUsers: setUsers,
		follow: followToUserState,
		unfollow: unfollowToUserState,
		setPage: setCurrentPage,
		setTotalUsersCount: setTotalUsersCount,
		setLoading: setLoadingStatus,
		setFollowingIsChanging: setFollowingIsChanging

	})(UsersContainer);