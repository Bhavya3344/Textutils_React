
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes
}from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='rgba(0,0,0,.84) ';
      document.body.style.color ='white';    // by using this we can change text color  
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white ';
      document.body.style.color ='black';
      showAlert("Light mode has been enabled", "success");
      //document.title = 'TextUtils - Light Mode';
    }
  }

  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>
    <Alert alert={alert }/>
    <div className="container my-3">
	<Routes>
		<Route exact path="/about" element={<About/>}></Route>	
		<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyse below"/>}></Route>	
	</Routes>
  </div>
  </BrowserRouter>
    </>
  );
}

export default App;
