import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialog.module.css';
import {DialogType} from '../../../redux/dialogsReducer';

export const DialogItem: React.FC<DialogType> = ({name, id}) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>{name}</NavLink>
        </div>
    )
}
