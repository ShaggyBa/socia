import dialogsData from "../data/messagesData/DialogsData";
import messagesData from "../data/messagesData/MessagesData";

const SEND_MESSAGE_FROM_DIALOG = "SEND-MESSAGE-FROM-DIALOG"
const UPDATE_NEW_MESSAGE_STATE = "UPDATE-NEW-MESSAGE-STATE"


const dialogPage = {
    dialogsData, //Данные о диалогах
    messagesData, //Данные о сообщениях
    values: {
        newMessageState: ""
    }
}
const dialogReducer = (state = dialogPage, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SEND_MESSAGE_FROM_DIALOG:
            return {
					...state, 
					messagesData: [
						...state.messagesData, 
						{id: state.messagesData.length + 1, text: state.values.newMessageState}
					], 
					values: {newMessageState: ""}}
        case UPDATE_NEW_MESSAGE_STATE:
            return {...state, values: {newMessageState: action.value}}
        default:
            return {...state}
    }

}

export default dialogReducer

export const addMessageFromDialogActionCreator = () =>
    ({
        type: SEND_MESSAGE_FROM_DIALOG
    })

export const updateNewMessageStateActionCreator = (value) =>
    ({
        type: UPDATE_NEW_MESSAGE_STATE,
        value: value
    })