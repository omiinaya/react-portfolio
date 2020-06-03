import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <nav>
                                <div class="logo">
                                    <h2>Omar Minaya</h2>
                                </div>
                                <ul class="nav-links">
                                    <li><a href="index.html">About</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Navbar;