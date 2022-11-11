import { authAPI } from "../api/api"
import { catchingErrors } from '../utilities/CatchErrors/catchingError'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            };
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha })

export const getCaptcha = () => async (dispatch) => {
    const response = await authAPI.getCaptcha()
    if (response.url) {
        const captcha = response.url
        dispatch(setCaptcha(captcha))
    }
}

export const getYourProfile = () => async (dispatch) => {
    try {
        let response = await authAPI.getYourProfile()
        if (response.resultCode === 0) {
            let { id, email, login } = response.data
            dispatch(setUserData(id, email, login, true))
        }
    } catch (error) {catchingErrors(error)}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getYourProfile())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptcha())
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }

}

export default authReducer