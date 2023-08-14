// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {

  const [mode,setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
  <>
    <Navbar title="U/LConvert" AboutText="About" Homepage="Home" mode={mode} toggleMode={toggleMode} /> 
    {/* <Navbar />  */}
    <div className="container">
    <Textform heading="WRITE SOMETHING" mode={mode} />
    </div>
    <About mode={mode}/>
  </>
  );
}

export default App;
