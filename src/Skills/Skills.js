import React from 'react'
import style from './skills.module.css'


export let Skills = () => {
    return (
        <div className ={style.skills}>
            <div className={style.container}>
                <div className={style.header}>My skills</div>

                <div className={style.content}>

                    <div className = {style.first}>
                        <div className = {style.top}></div>
                        <div className = {style.title}>React</div>
                        <div className = {style.buttom}>Detailed description of skills</div>
                    </div>


                    <div className = {style.first}>
                        <div className = {style.top}></div>
                        <div className = {style.title}>JS</div>
                        <div className = {style.buttom}>Detailed description of skills</div>
                    </div>


                    <div className = {style.first}>
                        <div className = {style.top}></div>
                        <div className = {style.title}>HTML/CSS</div>
                        <div className = {style.buttom}>Detailed description of skills</div>
                    </div>

                </div>
            </div>

        </div>
    );
}