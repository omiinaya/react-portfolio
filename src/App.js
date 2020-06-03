import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div className="App">
            <Route exact path="/" component={About} />
            <div className="container">
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </div>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
