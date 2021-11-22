import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> )

    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

    let newMessageValue = React.createRef()


    let sendNewMessage = () => {
        let newMessage = newMessageValue.current.value
        alert(newMessage)
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <textarea ref={newMessageValue} className={s.message} name="Your message"  cols="30" rows="3"></textarea>

                <div>
                    <button onClick={sendNewMessage}>Send</button>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;