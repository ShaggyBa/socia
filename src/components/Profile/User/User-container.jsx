import React from "react"
import StoreContext from "../../../StoreContext";
import User from "./User";

const UserContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                return (<User state={store.getState().profilePage.users}/>)

            }}
        </StoreContext.Consumer>
    )
}

export default UserContainer