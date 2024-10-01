import PropTypes from 'prop-types';
import useLanguage from '../context/useLanguage';
import '../styles/Contact.css';

const Contact = () => {
  const {language} = useLanguage();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(language === 'en' ? 'Form submitted!' : '¡Formulario enviado!');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">
        {language === 'en' ? 'Get in Touch' : 'Contáctame'}
      </h2>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                {language === 'en' ? 'Name' : 'Nombre'}
              </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                {language === 'en' ? 'Email' : 'Correo Electrónico'}
              </label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                {language === 'en' ? 'Message' : 'Mensaje'}
              </label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              {language === 'en' ? 'Send Message' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contact;
