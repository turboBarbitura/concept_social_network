import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {


    let postsElements = props.posts.map( p => <Post message= {p.message} /> )

    let newPostElement = React.createRef()


    let addPost = () => {
        props.dispatch(addPostActionCreator())

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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


