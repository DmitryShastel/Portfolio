import React from 'react'
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./MyWorks/MyWorks";

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Skills/>
        <Works/>
    </div>
  );
}

export default App;
