import * as yup from 'yup'

export const profileValidation = yup.object().shape({
    fullName: yup.string().typeError('It must be string').required('This field is required'),
    aboutMe: yup.string().typeError('It must be string').required('This field is required'),
    contacts: yup.object().shape({
        facebook: yup.string().typeError().url(),
        website: yup.string().typeError().url(),
        vk: yup.string().typeError().url(),
        twitter: yup.string().typeError().url(),
        instagram: yup.string().typeError().url(),
        youtube: yup.string().typeError().url(),
        github: yup.string().typeError().url(),
        mainLink: yup.string().typeError().url(),
    })
})

export const myPostsValidation = yup.object().shape({
    addPost: yup.string().max(300)
})

export const dialogsValidation = yup.object().shape({
    message: yup.string().max(150)
})

export const loginValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    // captcha: yup.string().required()
})