import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                Posts go here
                <Post
                    message={'Sup, bro'}
                    liked={15}/>
                <Post
                    message={'How\'re you doing?'}
                    liked={20}/>
            </div>
        </div>
    )
}

export default MyPosts;