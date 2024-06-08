// CopyrightFooter.js
import React from "react";
import "./CopyrightFooter.scss";
import { LiaOrcid } from "react-icons/lia"; // or the correct path/library
import { SiScopus, SiGooglescholar } from "react-icons/si"; // or the correct path/library
import { motion } from "framer-motion";

const CopyrightFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: [1, 0.9] }}
          transition={{ duration: 0.25 }}
          className="footer__links"
        >
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: [1, 0.9] }}
          transition={{ duration: 0.25 }}
          className="footer__social"
        >
          <a
            href="https://orcid.org/0000-0002-5479-821X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaOrcid />
          </a>
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=58245893400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiScopus />
          </a>
          <a
            href="https://scholar.google.com/citations?user=bVwjFygAAAAJ&amp;hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglescholar />
          </a>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: [1, 0.9] }}
          transition={{ duration: 0.25 }}
          className="footer__map"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9087102484283!2d73.76174708835953!3d18.65152549271855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff5a122e0d5%3A0xb98d1c5d6c1ff8a2!2sSome+Location!5e0!3m2!1sen!2sin!4v1629987200000"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="map"
          ></iframe>
        </motion.div>
      </div>
    </footer>
  );
};

export default CopyrightFooter;
