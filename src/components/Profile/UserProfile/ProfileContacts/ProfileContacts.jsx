import s from "./ProfileContacts.module.css";
import React from "react";
import {contactsIcons} from "../../../Common/contacts";

export const ProfileContacts = (props) => {
    return (
        <div className={s.profile__contacts}>
            {props.profile?.contacts && Object.values(props.profile.contacts).some(el => el)
                ? <div>
                    <p>Социальные сети:</p>
                    <ul className={s.contacts}>
                        {Object.keys(props.profile.contacts).map((contact, index) => {
                            if (props.profile.contacts[contact])
                                return (
                                    <li className={s.contacts__item} key={index}>
                                        <a href={props.profile.contacts[contact]}>{contactsIcons[contact]}<p>{contact}</p></a>
                                    </li>
                                );
                        })}
                    </ul>
                </div>
                : <p>No contacts</p>}
        </div>
    );
}