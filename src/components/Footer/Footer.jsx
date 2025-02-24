import './Footer.scss';
import { Link } from 'react-router-dom';
import mainFlag from "../../assets/images/flag2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <Link to="/guidebook"><h3 className="footer-content__title">After looking around, don't forget to sign the guidebook!</h3></Link>
          <img className="footer-content__image" src={mainFlag} alt="newfoundland flag" />
          <div className="footer-text">
            <p className="footer-text__info">© 2025</p>
            <p className="footer-text__info">Terms</p>
            <p className="footer-text__info">Privacy</p>
            <p className="footer-text__info">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
