import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import './scss/Glitch.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Home from './Home'
import Header from './Header'
import About from './About'

import InputForm from './InputForm'
import AboutUs from './About'

//Combining the router with this app to control end points 
class App extends Component{
  
    render(){
    return(
      <Router>
        <Container>
          <Header />  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />  
        </Container>        
      </Router>
      
    )
  }

}

export default App;

