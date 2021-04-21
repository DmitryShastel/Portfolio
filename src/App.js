import React from 'react'
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {RemoteWork} from "./RemoteWork/RemoteWork";
import {Contacts} from "./Contacts/Contacts";
import {Skills} from "./Skills/Skills";
import {MyWorks} from "./MyWorks/MyWorks";
import {MainFooter} from "./Footer/MainFooter";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
            <Contacts/>
            <MainFooter/>
        </div>
    );
}

export default App;
