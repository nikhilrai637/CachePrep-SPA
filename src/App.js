import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
 
import Question from './components/Question';
import './App.css';
import CachePrep from './components/CachePrep';

function App() {
  return (
    <div>

      <CachePrep className = "jumbotron"/> 
    <div className = "container">
    <div className="card">
      <Question/>
      <img src = {logo} height = {100}  width = {100}/> 
      <Form/>
       
    </div>
    </div>

    </div> 

  );
}

export default App;
