import state, {subscriber} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallback, updateNewPostText} from './redux/state';

const renderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPostCallback={addPostCallback} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
renderEntireTree()

subscriber(renderEntireTree)