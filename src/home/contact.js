import React from "react";

const Contact = () => {
  return (
    <div className="container mt-10 mb-10">
      <div className="t-center">
        <div className="mb-5">
          <h3> Contact Us</h3>
          <p>
            {" "}
            Questions, get a quote, special needs, or just say hi. We would love to hear from you!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
            <input type="text" placeholder="Your Email" className="form-control mb-3" /> 
            <textarea col="10" row="200" className="form-control mb-3" placeholder="Your Message"/>
            <div className="t-center mb-5">
                <button type="button" className="sendmsg">
                    SEND MESSAGE
                </button>
            </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Contact;
