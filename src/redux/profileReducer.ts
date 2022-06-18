import {v1} from 'uuid';

export type PostType = {
    id: string,
    message: string
    likesCount: number
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    posts: [
        {id: '1', message: 'Sup, bro', likesCount: 12},
        {id: '2', message: 'How\'re you doing?', likesCount: 11}
    ] as PostType[],
    newPostText: '',
    profile: {} as ProfileType
}

export type ProfilePageType = typeof initialState

export type ProfileActionType = UpdateNewPostTextAType | AddPostAType | setUserProfileAType
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
        case 'SET-USER-PROFILE':
            return {...state, profile: action.payload.profile}
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

type setUserProfileAType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}
