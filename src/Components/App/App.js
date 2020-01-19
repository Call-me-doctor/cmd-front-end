import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {HomeButton} from '../Utils/CustomInputs';

function App() {
  return (
    <>
      <NavigationBar />
      <div className="home-main">
        <div className="home-text">
          <h1>Medical Services Just got Better</h1>
          <h5>Which one are you?</h5>
        </div>
        <div className="home-register-buttons">
          <HomeButton text="Patient"/>
          <HomeButton text="Medical Doctor"/>
        </div>
      </div>
    </>
  );
}

export default App;
