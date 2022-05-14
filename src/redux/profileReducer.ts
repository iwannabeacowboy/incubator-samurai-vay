import {v1} from 'uuid';
import {ActionsType, ProfilePageType} from './state';

export type ProfileReducerType = UpdateNewPostTextAType | AddPostAType
export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        case 'ADD-POST':
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        default:
            return state
    }
}

type UpdateNewPostTextAType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}

type AddPostAType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
