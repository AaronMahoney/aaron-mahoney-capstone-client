import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import islandIcon from "../../assets/images/nfld-button-fixed.png";
import Modal from "../Modal/Modal.jsx";
import Login from "../Login/Login.jsx";
import SignUp from "../SignUp/SignUp.jsx";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="header-nav__section">
            <ul className="header-nav__list">
              <Link to="/about"><li className="header-nav__item">About</li></Link>
              <Link to="/places"><li className="header-nav__item">Places</li></Link>
            </ul>
          </div>

          <Link to="/"><img className="header-nav__image" src={islandIcon} alt="Newfoundland" /></Link>

          <div className="header-nav__section">
            <ul className="header-nav__list">
              <Link to="/people"><li className="header-nav__item">People</li></Link>
              <Link to="/sayings"><li className="header-nav__item">Sayings</li></Link>
            </ul>
          </div>

          <div className="header-auth">
            <button className="header-auth__button" onClick={() => setShowSignUp(true)}>Sign Up</button>
            <button className="header-auth__button" onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </nav>
      </header>

      {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <Login onLogin={(user) => {
            setShowLogin(false);
            console.log("User logged in:", user);
          }} />
        </Modal>
      )}

      {showSignUp && (
        <Modal onClose={() => setShowSignUp(false)}>
          <SignUp onSignUp={(user) => {
            setShowSignUp(false);
            console.log("User signed up:", user);
          }} />
        </Modal>
      )}
    </>
  );
}

export default Header;
