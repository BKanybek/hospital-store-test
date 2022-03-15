import React from 'react';
import "./Footer.css";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer-basic">
        <footer>
            <div className="social">
            <a href="https://www.facebook.com/" className="facebook-social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/" className="instagram-social" >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/" className="twitter-social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
             </a>
             <a href="https://github.com/" className="github-social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
             </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">K.A.A © 2022</p>
        </footer>
    </div>
    );
};

export default Footer;