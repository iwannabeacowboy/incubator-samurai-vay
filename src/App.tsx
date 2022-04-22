import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPostCallback: (postMessage: string) => void
}

function App({state, addPostCallback}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs
                        state={state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile
                        state={state.profilePage} addPostCallback={addPostCallback}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
