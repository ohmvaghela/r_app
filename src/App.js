import React,{ useState } from 'react';
import './App.css';
// import Alert from './components/Alert';
import Container from './components/Container';
// import studentInfo,{otherDetails} from './components/export/export.mjs';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Box from './components/Box';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cards from './components/Cards';
import Home from './components/Home';



function App() {
  // const nane = "ohm";
  // document.body.style.backgroundColor = 'white'
  const [trig, trigHandle] = useState(false);

  const removeColors = () =>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
  }

  const colorChange = (color)=>{
    console.log(color);
    removeColors();
    document.body.classList.add("bg-"+color);
  }
  return (

    <>
    <Router>
        <Navbar name="ohm" trig={trig} trigHandle={trigHandle} colorChange={colorChange} ></Navbar>
        <Container ></Container>
        
        <Cards></Cards>
        
      <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<Container/>}> </Route>
        <Route exact path="/about/:path" element={<> <Container/> <About/> </> }> </Route> 
      
      </Routes>
    
    </Router>    


    </>


    );
}

export default App;
