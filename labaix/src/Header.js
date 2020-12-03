import logo from './res/logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div class="header">
        <div class="contact">
            <FontAwesomeIcon icon={faPhone}/>
            <a href='TODO'>  0241 47592515 </a>
        </div>
        <div class="header-left">
            <img class="img-logo" src={logo} alt="labaix logo"/>    
        </div>
    </div>
  );
}

export default Header;