import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<NavLink to="/profile">Main</NavLink>
			<div className={s.auth}>
				{props.isAuth
					? props.name
					: <NavLink to={"/login"}>Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header