import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div className={s.postsBlock}>
            New post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <div><h3>My posts</h3></div>
                <div className={s.posts}>
                    <Post message='hi'/>
                    <Post message='yo'/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts


