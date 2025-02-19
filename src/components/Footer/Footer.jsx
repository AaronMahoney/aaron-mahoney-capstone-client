import './Footer.scss';
import mainFlag from "../../assets/images/flag1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-content__title">After looking around, don't forget to sign the guidebook!</h3>
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
