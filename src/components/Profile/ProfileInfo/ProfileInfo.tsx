import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';

const ProfileInfo = (profile: ProfileType) => {

    if (!profile.userId) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1615003162333-d3ff3ce1f0f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWx0cmElMjB3aWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="Wide boi"
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="user avatar"/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;