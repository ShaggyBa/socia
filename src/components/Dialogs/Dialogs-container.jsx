import React from "react"
import {addMessageFromDialogActionCreator, updateNewMessageStateActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                const addMessage = () => {
                    store.dispatch(addMessageFromDialogActionCreator())
                }

                const updateTextMessage = (value) => {
                    store.dispatch(updateNewMessageStateActionCreator(value))
                }

                return (
                    <Dialogs
                        state={store.getState().dialogsPage}
                        addMessage={addMessage}
                        updateTextMessage={updateTextMessage}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer