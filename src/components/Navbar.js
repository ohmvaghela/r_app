import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar() {

    // const HandleClick = ()=>
    // prop.trigHandle(!prop.trig)
    return (
    

      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          {/* <Link to={`/about`}>Your Name</Link> */}
          <Link className="navbar-brand text-light" to="/">name0</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-2 ">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="about">about</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li><Link className="dropdown-item text-light" to="/">Action</Link></li>
                  <li><Link className="dropdown-item text-light" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider text-light"/></li>
                  <li><Link className="dropdown-item text-light " to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>

            {/* <div className='p-3 bg-warning mx-2'  onClick={()=>{prop.colorChange('warning')}}    style={{width:'40px', height:'40px'}}></div>
            <div className='p-3 bg-primary mx-2'  onClick={()=>{prop.colorChange('primary')}}    style={{width:'40px', height:'40px'}}></div>
            <div className='p-3 bg-dark mx-2'     onClick={()=>{prop.colorChange('dark')}}       style={{width:'40px', height:'40px'}}></div>
            <div className='p-3 bg-secondary mx-2'onClick={()=>{prop.colorChange('secondary')}}  style={{width:'40px', height:'40px'}}></div> */}

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder='21' aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>



          </div>
        </div>
      </nav>

    
    );
  }

  // Navbar.prototype = {
  //   name : PropTypes.string.isRequired,
  //   roll : PropTypes.number.isRequired
  // }
  // Navbar.defaultProps = {
  //   name : "OhmDefault",
  //   roll : 12
  // }