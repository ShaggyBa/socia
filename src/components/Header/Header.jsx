import React from "react"
import head from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header className={head.header}><NavLink to="/profile">Main</NavLink></header>
	)
}

export default Header