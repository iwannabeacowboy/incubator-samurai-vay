import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {PostType} from '../../../redux/profileReducer';

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, newPostText, updateNewPostText, addPost}) => {

    const postsElements = posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}/>);

    const onAddPostClick = () => {
        if (newPostText.trim()) {
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
                        value={newPostText}
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