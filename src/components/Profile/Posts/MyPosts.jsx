import React, {createRef} from "react"
import posts from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {

    const textAreaValue = props.state.values.postState

    const getData = props.state.postsData.map((post) => {
        return <Post post__authorName={post.post__authorName}
                     post__authorImage={post.post__authorImage}
                     post__text={post.post__text}
                     post__images={post.post__images}
                     post__likes={post.post__likes}/>
    })

    const textAreaRef = createRef()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        props.updateNewPost(textAreaRef.current.value)
    }

    return (
        <div className={posts.container}>
            <div className={posts.my__posts}>
                My Posts
                <div className={posts.new__posts}>
                    <textarea className={posts.btnTextArea}
                              onChange={onPostChange}
                              ref={textAreaRef} value={textAreaValue}/>
                    <button className={posts.btnAdd} onClick={onAddPost}>Add</button>
                </div>
                <div className={posts.posts}>
                    {getData}
                </div>
            </div>
        </div>
    )
}

export default MyPosts