import React from 'react';
import s from './Post.module.css';

type messagePropsType = {
    message: string
    liked: number
}

const Post: React.FC<messagePropsType> = ({message, liked}) => {
    return (
        <div className={s.item}>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.f2EVeZD6hcSSnO9zy76cmwHaHa%26pid%3DApi&f=1"
                alt="avatar"/>
            {message}
            <div>
                <span>{liked} likes</span>
            </div>
        </div>
    )
}

export default Post;