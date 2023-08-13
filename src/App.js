// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {

  return (
  <>
    <Navbar title="U/LConvert" AboutText="About" Homepage="Home"/> 
    {/* <Navbar />  */}
    <div className="container">
    <Textform heading="WRITE SOMETHING " />
    </div>
    <About />
  </>
  );
}

export default App;
