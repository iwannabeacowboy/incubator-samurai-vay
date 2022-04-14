import React from 'react';
import s from './Dialog.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsType = {
    state: DialogsPageType
}
export const Dialogs: React.FC<DialogsType> = ({state}) => {

    const dialogsElements = state.dialogs.map(d => <DialogItem
        name={d.name}
        id={d.id}
        key={d.id}/>)

    const messagesElements = state.messages.map(m => <Message
        message={m.message}
        key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};