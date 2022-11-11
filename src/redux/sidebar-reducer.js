let initialState = {
    friendsData: [
        { id: 1, name: 'Anton', img: 'https://i.pinimg.com/originals/c2/e4/01/c2e401c507b9f2a1322d7918f17cdf1e.jpg' },
        { id: 2, name: 'Valia', img: 'https://i.pinimg.com/originals/a8/1c/1c/a81c1c97f302e46e7668efcb1aceaae0.jpg' },
        { id: 3, name: 'Sasha', img: 'https://strizkaman.ru/images/sites/default/files/2020-09/blog-muzhskie-strizhki-iz-seriala-vikingi-2.jpg' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;