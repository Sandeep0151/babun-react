
import { FaHome, FaCalculator, FaCreditCard, FaInfoCircle } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="fixed-footer">
      <div className="footer-item">
        <FaHome size={24} color="#4CAF50" />
        <p>Home</p>
      </div>
      <div className="footer-item">
        <FaCalculator size={24} color="#4CAF50" />
        <p>Calculator</p>
      </div>
      <div className="footer-item">
        <FaCreditCard size={24} color="#4CAF50" />
        <p>Credit Score</p>
      </div>
      <div className="footer-item">
        <FaInfoCircle size={24} color="#4CAF50" />
        <p>More</p>
      </div>
    </div>
  );
};

export default Footer;
