import React from 'react'
import style from './works.module.css'
import styleContainer from "../Common/styles/container.module.css";
import {Work} from "./Work/Work";


export let MyWorks = () => {
    return (
        <div className = {style.worksBlock}>
            <div className = {`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className = {style.title}>MyWorks</h2>
                <div className = {style.works}>
                    <Work button={"Watch"} description={"The internet was set on fire (pun intended).."}/>
                    <Work button={"Watch"} description={"The internet was set on fire (pun intended).."}/>
                    <Work button={"Watch"} description={"The internet was set on fire (pun intended).."}/>
                </div>
            </div>


        </div>
    );
}