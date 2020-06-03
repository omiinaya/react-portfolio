import React from "react";
import "./style.css";

function Contact() {
    return (
        <div>
        <h1>.Contact Me</h1>
        <section>
          <div>
            <p className="container-contact-text">If you like what you see and would like to collaborate with me on future projects, leave a message below!</p><p>
            </p></div>
        </section>
        <section>
          <div className="container-form">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">                            
                  <label htmlFor="fname" style={{color: 'white'}}>First Name:</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="Your name." />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname" style={{color: 'white'}}>Last Name:</label>
                </div>
                <div className="col-75">
                  <input type="text" id="lname" name="lastname" placeholder="Your last name." />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="message" style={{color: 'white'}}>Message:</label>
                </div>
                <div className="col-75">
                  <textarea id="message" name="message" placeholder="Write message here." style={{height: '200px'}} defaultValue={""} />
                </div>
              </div>
              <div className="row">
                <input type="submit" defaultValue="submit" />
              </div>
            </form>
          </div>
        </section>
        <br />
      </div>
    );
}

export default Contact;