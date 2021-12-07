import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts.map( p => <Post message= {p.message} /> )

    let newPostElement = React.createRef()


    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' })

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
    }



    return (
        <div className={s.postsBlock}>
            New post
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Whats new?'/>
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


