import PropTypes from "prop-types";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useLanguage from "../context/useLanguage";
import "../styles/Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  const cvUrl = language === "en" ? "/CVen.pdf" : "/CVes.pdf";

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(language === "en" ? "Form submitted!" : "¡Formulario enviado!");
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">
        {language === "en" ? "Get in Touch" : "Contáctame"}
      </h2>
      <p className="contact-subtitle">
        {language === "en"
          ? "Fill out the form below and I'll get back to you"
          : "Rellena el formulario abajo y me pondré en contacto contigo"}
      </p>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                {language === "en" ? "Name" : "Nombre"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={
                  language === "en" ? "Enter your name" : "Ingrese su nombre"
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                {language === "en" ? "Email" : "Correo Electrónico"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={
                  language === "en" ? "name@example.com" : "nombre@ejemplo.com"
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                {language === "en" ? "Subject" : "Asunto"}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder={
                  language === "en" ? "Enter your subject" : "Ingrese el asunto"
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                {language === "en" ? "Message" : "Mensaje"}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder={
                  language === "en"
                    ? "Enter your message"
                    : "Ingrese su mensaje"
                }
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              {language === "en" ? "Submit" : "Enviar"} <FaEnvelope />
            </button>
          </form>
        </div>

        <div className="second-column">
          <div className="contact-socials">
            <h3>{language === "en" ? "Find me on:" : "Encuéntrame en:"}</h3>
            <div className="social-icons">
              <a
                href="mailto:crisilto1997@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/crisilto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/crisilto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="contact-cv">
            <h3>!important</h3>
            <div className="download-cv">
              <a href={cvUrl} download className="download-cv-btn">
                {language === "en" ? "Download My CV" : "Descargar mi CV"}
              </a>
            </div>
          </div>

          <div className="contact-pets">
            <h3>const myPets = &#91; &quot;Lilith, Kenneth&quot;&#93; </h3>
            <div className="pets-photo">
              <img src="public\pets.jpg" alt="My animals" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  language: PropTypes.string,
};

export default Contact;
