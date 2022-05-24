import React from 'react';
import {Store} from 'redux';
import {ActionType, RootReducerType, store} from './redux/store';

const StoreContext = React.createContext<Store<RootReducerType, ActionType>>(store)

export default StoreContext