import PropTypes from "prop-types";
import '../styles/ConfirmationMessage.css';

const ConfirmationMessage = ({message, type, onClose}) => {
    const messageTypeClass = type === "error" ? "confirmation-message error" : "confirmation-message success";
    return ( 
        <div className={messageTypeClass}>
            {message}
            <button className="close-btn" onClick={onClose}>
                &times;
            </button>
        </div>
     );
}

ConfirmationMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["error", "success"]).isRequired,  
    onClose: PropTypes.func.isRequired
}
 
export default ConfirmationMessage;