import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, updateNewMessageBody}) => {

    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem
        id={d.id}
        key={d.id}
        name={d.name}
    />)

    const messagesElements = dialogsPage.messages.map(m => <Message
        id={m.id}
        key={m.id}
        message={m.message}
    />)

    const onSendMessageClick = () => {
        if (dialogsPage.newMessageBody.trim()) {
            sendMessage()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder={'Enter your message'}
                            value={dialogsPage.newMessageBody}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};