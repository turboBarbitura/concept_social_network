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

    let dialogsData = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Maya'},
        {id: 4, name: 'Dyadya Andrusha'},
        {id: 5, name: 'Gisich'},
        {id: 6, name: 'Baboka'},
    ]

    let messagesData = [
        {id: 1, message: 'hello moto'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'i am fine today'},
        {id: 4, message: 'drrrrrrrrrrr. dont see my base'},
        {id: 5, message: 'bree bree'},
        {id: 6, message: '###'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[1].id} />

                <DialogItem name='Lena' id='3'/>
                <DialogItem name='Dyadya Andrusha' id='4'/>
                <DialogItem name='Gisich' id='5'/>
                <DialogItem name='Baboka' id='6'/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>

        </div>
    );
};

export default Dialogs;