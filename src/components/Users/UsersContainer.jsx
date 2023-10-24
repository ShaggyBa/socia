import { Component } from "react";
import axios from "axios"
import { connect } from "react-redux";
import {
	followToUserState,
	unfollowToUserState,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	setLoadingStatus
} from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
			this.props.setLoading(true);
		});
	}

	onChangePage = (pageNumber) => {
		this.props.setPage(pageNumber);
		this.props.setLoading(false);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
			this.props.setUsers(response.data.items);
			this.props.setLoading(true);
		});
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
			isLoading: state.usersPage.isLoading
		}
	},
	{
		setUsers: setUsers,
		follow: followToUserState,
		unfollow: unfollowToUserState,
		setPage: setCurrentPage,
		setTotalUsersCount: setTotalUsersCount,
		setLoading: setLoadingStatus
	})(UsersContainer);