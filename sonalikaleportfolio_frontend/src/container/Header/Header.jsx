import React, { useEffect } from 'react';
import './Header.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { images } from '../../constants';

const revealVariants = {
  hidden: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0%)',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div id="home" className="app__header" ref={ref}>
      <div className="hero">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            <motion.span
              initial="hidden"
              animate={controls}
              variants={revealVariants}
            >
              Hi I Am
            </motion.span>
            <motion.span
              initial="hidden"
              animate={controls}
              variants={revealVariants}
              transition={{ delay: 0.2 }}
            >
              Sonali Kale
            </motion.span>
            <motion.span
              initial="hidden"
              animate={controls}
              variants={revealVariants}
              transition={{ delay: 0.4 }}
            >
              An expert in nanotechnology and sustainable engineering. My work includes pioneering research in nano-enhanced phase change materials and advanced energy-efficient systems. I hold multiple patents and have received several awards for my contributions to the field. Committed to education and collaboration, I actively shape curricula and foster research partnerships.
            </motion.span>
            <motion.span
              initial="hidden"
              animate={controls}
              variants={revealVariants}
              transition={{ delay: 0.6 }}
            >
              Innovating Tomorrow with Nanotechnology and Sustainable Solutions
            </motion.span>
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <motion.img
            src={images.back2}
            alt=""
            initial="hidden"
            animate={controls}
            variants={revealVariants}
            transition={{ delay: 0.8 }}
          />
          <motion.img
            src={images.back1}
            alt=""
            initial="hidden"
            animate={controls}
            variants={revealVariants}
            transition={{ delay: 1 }}
          />
          <motion.img
            src={images.profile}
            alt=""
            initial="hidden"
            animate={controls}
            variants={revealVariants}
            transition={{ delay: 1.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
