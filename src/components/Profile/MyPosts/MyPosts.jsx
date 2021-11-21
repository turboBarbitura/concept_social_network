import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hello moto'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'wtf?'},

    ]

    let postsElements = posts.map( p => <Post message= {p.message} /> )

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
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts


