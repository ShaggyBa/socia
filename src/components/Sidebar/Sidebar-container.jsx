import React from "react"
import Sidebar from "./Sidebar";
import { connect } from "react-redux";


const SidebarContainer = connect(
	state => {
		return {
			state: state.sidebarPage
		}
	},
	dispatch => {
		return {}
	})(Sidebar)

export default SidebarContainer