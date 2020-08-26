import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import EnrollCourse from './Components/EnrollCourse/EnrollCourse';

function App() {
  return (
    <div className="container">
      <Header/>
      <Course/>
    </div>
  );
}

export default App;
