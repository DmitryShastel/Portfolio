import React from 'react'
import style from './nav.module.css'


export let Nav = () => {
    return (
        <div className ={style.nav}>
            <a href=''>Main</a>
            <a href=''>Skills</a>
            <a href=''>Progects</a>
            <a href=''>Contacts</a>
        </div>
    );
}

