import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/default-user.png';
import {UserType} from '../../redux/usersReducer';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    toggleFollow: (userID: number) => void
    onPageChange: (pageNumber: number) => void
}

export const Users = ({users, totalUsersCount, currentPage, pageSize, onPageChange, toggleFollow}: UsersPropsType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    // ПЕРЕПИСАТЬ, ДОБАВИТЬ НОРМАЛЬНЫЙ PAGINATION
    const pages = []
    for (let i = currentPage; i <= pagesCount && pages.length < 15; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            key={p}
                            className={currentPage === p ? s.selectedPage : ''}
                            onClick={() => onPageChange(p)}
                        >
                                {`   ${p}   `}
                            </span>
                    )
                })}
            </div>

            {users.map(u => <div key={u.id} className={s.listedUser}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    className={s.avatar}
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                    alt="User avatar"
                                />
                            </NavLink>
                        </div>
                        <div>
                            <button
                                onClick={() => toggleFollow(u.id)}
                            >
                                {u.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                {/*<span>*/}
                {/*    <div>{u.location.city}</div>*/}
                {/*    <div>{u.location.country}</div>*/}
                {/*</span>*/}
            </div>)}
        </div>
    );
};