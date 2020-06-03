import React from "react";
import "./style.css";

function Portfolio() {
    return (
        <div>
        <h1>.Portfolio</h1>
        <section>
          <div className="container-portfolio">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <a href="https://omiinaya.github.io/Project1/" target="_blank">
                </a><article className="project"><a href="https://omiinaya.github.io/Project1/" target="_blank">
                    <h2 className="title">Project 1</h2>
                    <img src={require('./images/project1.png')} height="200px" width="200px" alt="" /></a>
                </article>
              </div>
              <div className="col-lg-3 col-md-4">
                <a href="https://omiinaya.github.io/pwd-gen/" target="_blank">
                </a><article className="project"><a href="https://omiinaya.github.io/pwd-gen/" target="_blank">
                    <h2 className="title">Password Generator</h2>
                    <img src={require('./images/pwdgen.png')} height="200px" width="200px" alt="" /></a>
                </article>
              </div>
              <div className="col-lg-3 col-md-4">
                <a href="https://omiinaya.github.io/timed-quiz/" target="_blank">
                </a><article className="project"><a href="https://omiinaya.github.io/timed-quiz/" target="_blank">
                    <h2 className="title">Timed Quiz</h2>
                    <img src={require('./images/timedquiz.png')} height="200px" width="200px" alt="" /></a>
                </article>
              </div>
              <div className="col-lg-3 col-md-4">
                <a href="https://omiinaya.github.io/day-planner" target="_blank">
                </a><article className="project"><a href="https://omiinaya.github.io/day-planner" target="_blank">
                    <h2 className="title">Day Planner</h2>
                    <img src={require('./images/dayplanner.png')} height="200px" width="200px" alt="" /></a>
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