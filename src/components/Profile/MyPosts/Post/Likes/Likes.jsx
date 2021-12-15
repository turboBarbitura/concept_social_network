import React, {useState} from 'react';
import s from './Likes.module.css'


const Likes = (props) => {

    const [likes, setLikes ] = useState(0)
    const [dislikes, setDislikes ] = useState(0)

    function decrement() {
        setDislikes(dislikes +1)
    }

    function increment() {
        setLikes(likes +1)
    }

    return (
        <div>
            <p>Likes: {likes}</p>
            <button className={s.like} onClick={increment}>like</button>
            <p>Dislikes: {dislikes}</p>
            <button className={s.dislike} onClick={decrement}>dislike</button>
        </div>
    );
};

export default Likes;