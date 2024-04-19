import React from "react";
import image from "../assets/woman.png";

function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <h1 className="contact--heading u-margin-bottom-medium">
          <span>contact </span> us
        </h1>
        <div class="contact--container">
            <div className="contact-form">
            <form>
                <p className="u-margin-bottom-small">Send us a message</p>
                <div className="input--group">
                    <input type="text" placeholder="Enter Your Full Name" required />

                    <input type="email" placeholder="example@gmail.com" required />
                </div>


                <input
                type="text"
                placeholder="Type in your Subject Topic"
                required
                />
                <textarea placeholder="Write here......"></textarea>

                <a className="contact-btn" href="#" rel="noreferrer">
                submit
                </a>
            </form>
            </div>
            <div className="contact-image">
            <img
                src={image}
                alt="Contact out maangement for your inquiries and complaint"
            />
            </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
