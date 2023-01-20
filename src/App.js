import React,{ useState } from 'react';
import './App.css';
// import Alert from './components/Alert';
import Container from './components/Container';
// import studentInfo,{otherDetails} from './components/export/export.mjs';
import Navbar from './components/Navbar.js';
import About from './components/About.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  // const nane = "ohm";
  // document.body.style.backgroundColor = 'white'
  const [trig, trigHandle] = useState(false);


  return (

    <>
    <Router>
        <Navbar name="ohm" trig={trig} trigHandle={trigHandle} ></Navbar>
        <Container ></Container>

      <Routes>

        <Route exact path="/" />
        <Route exact path="about" element={<Container/>}> </Route>
        <Route exact path="/about/:path" 
        element={
        <>
          <Container/>
          <About/>
        </>
        }>
        
        </Route>
      
      </Routes>
    </Router>    


    </>


    );
}

export default App;
