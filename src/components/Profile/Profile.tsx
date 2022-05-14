import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile:React.FC<ProfilePropsType> = ({state, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={state.posts}
                newPostText={state.newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}