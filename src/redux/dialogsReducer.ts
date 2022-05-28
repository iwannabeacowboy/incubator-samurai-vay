import {v1} from 'uuid';

export type DialogType = {
    id: string,
    name: string
}

export type MessageType = {
    id: string,
    message: string
}

export const initialState = {
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Vlad'}
    ] as DialogType[],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'yo'},
    ] as MessageType[],
    newMessageBody: ''
}

export type DialogsPageType = typeof initialState

type dialogsActionType = updateNewMessageBodyAType | SendMessageAType
export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsActionType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.payload.newBody}
        case 'SEND-MESSAGE':
            const newBody = {
                id: v1(),
                message: state.newMessageBody
            }
            return {...state, messages: [...state.messages, newBody], newMessageBody: ''}
        default:
            return state
    }
}

type updateNewMessageBodyAType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (newBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        payload: {
            newBody
        }
    } as const
}

type SendMessageAType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}