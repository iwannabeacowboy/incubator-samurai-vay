import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsType, DialogsPageType} from '../../redux/state';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';

type DialogsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsType> = ({state, dispatch}) => {

    const dialogsElements = state.dialogs.map(d => <DialogItem
        name={d.name}
        id={d.id}
        key={d.id}
    />)

    const messagesElements = state.messages.map(m => <Message
        message={m.message}
        key={m.id}
    />)

    const onSendMessageClick = () => {
        if (state.newMessageBody.trim()) {
            dispatch(sendMessageAC())
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyAC(e.currentTarget.value))
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
                            value={state.newMessageBody}
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