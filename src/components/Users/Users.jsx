import React from "react";
import s from "./Users.module.css"

export const Users = ({ users, totalUsersCount, pageSize, currentPage, unfollow, follow, onChangePage }) => {
	let pageCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return (
		<div className={s.users}>
			{users.map((user, index) => (
				<div key={index} className={`${s.users__item} block`}>
					<div className={s.users__name}>
						<p>{user.name}</p>
						<img src={user.photos.small || "https://placehold.co/150x150"} alt="изображение профиля" />
					</div>
					<div className={s.users__info}>
						<p>Status: <i>{user.status || `Hi, I'm ${user.name}`}</i></p>
						< p >
							Location: {"user.location.city"}, {"user.location.country"}
						</p >
						<button className="btn" onClick={() => (user.isFollowed ? unfollow(user.id) : follow(user.id))}>
							{user.isFollowed ? "Follow" : "Unfollow"}
						</button>
					</div >
				</div >
			))
			}

			<div className={s.pagination}>
				{pageCount && (
					pages.map(page => <span key={page}
						onClick={() => onChangePage(page)}
						className={currentPage === page ? s.selectedPage : ""}>{page}</span>)
				)}
			</div>
		</div >
	);
}

export default Users;


// export const Users = (props) => {

// 	const onLoadUsers = () => {
// 		if (!props.users.length) {
// 			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
// 				props.setUsers(response.data.items)
// 			})
// 		}
// 	}


// 	return (
// 		<div className={s.users}>
// 			{!props.users.length
// 				? <div><button className="btn" onClick={onLoadUsers}>Load users</button></div>
// 				: props.users.map((user, index) => (
// 					<div key={index} className={`${s.users__item} block`}>

// 						<div className={s.users__name}>
// 							<p>{user.name}</p>
// 							<img src={user.photos.small || "https://placehold.co/150x150"} alt="изображение профиля" />
// 						</div>

// 						<div className={s.users__info}>
// 							<p>Status: <i>{user.status || `Hi, I'm ${user.name}`}</i></p>
// 							<p>Location: {"user.location.city"},
// 								{"user.location.country"}
// 							</p>
// 							<button className="btn" onClick={() => user.isFollowed ? props.unfollow(user.id) : props.follow(user.id)}>
// 								{user.isFollowed ? "Follow" : "Unfollow"}
// 							</button>
// 						</div>
// 					</div>))
// 			}
// 		</div >
// 	)
// }
