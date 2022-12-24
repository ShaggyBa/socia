import React from "react"
import Posts from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={Posts.item}>
            <div className={Posts.user__info}>
                <img src={props.post__authorImage} alt={""}/>
                {props.post__authorName}

            </div>
            <div className={Posts.post__text}>{props.post__text}</div>
            <div className={Posts.images}><img src={props.post__images} alt={""}/></div>
            <div className={Posts.likes}>Likes: {props.post__likes}</div>
        </div>
    )
}

export default Post