import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {MyPostsPropsType} from './MyPostsContainer';

export const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addPost, updateNewPostText}) => {

    const postsElements = profilePage.posts.map(p => <Post
        id={p.id}
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />);

    const onAddPostClick = () => {
        if (profilePage.newPostText.trim()) {
            addPost()
        }
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={profilePage.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                Posts go here
                {postsElements}
            </div>
        </div>
    )
}