import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (alertType, alertText) => {
    setAlert({
      alertType: alertType,
      alertText: alertText
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("success", "Dark Mode Enabled");
    }
    else {
      setMode('light');
      showAlert("primary", "Light Mode Enabled");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Formater" />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;  


