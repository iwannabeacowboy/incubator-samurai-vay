import React from 'react';
import {DialogsActionType, DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<DialogsActionType>): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)