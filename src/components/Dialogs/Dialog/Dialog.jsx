import React from "react";
import msg from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={msg.person}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog