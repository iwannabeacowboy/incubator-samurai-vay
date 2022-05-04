import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile:React.FC<ProfilePropsType> = ({state, addPostCallback, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={state.posts}
                newPostText={state.newPostText}
                addPostCallback={addPostCallback}
                updateNewPostText={updateNewPostText}
            />
        </div>
    )
}