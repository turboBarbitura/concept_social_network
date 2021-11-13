import React, {useState} from 'react';


const Likes = () => {

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
            <button className='like' onClick={increment}>like</button>
            <p>Dislikes: {dislikes}</p>
            <button className='dislike' onClick={decrement}>dislike</button>
        </div>
    );
};

export default Likes;