import { Link } from "react-router-dom";
import useLanguage from "../context/useLanguage";
import "../styles/NotFound.css";

const NotFound = () => {
  const { language } = useLanguage();
  
  const message = language === "en" ? "Oops! The page you're looking for doesn't exist." : "¡Vaya! La página que buscas no existe.";
  const buttonText = language === "en" ? "Go back to Home" : "Volver al Inicio";

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>{message}</p>
      <Link to="/home" className="back-home-btn">
        {buttonText}
      </Link>
    </div>
  );
};

export default NotFound;
