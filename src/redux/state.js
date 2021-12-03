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
        },

    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)

    },
    subscribe( observer ) {
        this._callSubscriber = observer //observer - паттерн наблюдатель
    },
}

export default store

window.store = store