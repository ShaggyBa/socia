import React from "react"
import { addMessageFromDialogActionCreator, updateNewMessageStateActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const DialogsContainer = connect(
	(state) => {
		return {
			state: state.dialogsPage
		}
	},
	(dispatch) => {
		return {
			addMessage: () => dispatch(addMessageFromDialogActionCreator()),
			updateTextMessage: (value) => dispatch(updateNewMessageStateActionCreator(value))
		}
	})(Dialogs)

export default DialogsContainer