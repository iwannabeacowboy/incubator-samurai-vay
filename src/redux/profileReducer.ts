import {v1} from 'uuid';

export type PostType = {
    id?: string,
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Sup, bro', likesCount: 12},
        {id: '2', message: 'How\'re you doing?', likesCount: 11}
    ],
    newPostText: ''
}

export type ProfileActionType = UpdateNewPostTextAType | AddPostAType
export const profileReducer = (state = initialState, action: ProfileActionType) => {
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
