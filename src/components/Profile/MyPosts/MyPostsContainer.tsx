import React from 'react';
import {addPostAC, ProfileActionType, ProfilePageType, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionType>): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)