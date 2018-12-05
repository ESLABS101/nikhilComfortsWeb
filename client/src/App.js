import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-popper';
import {Route,Link} from  'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Hvac from './Components/HVAC/Hvac';
import MEP from './Components/MEP/MEP';
import Energy from './Components/Energy/Energy';
import Interiors from './Components/Interiors/Interiors';
import BMS from './Components/BMS/BMS';
import Retrofiting from './Components/Retrofiting/Retrofiting';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Career from './Components/Career/Career';
import Blog from './Components/Blog/Blog';
class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Route path = "/" exact component = {Home} />
        <Route path = "/Hvac" exact = {true} component = {Hvac} />
        <Route path = "/MEP" exact = {true} component = {MEP} />
        <Route path = "/Energy" exact = {true} component = {Energy} />
        <Route path = "/Interiors" exact = {true} component = {Interiors} />
        <Route path = "/BMS" exact = {true} component = {BMS} />
        <Route path = "/Retrofiting" exact = {true} component = {Retrofiting} />
        <Route path = "/Projects" exact = {true} component = {Projects} />
        <Route path = "/About" exact = {true} component = {About} />
        <Route path = "/Career" exact = {true} component = {Career} />
        <Route path = "/Blog" exact = {true} component = {Blog} />
      <Footer />
      </div>
    );
  }
}

export default App;
