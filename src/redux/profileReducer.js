import postsData from "../data/profileData/Posts/PostsData";
import users from "../data/profileData/UserData";

import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


const initialState = {
    defaultUser: users,
    profile: null,
    status: "",
    postsData,
    values: {
        postState: ""
    }
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = { //Создание нового поста
                id: state.postsData.length + 1,
                post__authorName: "ShaggyBa",
                post__authorImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
                post__text: action.value,
                post__likes: 0,
                post__images: ""
            }

            return {...state, postsData: [newPost, ...state.postsData], values: {postState: ""}}
        case UPDATE_NEW_POST_TEXT:
            return {...state, values: {postState: action.value}}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return {...state}
    }
}

export const addPost = (value = "") =>
    ({
        type: ADD_POST,
        value
    })

export const updateNewPostText = (value) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        value
    })

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
})


export const getUserProfile = (userId) => async (dispatch) => {
    if (userId) {
        const data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const getStatus = (userId) => async (dispatch) => {
    if (userId) {
        const data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data))
    }
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0)
        dispatch(setUserStatus(status))
}

export const updateProfile = (profileFields) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.updateProfile(profileFields)
    if (data.resultCode === 0)
        dispatch(getUserProfile(userId))
    else {
        return Promise.reject()
    }
}

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        console.log("photo upload", data.data.photos)
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export default profileReducer