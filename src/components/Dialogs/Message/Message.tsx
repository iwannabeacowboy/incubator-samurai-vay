import React from 'react';
import s from './../Dialog.module.css';
import {MessageType} from '../../../redux/dialogsReducer';


export const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}