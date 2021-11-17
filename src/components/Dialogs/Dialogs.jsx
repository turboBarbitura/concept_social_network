import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Misha
                </div>
                <div className={s.dialog}>
                    Maya
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Dyadya Andrusha
                </div>
                <div className={s.dialog}>
                    Gisich
                </div>
                <div className={s.dialog}>
                    Baboka
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