import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-primary custom-upper-navbar">
    <a className="navbar-brand" href="#">Nikhil Comforts</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button> 
    <div className="collapse navbar-collapse custom-below-navbar" id="navbar-collapse">
        <ul className="nav navbar-nav ml-auto">
            <Link to="/"><li className="nav-item active"> <a className="nav-link" href="">Home</a>
            </li></Link>
            <li className="nav-item nav-link">
            <Link to="/About">About</Link>
            </li>
            {/* <li className="nav-item nav-link"> <Link to="/#portfolio">Portfolio</Link>
            </li> */}
           <li className="nav-item nav-link">
           <Link to ="/Projects"> Projects</Link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item custom-a-color" href="#"><Link to ="/HVAC">HVAC</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/MEP">MEP</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Retrofiting">Retrofiting</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Interiors">Interiors</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/BMS">BMS</Link></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><Link to ="/Energy">Energy</Link></a>
                </div>
            </li>
            {/* <li className="nav-item"> <a className="nav-link" href="#price">Prices</a>
            </li> */}
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Career">Career</Link></a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Blog">Blog</Link></a>
            </li>
            {/* <li className="nav-item">
             <a className="nav-link" href="/#contact">Contact</a>
            </li> */}
            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li> */}
        </ul>
    </div>
</nav>
					{/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container-fluid">
            <div className="row">
              <div className="">
              <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="nav navbar-nav mr-auto mt-2 mt-lg-0 pull-lg-right">
      <li className="nav-item active">
        <a className="nav-link smooth-scroll" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#service">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#price">Price</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
              </div>
            </div>
          </div>
</nav> */}
			
	
        
        
      </div>
    )
  }
}

export default Navbar
