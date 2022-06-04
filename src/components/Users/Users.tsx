import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/default-user.png'

export const Users: React.FC<UsersPropsType> = ({users, toggleFollow, setUsers}) => {

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
    }

    return (
        <div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
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
};