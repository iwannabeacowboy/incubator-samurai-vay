import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                const state = store.getState()
                const sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                const updateNewMessageBody = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }

                return (
                    <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageBody={state.dialogsPage.newMessageBody}
                        sendMessage={sendMessage}
                        updateNewMessageBody={updateNewMessageBody}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
};