// CopyrightFooter.js
import React from 'react';
import './CopyrightFooter.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CopyrightFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.96305791514445!3d-37.81410797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770d0bb8315a75!2sFederation+Square!5e0!3m2!1sen!2sau!4v1489149164563"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default CopyrightFooter;
