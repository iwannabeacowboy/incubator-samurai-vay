import {v1} from 'uuid';

export type MessageType = {
    id?: string,
    message: string
}

export type DialogType = {
    id: string,
    name: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Vlad'}
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Yo'},
    ],
    newMessageBody: ''
}

export type dialogsActionType = updateNewMessageBodyAType | SendMessageAType
export const dialogsReducer = (state = initialState, action: dialogsActionType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newBody
            return state
        case 'SEND-MESSAGE':
            const newBody = {
                id: v1(),
                message: state.newMessageBody
            }
            state.messages.push(newBody)
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

type updateNewMessageBodyAType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (newBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newBody
    } as const
}

type SendMessageAType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}