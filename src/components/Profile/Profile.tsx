import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
    addPostCallback: (postMessage: string) => void
}

export const Profile:React.FC<ProfilePropsType> = ({state, addPostCallback}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPostCallback={addPostCallback}/>
        </div>
    )
}