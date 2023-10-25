import React from "react"
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={s.header}>
			<NavLink to="/profile">Main</NavLink>
			<div className={s.auth}>
				<NavLink to={"/login"}>Login</NavLink>
			</div>
		</header>
	)
}

export default Header