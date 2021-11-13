import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'/>
                Post 1</div>
        </div>
    );
};

export default Post;