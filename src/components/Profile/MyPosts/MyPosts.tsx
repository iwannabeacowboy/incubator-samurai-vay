import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/state';

type MyPostsType = {
    posts: Array<PostsType>
}

export const MyPosts:React.FC<MyPostsType> = ({posts}) => {

    const postsElements = posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                Posts go here
                {postsElements}
            </div>
        </div>
    )
}