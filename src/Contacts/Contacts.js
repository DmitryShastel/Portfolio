import React from 'react'
import style from './contacts.module.css'


export let Contacts = () => {
    return (
        <div className = {style.contacts}>
            <div className = {style.container}>
                <div className={style.links}>
                    <div className = {style.contactLinks}>Contacts</div>
                </div>

                <div className = {style.menu}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </div>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
}