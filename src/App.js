import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link,
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  // const [modeText, setModeText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')

  // }

  // const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)


    const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');

      // setModeText("Disable Dark Mode");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = 'Text Utils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Text Utils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'New Title';
      // }, 1500);

      // modetext = "Enable Dark Mode";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      // document.title = 'Text Utils - Light Mode';
  
    }
  }

  return (
   <>
    {/* <Navbar title="Text Utils" aboutText="About Text Utils"/> */}

   
    <Router>
    <Navbar title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>

    <Routes>
      <Route exact path="/about" element={
        <About mode={mode}/>
      }>
      </Route>
      
      <Route exact path='/' element={
        <TextForm showAlert={showAlert} heading="Try Text Utils - Word Counter - Character Counter, Remove Extra Spaces" mode={mode}/>
        }> 
      </Route>
      
    </Routes>

    </div>
    </Router>

      
    {/* <About/> */}
    

    


   </>
  );
}
