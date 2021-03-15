import React from 'react'
import style from './main.module.css'
import styleContainer from './../Common/styles/container.module.css'


export let Main = () => {
    return (
        <div className = {style.mainBlock}>
            <div className = {styleContainer.container}>
                <div className = {style.text}>
                    <span>Hi there</span>
                    <h1>I am Dmitry Shastel</h1>
                    <p>Frontend developer</p>
                </div>
                <div className = {style.photo}>
                </div>
            </div>
        </div>
    );
}
