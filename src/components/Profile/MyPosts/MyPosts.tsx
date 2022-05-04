import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, newPostText, addPostCallback, updateNewPostText}) => {

    const postsElements = posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}/>);

    const addPost = () => {
        if (newPostText.trim()) {
            addPostCallback()
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={onChangeHandler}
                    />
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