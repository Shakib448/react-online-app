import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';

function App(props) {
  return (
    <div className="container">
      <Header/>
      <Course/>
    </div>
  );
}

export default App;
