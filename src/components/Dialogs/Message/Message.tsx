import React from 'react';
import s from './../Dialog.module.css';
import {MessagesType} from '../../../redux/state';


export const Message: React.FC<MessagesType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}