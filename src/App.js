import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Container from './components/Container';
// import studentInfo,{otherDetails} from './components/export/export.mjs';
import Navbar from './components/Navbar.js';


function App() {
  // const nane = "ohm";
  document.body.style.backgroundColor = '#343a40'
  const [trig, trigHandle] = useState(false);


  return (

    <>
      <Navbar name="ohm" trig={trig} trigHandle={trigHandle} ></Navbar>
      <Container ></Container>
      <div>
        {trig? null :<Alert trig={trig}></Alert>  }
      </div>


    </>


    );
}

export default App;
