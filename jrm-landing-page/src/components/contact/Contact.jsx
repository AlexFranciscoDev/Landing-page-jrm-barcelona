import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import "./Contact.css";

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionHeading = motion.h2;
const MotionParagraph = motion.p;
const MotionQuote = motion.blockquote;

// Añade aquí las URL de los perfiles cuando estén disponibles.
const socialLinks = [
  { name: "Facebook", url: "", icon: FaFacebook },
  { name: "YouTube", url: "", icon: FaYoutube },
];

export const Contact = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });
  /* Set form state where data will be stored */
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  // e.target is the field to be edited
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract the field and value --> email, alex@alex.com
    setFormData({ ...formData, [name]: value }); // Update the value
    // ...formData gets the current value of form data and updates field [name] and puts the 'value'
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact__content">
            
          <div className="contact__info__section">
            <MotionSpan {...entrance()} className="contact__subtitle">Contact us</MotionSpan>
          <MotionHeading {...entrance(0.08)} className="contact__title">Let's talk</MotionHeading>
          <MotionParagraph {...entrance(0.16)} className="contact__paragraph">
            We are here for any questions, prayer, or simply to get to know you
            better.
          </MotionParagraph>
            <MotionDiv {...entrance(0.2)} className="contact__info">
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
            </MotionDiv>

            <MotionDiv {...entrance(0.26)} className="contact__info">
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
            </MotionDiv>

            <MotionDiv {...entrance(0.3)} className="social-media">
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
            </MotionDiv>

            <MotionParagraph {...entrance(0.12)}>
              Have a question or need prayer? Send us a message — we’d love to
              hear from you.
            </MotionParagraph>
            <MotionQuote {...entrance(0.2)} className="contact__verse">
              <p>
                “Come unto me, all ye that labour and are heavy laden, and I will
                give you rest.”
              </p>
              <cite>Matthew 11:28 · KJV</cite>
            </MotionQuote>
          </div>

          <MotionDiv {...entrance(0.16)} className="contact__form">
            {/* FormSubmit handles delivery and CAPTCHA without a backend.
                The recipient must activate the form after the first submission. */}
            <form
              action="https://formsubmit.co/alexbcn98@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Nuevo contacto — Jesus Reigns Barcelona" />
              <input type="hidden" name="_template" value="table" />
              <div>
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={formData.fullName}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="+34 600 000 000"
                  value={formData.phone}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="button button--primary">Send message</button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
