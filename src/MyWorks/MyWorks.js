import React from 'react'
import style from './works.module.css'


export let MyWorks = () => {
    return (
        <div className = {style.works}>

            <div className={style.myWorks}>
                <div className = {style.header}>My works</div>
                <div className = {style.container}>

                    <div className = {style.content}>

                        <div className = {style.first}>
                            <button className = {style.button}>Show</button>
                            <div className = {style.buttom}>
                                <div className={style.discription}>
                                    <h3>Title progect</h3>
                                    <p>Description:</p>
                                </div>
                            </div>
                        </div>


                        <div className = {style.first}>
                            <button className = {style.button}>Show</button>
                            <div className = {style.buttom}>
                                <div className={style.discription}>
                                    <h3>Title progect</h3>
                                    <p>Description:</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}