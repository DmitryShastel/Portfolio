import React from 'react'
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyWorks} from "./MyWorks/MyWorks";
import {RemoteWork} from "./RemoteWork/RemoteWork";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
        </div>
    );
}

export default App;
