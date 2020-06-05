import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

function Portfolio() {
    return (
        <div>
        <h1>.Portfolio</h1>
        <section>
          <div className="container-portfolio">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <Link to="https://omiinaya.github.io/Project1/">
                </Link><article className="project"><Link to="https://omiinaya.github.io/Project1/">
                    <h2 className="title">Project 1</h2>
                    <img src={require('./images/project1.png')} height="200px" width="200px" alt="" /></Link>
                </article>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="https://omiinaya.github.io/pwd-gen/">
                </Link><article className="project"><Link to="https://omiinaya.github.io/pwd-gen/">
                    <h2 className="title">Password Generator</h2>
                    <img src={require('./images/pwdgen.png')} height="200px" width="200px" alt="" /></Link>
                </article>
              </div>
              <div className="col-lg-3 col-md-4">
              <Link to="https://omiinaya.github.io/timed-quiz/">
                </Link><article className="project"><Link to="https://omiinaya.github.io/timed-quiz/">
                    <h2 className="title">Timed Quiz</h2>
                    <img src={require('./images/timedquiz.png')} height="200px" width="200px" alt="" /></Link>
                </article>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="https://omiinaya.github.io/day-planner/">
                </Link><article className="project"><Link to="https://omiinaya.github.io/day-planner/">
                    <h2 className="title">Day Planner</h2>
                    <img src={require('./images/dayplanner.png')} height="200px" width="200px" alt="" /></Link>
                </article>
              </div>
              <div>
              </div>
            </div></div></section>
        <br />
        <section>
        </section></div>
    );
}

export default Portfolio;