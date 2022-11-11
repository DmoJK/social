import { createSelector } from 'reselect'

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getUsersCount = (state) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followingInProgress
}

// export const selector = createSelector(getUsers, (users) => {
//     return users.filter(u => true)
// })