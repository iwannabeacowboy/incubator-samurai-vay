import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {ActionsType, PostType} from '../../../redux/state';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, newPostText, dispatch}) => {

    const postsElements = posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}/>);

    const onAddPostClick = () => {
        if (newPostText.trim()) {
            dispatch(addPostAC())
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
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