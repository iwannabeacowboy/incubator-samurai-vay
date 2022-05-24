import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import StoreContext from '../../../StoreContext';

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                    const state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    };
                    const updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            updateNewPostText={updateNewPostText}
                            addPost={addPost}
                        />
                    )
                }}
        </StoreContext.Consumer>
    )
}