import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light' )
    {
        setMode('dark');
        document.body.style.backgroundColor = '#143D60';
        document.body.style.color = 'white';
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } 
  }  
  return (
      <>
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          {/* <About/> */}
          <TextForm heading="Enter Text To Analyze : " mode={mode}/>
        </div>
      </>
    );
}

export default App;
