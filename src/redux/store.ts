import {combineReducers, createStore} from 'redux';
import {dialogsActionType, dialogsReducer} from './dialogsReducer';
import {ProfileActionType, profileReducer} from './profileReducer';

export type ActionType = dialogsActionType | ProfileActionType

export type RootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

export const store = createStore(rootReducer)