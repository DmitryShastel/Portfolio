import React from 'react'
import style from './header.module.css'
import {Nav} from "../Nav/Nav";


export let Header = () => {
    return (
        <div className ={style.header}>
            <Nav/>
        </div>
    );
}

