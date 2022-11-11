import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "0f06b5ba-321d-4f03-b585-06a627d78d00" }
})

export const usersAPI = {
    getUsers: async (currentPage, pageSize = 5) => {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    unfollow: async (id) => {
        const response = await instance.delete(`follow/${id}`)
        return response.data
    },
    follow: async (id) => {
        const response = await instance.post(`follow/${id}`)
        return response.data
    }
}

export const profileAPI = {
    getProfile: async (id) => {
        const response = await instance.get(`profile/${id}`)
        return response.data
    },
    getStatus: async (id) => {
        const response = await instance.get(`/profile/status/${id}`)
        return response.data
    },
    updateStatus: (status) => {
        return instance.put(`/profile/status`,
            { status: status })
    },
    updatePhoto: (image) => {
        let formData = new FormData()
        formData.append('image', image)
        return instance.put(`/profile/photo`,
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile: (description) => {
        return instance.put(`/profile`, description)
    }
}

export const authAPI = {
    login: (email, password, rememberMe = false, captcha) => {
        return instance.post(`/auth/login`,
            { email, password, rememberMe, captcha }
        )
    },
    logout: () => {
        return instance.delete(`/auth/login`,)
    },
    getYourProfile: async () => {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    getCaptcha: async () => {
        const response = await instance.get(`/security/get-captcha-url`)
        return response.data
    }
}