import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";





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

        sidebar: {},

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}







export default store

window.store = store