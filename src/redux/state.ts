import {v1} from 'uuid';

export type MessagesType = {
    id?: string,
    message: string
}

export type DialogsType = {
    id: string,
    name: string
}

export type PostType = {
    id?: string,
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Sup, bro', likesCount: 12},
            {id: '2', message: 'How\'re you doing?', likesCount: 11}
        ],
        newPostText: ''
    },
    dialogsPage: {
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
    },
    sidebar: {}
}

export const addPostCallback = () => {
    const newPost = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree()
}

let renderEntireTree = () => {
}

export const subscriber = (observer: () => void) => {
    renderEntireTree = observer
}

export default state;

