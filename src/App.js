import './App.css';
import Alert from './Components/alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import  {
  BrowserRouter as Router ,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#143D60';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }

  const maroonMode = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#780C28';
    document.body.style.color = 'white';
    showAlert("Maroon Mode Enabled", "success");
  }

  const purpleMode = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#441752';
    document.body.style.color = 'white';
    showAlert("Purple Mode Enabled", "success");
  }
  return (
    <>
        <Router>
          
        <Navbar title="TextUtils" about="About" mode={mode} maroonMode={maroonMode} purpleMode={purpleMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To Analyze : " mode={mode} />}></Route>
            
          </Routes> 
        </div>
        </Router>
    </>
  );
}

export default App;
