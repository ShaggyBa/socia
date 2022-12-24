import React from "react";
import friend from "./Friend.module.css"

const Friend = (props) => {
    return (<div className={friend.itemList}>
            <a href="#">
                <div className={friend.friendImg}>
                    {/*<img src={props.profileImage} alt={"Friend"}/>*/}
                </div>
                <div className={friend.friendName}>{props.name}</div>
            </a>
        </div>
    )
}

export default Friend