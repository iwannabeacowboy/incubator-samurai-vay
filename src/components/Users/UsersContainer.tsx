import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {setUsersAC, toggleFollowAC, UsersActionType, UserType} from '../../redux/usersReducer';

type mapStateToPropsType = {
    users: UserType[]
}

type mapDispatchToPropsType = {
    toggleFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionType>): mapDispatchToPropsType => {
    return {
        toggleFollow: (userID) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)