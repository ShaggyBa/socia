import React from "react"
import {addMessageFromDialogActionCreator, updateNewMessageStateActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const addMessage = () => {
        props.store.dispatch(addMessageFromDialogActionCreator())
    }

    const updateTextMessage = (value) => {
        props.store.dispatch(updateNewMessageStateActionCreator(value))
    }

    return (
        <Dialogs
            state={props.store.getState().dialogsPage}
            addMessage={addMessage}
            updateTextMessage={updateTextMessage}
        />
    )
}

export default DialogsContainer