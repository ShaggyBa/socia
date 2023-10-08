import { Component } from "react";
import axios from "axios"
import { connect } from "react-redux";
import {
	followToUserStateActionCreator,
	unfollowToUserStateActionCreator,
	setUsersActionCreator,
	setCurrentPageActionCreator,
	setTotalUsersCountActionCreator
} from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onChangePage = (pageNumber) => {
		this.props.setPage(pageNumber);

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			onChangePage={this.onChangePage} />
	}

}

export default connect(
	state => {
		return {
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage
		}
	},
	dispatch => {
		return {
			setUsers: (users) => dispatch(setUsersActionCreator(users)),
			follow: (id) => dispatch(followToUserStateActionCreator(id)),
			unfollow: (id) => dispatch(unfollowToUserStateActionCreator(id)),
			setPage: (page) => dispatch(setCurrentPageActionCreator(page)),
			setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountActionCreator(totalCount))
		}
	})(UsersContainer);