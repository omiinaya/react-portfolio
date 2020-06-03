import React from "react";
import "./style.css";

function About() {
    return (
        <div>
            <h1>.About Me</h1>
            <section>
                <div className="container-about">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <img src={require('./images/omar.jpg')} alt="" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-10">
                            <div className="container-text">
                                <p>Born in the Dominican Republic, grew up in the city of Santo Domingo. There I finished middle-school, started high-school, but ended up moving to the US where I graduated and I'm now pursuing a career in the field of Computer Science.</p>
                                <p>I studied Computer Science at Union University in Jackson, TN. There I became a jack of all trades in the field of technology. I know a bit of everything and what I don't know, I learn. I like to build, maintain and repair computer systems as a hobby and now I'm looking to get into web development to further expand my horizons and possibilities in the field.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-image">
                    <div className="row">
                        <div className="col-12">
                            <img src="./images/lights.jpeg" alt="" />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;