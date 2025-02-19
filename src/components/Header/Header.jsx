import './Header.scss';
import { Link } from 'react-router-dom';
import islandIcon from "../../assets/images/nfld-button-fixed.png";

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav__list">
          <Link to="/about"><li className="header-nav__item">About</li></Link>
          <li className="header-nav__item">Places</li>
        </ul>
        <Link to="/"><img className="header-nav__image" src={islandIcon} alt="Newfoundland" /></Link>
        <ul className="header-nav__list">
          <li className="header-nav__item">People</li>
          <li className="header-nav__item">Sayings</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
