import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.state.map( p => <Post message= {p.message} /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            New post
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add Post</button>
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


