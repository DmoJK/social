const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const id = state.messagesData.length + 1
            return {
                ...state,
                messagesData: [...state.messagesData, { id: id, message: action.message }]
            };
        default:
            return state;
    }
}

export const sendMessage = (message) => ({ type: SEND_MESSAGE, message })

export default messagesReducer;