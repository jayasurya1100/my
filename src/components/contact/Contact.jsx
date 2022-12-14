import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">t.jayasurya2001b.com@gmail.com</span>

              <a href="" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">What's App</h3>
              <span className="contact__card-data">+91 9840500620</span>

              <a href="" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">ayrus.__</span>

              <a href="" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
