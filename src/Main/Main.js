import React from 'react'
import style from './main.module.css'


export let Main = () => {
    return (
        <div className = {style.mainBlock}>
            <div className = {style.container}>
                <div className = {style.text}>
                    <span>Hi there</span>
                    <h2>I am Dmitry Shastel</h2>
                    <p>Frontend developer</p>
                </div>
                    <div className = {style.photo}></div>
            </div>
        </div>
    );
}
