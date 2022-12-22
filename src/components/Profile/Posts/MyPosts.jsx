import React from "react"
import posts from "./MyPosts.module.css"
import Post from "./Post/Post"
import data from "../../../data/PostsData"


const getData =  data.map((post) => {
    return <Post post__username={post.post__username} post__text={post.post__text}
                 post__images={post.post__images} post__likes={post.post__likes}/>
})

const MyPosts = (props) => {
    return (
        <div className={posts.container}>
            <div className={posts.my__posts}>
                My Posts
                <div className={posts.new__posts}>
                    <textarea>New Post</textarea>
                    <button>Add</button>
                    <button>Remove</button>
                </div>
                <div className={posts.posts}>
                    {
                       getData
                    }
                </div>
            </div>
        </div>
    )
}

export default MyPosts