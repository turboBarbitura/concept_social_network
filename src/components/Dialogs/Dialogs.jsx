import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Maya'},
        {id: 4, name: 'Dyadya Andrusha'},
        {id: 5, name: 'Gisich'},
        {id: 6, name: 'Baboka'},
    ]

    let messages = [
        {id: 1, message: 'hello moto'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'i am fine today'},
        {id: 4, message: 'drrrrrrrrrrr. dont see my base'},
        {id: 5, message: 'bree bree'},
        {id: 6, message: '###'},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )

    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
};

export default Dialogs;