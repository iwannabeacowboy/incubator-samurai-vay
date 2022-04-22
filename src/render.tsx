import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallback, RootStateType} from './redux/state';

export const renderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state} addPostCallback={addPostCallback}/>,
        document.getElementById('root')
    );
}