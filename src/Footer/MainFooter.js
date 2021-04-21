import React from 'react';
import s from './MainFooter.module.css'

export const MainFooter = () => {
    return (
        <div className={s.MainFooter}>
            <div className={s.container}>
                <h3 className={s.name} >Dmitry Shastel</h3>
                <div className={s.block}>
                    <div className={s.blocks}></div>
                    <div className={s.blocks}></div>
                    <div className={s.blocks}></div>
                    <div className={s.blocks}></div>
                </div>
                <h4 className={s.string}>@2021 All rights reserved</h4>
            </div>
        </div>
    )
}