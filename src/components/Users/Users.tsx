import React from 'react';
import {UsersPropsType} from './UsersContainer';

export const Users: React.FC<UsersPropsType> = ({users, toggleFollow, setUsers}) => {

    return (
        <div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photoUrl}
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </div>)}
        </div>
    );
};