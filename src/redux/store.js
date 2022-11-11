import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        sidebar: {
            friendsData: [
                { id: 1, name: 'Anton', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
                { id: 2, name: 'Valia', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
                { id: 3, name: 'Sasha', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' }
            ]
        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
            ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
            messagesData: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Wow, who are you?' },
                { id: 4, message: 'Is it you?' },
                { id: 5, message: 'CS GO!!!' },
            ],
            dialogsData: [
                { id: 1, name: 'Dima', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
                { id: 2, name: 'Valera', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
                { id: 3, name: 'Tima', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
                { id: 4, name: 'Vadim', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
                { id: 5, name: 'Kolyan', img: 'https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg' },
            ],
            newMessageText: ''
        }
    },
    _subscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._subscriber(this._state);
    }
};

window.store = store;

export default store;