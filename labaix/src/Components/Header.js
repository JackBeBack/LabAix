import React, { Fragment, useEffect, useRef, useState } from 'react';
import logo from '../res/logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Title from './Title';

window.onscroll = function() {
    
}


function Header(props) {   
 
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

        <div class="sticky">
            <div class="social">
                    Follow us:
                    <FontAwesomeIcon icon={faFacebook} class="social_icon" onClick={() => alert("Facebook")}/>
                    <FontAwesomeIcon icon={faTwitter} class="social_icon" onClick={() => alert("Twitter")}/>
                    <FontAwesomeIcon icon={faInstagram} class="social_icon" onClick={() => alert("Instagram")}/>
            </div>
            <div class="navigation">
                <a class="navigation_item">HOME</a>
                <a class="navigation_item">ABOUT US</a>
                <a class="navigation_item">CONTACT</a>
            </div>

            <div class="title">
                <Title text="Title"/>
            </div>
            
            <img class="img-logo" src={logo} alt="labaix logo"/>    

        </div>

    </div>
  );
}


export default Header;