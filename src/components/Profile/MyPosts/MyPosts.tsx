import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: Array<PostType>
    addPostCallback: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, addPostCallback: addPostCallback}) => {

    const postsElements = posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            addPostCallback(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                Posts go here
                {postsElements}
            </div>
        </div>
    )
}