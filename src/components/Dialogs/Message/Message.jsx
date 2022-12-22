import React from "react";
import msg from "./Message.module.css"


const Message = (props) => {
    return <div className={msg.message}>{props.text}</div>
}

export default Message