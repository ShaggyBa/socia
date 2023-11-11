import React from "react";
import s from "./Users.module.css"
import { NavLink } from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";
import {Preloader} from "../Common/Preloader/Preloader";

export const Users = (
	{
		users,
		totalUsersCount,
		pageSize,
		currentPage,
		setFollowToUser,
		onChangePage,
		loadingStatus,
		subscriptionChanges,
		portionSize
	}) => {


	return (
		!loadingStatus
			? <div className={s.users}>
				{users.map((user, index) => (
					<div key={index} className={`${s.users__item} block`}>
						<div className={s.users__name}>
							<NavLink to={`/profile/${user.id}`}>
								<p>{user.name}</p>
								<img src={user.photos.small || "https://placehold.co/150x150"} alt="изображение профиля" />
							</NavLink>
						</div>
						<div className={s.users__info}>
							<p>Status: <i>{user.status || `Hi, I'm ${user.name}`}</i></p>
							< p>
								Location: {"user.location.city"}, {"user.location.country"}
							</p>
							{user.followed
								? <button className="btn" disabled={subscriptionChanges}
									onClick={() => setFollowToUser(user.id, false)}>Unfollow</button>
								: <button className="btn" disabled={subscriptionChanges}
									onClick={() => setFollowToUser(user.id, true)}>Follow</button>
							}
						</div>
					</div>
				))
				}

				<Pagination
					totalUsersCount={totalUsersCount}
					pageSize={pageSize}
					currentPage={currentPage}
					onChangePage={onChangePage}
					portionSize={portionSize} />
			</div>
			: <Preloader />
	);
}

export default Users;
