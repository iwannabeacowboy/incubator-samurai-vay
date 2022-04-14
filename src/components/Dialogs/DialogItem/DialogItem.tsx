import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialog.module.css';
import {DialogsType} from '../../../redux/state';

export const DialogItem: React.FC<DialogsType> = ({name, id}) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>{name}</NavLink>
        </div>
    )
}
