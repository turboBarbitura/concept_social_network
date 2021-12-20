const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state

        default:
            return state

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogsReducer