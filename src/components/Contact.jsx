import emailjs from "emailjs-com";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  FaCoffee,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import useLanguage from "../context/useLanguage";
import "../styles/Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  const [showMeme, setShowMeme] = useState(false);
  const cvUrl = language === "en" ? "/CVen.pdf" : "/CVes.pdf";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_bpllun9",
        "template_y666vw8",
        event.target,
        "mr3R8UI6Ps3rDKvtC"
      )
      .then(
        () => {
          alert(
            language === "en"
              ? "Form successfully submitted!"
              : "¡Formulario enviado con éxito!"
          );
        },
        () => {
          alert(
            language === "en"
              ? "Failed to send the form!"
              : "¡Error al enviar el formulario!"
          );
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleMeme = () => {
    setShowMeme(!showMeme);
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
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.subject}
                onChange={handleInputChange}
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
                value={formData.message}
                onChange={handleInputChange}
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
            <h3>let findMe =</h3>
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
            <h3>
              import &#123;&nbsp;CV&nbsp;&#125; from &#8216;crisilto&#8217; ;
            </h3>
            <div className="download-cv">
              <a href={cvUrl} download className="common-button">
                <FaFileDownload />
              </a>
            </div>
          </div>

          <div className="contact-humor-button">
            <h3>const coffeeBreak =</h3>

            {!showMeme ? (
              <button onClick={handleToggleMeme} className="common-button">
                <FaCoffee />
              </button>
            ) : (
              <div className="contact-humor" onClick={handleToggleMeme}>
                <img
                  src="/this-is-fine.PNG"
                  alt="This is fine meme"
                  className="humor-image"
                />
                <p className="humor-text">
                  {language === "en"
                    ? "Even in chaos, everything is under control."
                    : "Incluso en el caos, todo está bajo control."}
                </p>
              </div>
            )}
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
