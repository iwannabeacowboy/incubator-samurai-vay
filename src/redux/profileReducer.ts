import {v1} from 'uuid';

export type PostType = {
    id: string,
    message: string
    likesCount: number
}

const initialState = {
    posts: [
        {id: '1', message: 'Sup, bro', likesCount: 12},
        {id: '2', message: 'How\'re you doing?', likesCount: 11}
    ] as PostType[],
    newPostText: ''
}

export type ProfilePageType = typeof initialState

type ProfileActionType = UpdateNewPostTextAType | AddPostAType
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.payload.newText}
        case 'ADD-POST':
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        default:
            return state
    }
}

type UpdateNewPostTextAType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
        }
    } as const
}

type AddPostAType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
