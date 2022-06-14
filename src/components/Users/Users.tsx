import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/default-user.png'
import s from './Users.module.css'

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {users, currentPage, pageSize, setUsers, setTotalUsersCount} = this.props;
        if (users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    setUsers(response.data.items)
                    setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChange = (pageNumber: number) => {
        const {pageSize, setCurrentPage, setUsers} = this.props
        setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
            })
    }

    render() {
        const {users, pageSize, totalUsersCount, currentPage, toggleFollow} = this.props;

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
                                onClick={() => this.onPageChange(p)}
                            >
                                {`   ${p}   `}
                            </span>
                        )
                    })}
                </div>

                {users.map(u => <div key={u.id} className={s.listedUser}>
                    <span>
                        <div>
                            <img
                                className={s.avatar}
                                src={u.photos.small ? u.photos.small : userPhoto}
                                alt="User avatar"
                            />
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
    }
}