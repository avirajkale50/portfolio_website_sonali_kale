import React from 'react'
import './Header.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants';
// // import TypingEffect from '../../components/TypingEffect';

const Header = () => {
  return (
    <>
    <div id="home" className="app__header">
      <div className="hero">
            {/* left name side */}
            <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hi I Am</span>
          <span>Sonali Kale</span>
          <span>
          An expert in nanotechnology and sustainable engineering. My work includes pioneering research in nano-enhanced phase change materials and advanced energy-efficient systems. I hold multiple patents and have received several awards for my contributions to the field. Committed to education and collaboration, I actively shape curricula and foster research partnerships.
          </span>
          <span>
          Innovating Tomorrow with Nanotechnology and Sustainable Solutions
          </span>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={images.back2} alt="" />
        <img src={images.back1} alt="" />
        <img src={images.profile} alt="" />
       
      </div>
    </div>
    </div>
    </>
  )
}

export default Header


