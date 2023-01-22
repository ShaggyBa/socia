import React, {createRef} from "react"
import msg from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageFromDialogActionCreator, updateNewMessageStateActionCreator} from "../../redux/dialogReducer";


const Dialogs = (props) => {
    const getDialogs = props.data.dialogsData.map((dialog) => {
        return <Dialog id={dialog.id} name={dialog.name}/>
    })

    const getMessages = props.data.messagesData.map((message) => {
        return <Message text={message.text}/>
    })

    const textareaRef = createRef()

    const addMessage = () => {
        props.dispatch(addMessageFromDialogActionCreator())
    }

    const updateTextMessage = () => {
        props.dispatch(updateNewMessageStateActionCreator(textareaRef.current.value))
    }

    return (
        <div className={msg.dialogs}>
            <div className={msg.dialogs__items}>
                {getDialogs}
            </div>
            <div className={msg.dialog}>
                <div className={msg.dialog__messages}>
                    {getMessages}
                </div>
                <textarea
                    placeholder={"Напишите сообщение..."}
                    onChange={updateTextMessage}
                    value={props.values.newMessageState}
                    ref={textareaRef}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs