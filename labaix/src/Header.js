import logo from './res/logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div class="header">
        <div class="contact">
            <div class="phone">
                <FontAwesomeIcon icon={faPhone} class="social_icon"/>
                <a href='TODO'>  0241 47592515 </a>
            </div>
            <div class="mail">
                <FontAwesomeIcon icon={faEnvelope} class="social_icon"/>
                <a href='TODO'>  info@labaix.de </a>
            </div>
        </div>

        <div class="social">
                Follow us:
                <FontAwesomeIcon icon={faFacebook} class="social_icon" onClick={() => alert("Facebook")}/>
                <FontAwesomeIcon icon={faTwitter} class="social_icon" onClick={() => alert("Twitter")}/>
                <FontAwesomeIcon icon={faInstagram} class="social_icon" onClick={() => alert("Instagram")}/>
        </div>
        
        <img class="img-logo" src={logo} alt="labaix logo"/>    

    </div>
  );
}


export default Header;