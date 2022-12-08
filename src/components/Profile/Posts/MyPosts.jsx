import React from "react"
import Posts from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
	return (
		<div className={Posts.container}>
			<div className={Posts.my__posts}>
				My Posts
				<div className={Posts.new__posts}>
					<textarea>New Post</textarea>
					<button>Add</button>
					<button>Remove</button>
				</div>
				<div className={Posts.posts}>
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	)
}

export default MyPosts