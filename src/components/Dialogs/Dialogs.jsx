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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = 'Misha' id='1' />
                <DialogItem name = 'Maya' id='2' />
                <DialogItem name = 'Lena' id='3' />
                <DialogItem name = 'Dyadya Andrusha' id='4' />
                <DialogItem name = 'Gisich' id='5' />
                <DialogItem name = 'Baboka' id='6' />

            </div>
            <div className={s.messages}>
                <Message message = 'hhih' />
                <Message message = '332323' />
                <Message message = 'rerffsfdfdferef' />

            </div>

        </div>
    );
};

export default Dialogs;