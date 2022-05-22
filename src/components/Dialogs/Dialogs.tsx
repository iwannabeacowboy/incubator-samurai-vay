import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogType, MessageType} from '../../redux/dialogsReducer';

type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs: React.FC<DialogsType> = ({
                                                   dialogs,
                                                   messages,
                                                   newMessageBody,
                                                   sendMessage,
                                                   updateNewMessageBody
                                               }) => {

    const dialogsElements = dialogs.map(d => <DialogItem
        name={d.name}
        id={d.id}
        key={d.id}
    />)

    const messagesElements = messages.map(m => <Message
        message={m.message}
        key={m.id}
    />)

    const onSendMessageClick = () => {
        if (newMessageBody.trim()) {
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
                            value={newMessageBody}
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