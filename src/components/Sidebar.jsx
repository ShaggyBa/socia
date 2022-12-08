import React from "react"

const Sidebar = () => {
	return (
		<div className={"sidebar"}>
			<nav className={"nav"}>
				<span><a href="#profile" className={"sidebar__link"}>
					Profile
				</a>
				</span>
				<span><a href="#messages" className={"sidebar__link"}>
					Messages
				</a></span>
				<span><a href="#community" className={"sidebar__link"}>
					Community
				</a></span>
				<span><a href="#music" className={"sidebar__link"}>
					Music
				</a></span>
				<span><a href="#videos" className={"sidebar__link"}>
					Videos
				</a></span>
				<span><a href="#settings" className={"sidebar__link"}>
					Settings
				</a></span>
			</nav>
		</div>
	)
}

export default Sidebar