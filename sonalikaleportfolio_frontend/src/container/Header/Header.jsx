import React from 'react'
import './Header.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants';
import TypingEffect from '../../components/TypingEffect';

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x : [-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>⚛️</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">
                Hello,I am
              </p>
              <h1 className="head-text">
                Sonali Kale
              </h1>
              <TypingEffect text='Hiiiiiii' speed={100} />
            </div>
          </div>
          <div className="tag-cmp app__flex">
              <p className="p-text">
               Professor
              </p>
              <p className="p-text">
                Research
              </p>
          </div>
        </div>

      </motion.div>
        
      <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration:0.5,delayChildren:0.5}}
       className="app__header-img"
      >
        <img src={images.profile} alt="profile-img" />
        <motion.img
           whileInView={{scale:[0,1]}}
           transition={{duration:1,ease:'easeInOut'}}
           src={images.circle}
           alt="profile_circle"
           className="overlay_circle"
        />
      </motion.div>

  
    </div>
  )
}

export default Header


