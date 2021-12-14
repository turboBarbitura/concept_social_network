const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello moto'},
                {id: 2, message: 'how are u?'},
                {id: 3, message: 'wtf?'},
                {id: 4, message: 'wtf man?'},

            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Lena'},
                {id: 3, name: 'Maya'},
                {id: 4, name: 'Dyadya Andrusha'},
                {id: 5, name: 'Gisich'},
                {id: 6, name: 'Baboka'},
            ],
            messages: [
                {id: 1, message: 'hello moto'},
                {id: 2, message: 'how are u?'},
                {id: 3, message: 'i am fine today'},
                {id: 4, message: 'drrrrrrrrrrr. dont see my base'},
                {id: 5, message: 'bree bree'},
                {id: 6, message: '###'},
            ],
            newMessageBody: ''
        },

    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },

    subscribe( observer ) {
        this._callSubscriber = observer //observer - паттерн наблюдатель
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})



export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store

window.store = store