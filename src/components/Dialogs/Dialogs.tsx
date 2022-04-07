import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css';

type DialogItemType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemType> = ({name, id}) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message:React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Yakov" id="1"/>
                <DialogItem name="Grigor" id="2"/>
                <DialogItem name="Andrew" id="3"/>
                <DialogItem name="Peter" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='How are you?'/>
                <Message message={'What\'s up?'}/>
            </div>
        </div>
    );
};

export default Dialogs;