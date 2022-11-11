import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const id = state.postsData.length + 1
            return {
                ...state,
                postsData: [...state.postsData, { id: id, message: action.newPost, likesCount: 0 }]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} 
            }
        default:
            return state;
    }
}

export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const updatePhotoSuccess = (photos) => ({ type: UPDATE_PHOTO_SUCCESS, photos })

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response))
}
export const updateStatus = (status) => async (dispatch, getState) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(getStatus(getState().auth.id))
    }
}
export const updatePhoto = (photos) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(updatePhotoSuccess(response.data.data.photos))
    }
}
export const updateProfile = (description) => async (dispatch, getState) => {
    let response = await profileAPI.updateProfile(description)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(getState().auth.id))
    }
}

export default profileReducer;