import React from 'react'
import style from './work.module.css'


export let Work = (props) => {
    return (
        <div className = {style.work}>
            <div className = {style.icon}></div>
            <div className={style.button}><button>{props.button}</button></div>
            <h3>Name Progect</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}