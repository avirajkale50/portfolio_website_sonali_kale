import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuOpen = (e) => {
    e.preventDefault();
    console.log('Opening menu');
    setToggle(true);
  };

  const handleMenuClose = () => {
    console.log('Closing menu');
    setToggle(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'projects', 'contact', 'EduMaterials'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {item === 'EduMaterials' ? (
              <a href="https://drive.google.com/drive/folders/1afVqWyTNF_w_jMR-SbUchVLAovDVl2St?usp=sharing" target="_blank" rel="noopener noreferrer">{item}</a>
            ) : (
              <a href={`#${item}`}>{item}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleMenuOpen} />

        {toggle && (
          <motion.div
            // whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <HiX onClick={handleMenuClose} />
            <ul>
              {['home', 'about', 'work', 'award', 'projects', 'contact', 'EduMaterials'].map((item) => (
                <li key={item}>
                  {item === 'EduMaterials' ? (
                    <a href="https://drive.google.com/drive/folders/1afVqWyTNF_w_jMR-SbUchVLAovDVl2St?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={handleMenuClose}>
                      {item}
                    </a>
                  ) : (
                    <a href={`#${item}`} onClick={handleMenuClose}>
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
