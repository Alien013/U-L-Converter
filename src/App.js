// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
  <>
  <Router>
    <Navbar title="U/LConvert" AboutText="About" Homepage="Home" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    
    {/* <Navbar />  */}

    <div className="container my-3">
      <Routes>
        <Route exact path='/about' mode={mode} element={<About />}/>
        <Route exact path='/' element={<Textform showAlert={showAlert} heading="Try UL-Converter- Word Counter, Character Counter" mode={mode} />}/>
      </Routes>
    </div>

  </Router>
  </>
  );
}

export default App;
