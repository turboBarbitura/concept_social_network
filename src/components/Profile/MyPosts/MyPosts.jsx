import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'hello moto'},
        {id: 2, message: 'how are u?'},

    ]

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
                    <Post message= {postData[0].message} />
                    <Post message= {postData[1].message} />
                </div>
            </div>
        </div>
    )
}

export default MyPosts


