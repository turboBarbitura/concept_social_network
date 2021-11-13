import React from 'react';
import s from "./Post.module.css";
import Likes from "./Likes/Likes";

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'/>
                {props.message}</div>
                <Likes/>
        </div>
    );
};

export default Post;