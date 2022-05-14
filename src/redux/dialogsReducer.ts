import {ActionsType, DialogsPageType} from './state';
import {v1} from 'uuid';

export type dialogsReducerType = updateNewMessageBodyAType | SendMessageAType
export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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