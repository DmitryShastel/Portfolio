import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../Common/styles/container.module.css'
import {Skill} from "../Skills/skill/Skill";


export let Skills = () => {
    return (
        <div className = {style.skillsBlock}>
            <div className = {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className = {style.title}>Skills</h2>
                <div className = {style.skills}>
                    <Skill title={"React"} description={"The internet was set on fire (pun intended).."}/>
                    <Skill title={"JS"} description={"The internet was set on fire (pun intended).."}/>
                    <Skill title={"HTML/CSS"} description={"The internet was set on fire (pun intended).."}/>
                </div>
            </div>
        </div>
    );
}