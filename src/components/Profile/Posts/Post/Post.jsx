import React from "react"
import Posts from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={`${Posts.item} block`}>
			<div className={Posts.user__info}>
				<a href="/"><img src={props.post__authorImage} alt={""} /></a>
				{props.post__authorName}

			</div>
			<div className={Posts.post__text}>{props.post__text}</div>
			<div className={Posts.images}><img src={props.post__images} alt={""} /></div>
			<div className={Posts.likes}>Likes: {props.post__likes}</div>
		</div>
	)
}

export default Post