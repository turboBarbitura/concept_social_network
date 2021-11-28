import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello moto'},
            {id: 2, message: 'how are u?'},
            {id: 3, message: 'wtf?'},
            {id: 4, message: 'wtf man?'},

        ],
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

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,

    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)

}

export default state