import React from "react"
import { addMessageFromDialogActionCreator, updateNewMessageStateActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { authRedirectComponent } from "../../hoc/authRedirect";
import { compose } from "redux";


class DialogsContainer extends React.Component {

	render() {
		return <Dialogs {...this.props} />
	}
}

export default compose(
	connect(
		(state) => {
			return {
				state: state.dialogsPage,
			}
		},
		(dispatch) => {
			return {
				addMessage: () => dispatch(addMessageFromDialogActionCreator()),
				updateTextMessage: (value) => dispatch(updateNewMessageStateActionCreator(value))
			}
		}),
	authRedirectComponent
)(DialogsContainer)

