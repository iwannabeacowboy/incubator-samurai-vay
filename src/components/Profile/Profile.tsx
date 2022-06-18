import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';



export const Profile = (profile: ProfileType) => {
    return (
        <div>
            <ProfileInfo {...profile}/>
            <MyPostsContainer/>
        </div>
    )
}