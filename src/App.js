import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./profile.jpg')} className="App-logo" alt="logo" />
        <p>
          I am a student at UC Berkeley pursuing Electrical Engineering and Computer Science and Business Administration
        </p>
      </header>
      <body>       
        <About/>
        <Work/>
        <Resume/>
      </body>
    </div>
  );
}

export default App;
