import React from "react";
import s from "./ProfileContent.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {ProfileContacts} from "../ProfileContacts/ProfileContacts";

export const ProfileContent = (props) => {

    return (
        <div className={s.profile__content}>
            <div className={s.profile__username}>{props.profile?.fullName || "no name"}</div>
            <div className={s.profile__status}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.profile__info}>
                {props.profile?.aboutMe || "No description"}
                <div className={s["profile__info--job"]}>
                    <p>Looking for a job: {props.profile?.lookingForAJob ? "Yes" : "No"}</p>
                    {props.profile?.lookingForAJobDescription ? <p>Job description: {props.profile?.lookingForAJobDescription}</p> : ""}
                </div>
            </div>
            <ProfileContacts profile={props.profile} />
        </div>
    );
}