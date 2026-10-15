import React, { useState } from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import "./Contact.css";

// Añade aquí las URL de los perfiles cuando estén disponibles.
const socialLinks = [
  { name: "Facebook", url: "", icon: FaFacebook },
  { name: "YouTube", url: "", icon: FaYoutube },
];

export const Contact = () => {
  /* Set form state where data will be stored */
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  // e.target is the field to be edited
  const handleChange = (e) => {
    const {name, value} = e.target; // Extract the field and value --> email, alex@alex.com
    setFormData({...formData, [name]: value}); // Update the value
    // ...formData gets the current value of form data and updates field [name] and puts the 'value'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact__header">
          <span className="contact__subtitle">Contact us</span>
          <h2 className="contact__title">Let's talk</h2>
          <p className="contact__paragraph">
            We are here for any questions, prayer, or simply to get to know you
            better.
          </p>
        </div>
        <div className="contact__content">
          <div className="contact__info__section">
            <div className="contact__info">
              {/* icon*/}
              <div className="info__icon">
                <LuPhone />
              </div>
              <div className="info__content">
                <h3>Phone number</h3>
                <p>
                  <a className="contact__link" href="tel:+34696004975">
                    +34 696 00 49 75
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__info">
              {/* icon*/}
              <div className="info__icon">
                <LuMail />
              </div>
              <div className="info__content">
                <h3>Email</h3>
                <p>
                  <a
                    className="contact__link"
                    href="mailto:info@jesusreignsbarcelona.com"
                  >
                    info@jesusreignsbarcelona.com
                  </a>
                </p>
              </div>
            </div>

            <div className="social-media">
              <h3>Follow us</h3>
              <div className="social-icons">
                {socialLinks.map(({ name, url, icon: Icon }) =>
                  url ? (
                    <a
                      key={name}
                      className="info__icon"
                      href={url}
                      aria-label={name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      key={name}
                      className="info__icon"
                      role="img"
                      aria-label={`${name} (enlace pendiente)`}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                  ),
                )}
              </div>
            </div>

            <p>verse of the day</p>
          </div>

          <div className="contact__form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name">Full name</label>
                <br />
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone number</label>
                <br />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                ></textarea>
              </div>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
