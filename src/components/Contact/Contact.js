import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

// Components
import Title from "../Title/Title";

const Contact = ({ contact }) => {
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={500} delay={400} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    cta: PropTypes.string,
    btn: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Contact;
