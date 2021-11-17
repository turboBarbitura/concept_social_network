import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Maya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Lena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Dyadya Andrusha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Gisich</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Baboka</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>hi hi</div>
                <div className={s.message}>how are u?</div>
            </div>

        </div>
    );
};

export default Dialogs;