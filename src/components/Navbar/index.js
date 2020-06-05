import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <nav>
                                <div class="logo">
                                    <h2>Omar Minaya</h2>
                                </div>
                                <ul class="nav-links">
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
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