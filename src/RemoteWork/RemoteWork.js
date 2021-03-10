import React from 'react'
import style from './remoteWork.module.css'


export let RemoteWork = () => {
    return (
        <div className = {style.remWork}>
            <div className={style.container}>
                <div className={style.top}>Considering options for remote work</div>
                <div className={style.button}> <button className={style.button2}>Hire me</button></div>
            </div>
        </div>
    );
}