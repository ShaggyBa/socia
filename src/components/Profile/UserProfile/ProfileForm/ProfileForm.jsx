import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

import s from "./ProfileForm.module.css";

const EditProfileSchema = Yup.object().shape({
    lookingForAJob: Yup.boolean(),
    lookingForAJobDescription: Yup.string().when('lookingForAJob', (lookingForAJob, schema) => {
        return !lookingForAJob ? schema.required('Required') : schema;
    }),
    profileDescription: Yup.string(),
    instagram: Yup.string().matches(
        /^(https?:\/\/)?(www\.)?instagram.com\/[a-zA-Z0-9_]+$/,
        'Invalid Instagram URL'
    ),
    github: Yup.string().matches(
        /^(https?:\/\/)?(www\.)?t.me\/[a-zA-Z0-9_]+$/,
        'Invalid Github URL'
    ),
    vk: Yup.string().matches(
        /^(https?:\/\/)?(www\.)?vk.com\/[a-zA-Z0-9_]+$/,
        'Invalid VK URL'
    ),
    fullName: Yup.string().required('Required'),
    aboutMe: Yup.string().required('Required'),
});

export const ProfileForm = (props) => {
    const profileProps = props.profile
    return (
        <Formik
            initialValues={{
                fullName: profileProps.fullName || '',
                aboutMe: profileProps.aboutMe || '',
                lookingForAJob: profileProps.lookingForAJob || false,
                lookingForAJobDescription: profileProps.lookingForAJobDescription || '',
                profileDescription: profileProps.profileDescription || '',
                contacts: Object.fromEntries(
                    Object.entries(profileProps.contacts).map(([key, value]) => [key, value ? value : ''])
                ),
            }}
            validationSchema={EditProfileSchema}
            onSubmit={(values, submitProps) => {
                props.updateProfile(values).then(() => {
                    props.onSetEditMode();
                })
            }}
            onReset={() => {
                props.onSetEditMode();
            }}
        >
            {({values, errors, touched}) => (
                <Form className={s.form}>
                    <div>
                        <Field type="text" id="fullName" name="fullName"/>
                        <label htmlFor="fullName">Full Name</label>
                        <ErrorMessage name="fullName" component="div"/>
                    </div>
                    <div>
                        <Field type="text" id="aboutMe" name="aboutMe"/>
                        <label htmlFor="aboutMe">About Me</label>
                        <ErrorMessage name="aboutMe" component="div"/>
                    </div>
                    <div>
                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
                        <label htmlFor="lookingForAJob">Looking for a job</label>
                    </div>
                    {values.lookingForAJob && (
                        <div>
                            <Field type="text" id="lookingForAJobDescription" name="lookingForAJobDescription"/>
                            <label htmlFor="lookingForAJobDescription">Job Description</label>
                            <ErrorMessage name="lookingForAJobDescription" component="div"/>
                        </div>
                    )}
                    <div>
                        <Field type="text" id="profileDescription" name="profileDescription"/>
                        <label htmlFor="profileDescription">Profile Description</label>
                        <ErrorMessage name="profileDescription" component="div"/>
                    </div>
                    {Object.keys(profileProps.contacts).map((contact, index) => {
                        return (
                            <div key={index}>
                                <Field type="text" id={contact} name={`contacts[${contact}]`}/>
                                <label htmlFor={contact}>{contact}</label>
                                <ErrorMessage name={`contacts[${contact}]`} component="div"/>
                            </div>
                        );
                    })}
                    <div>
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn" type="reset">Cancel</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}