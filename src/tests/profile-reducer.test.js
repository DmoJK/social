import profileReducer, { addPost } from "./profile-reducer";

test('new post length should be incremented', () => {
    let action = addPost('Wow it is test')
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 },
        ]
    };
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(3)
  });