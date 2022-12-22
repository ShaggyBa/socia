import React from "react"
import Posts from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={Posts.item}>
            <div className={Posts.user__name}>{props.post__username}</div>
            <div className={Posts.user__text}>{props.post__text}</div>
            <div className={Posts.images}><img src={props.post__images}/></div>
            <div className={Posts.likes}>Likes: {props.post__likes}</div>
        </div>
    )
}

export default Post