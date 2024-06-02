import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  
  return (
    <>
    <div className='about__style'>
      <h2 className="head-text"> Empowering Minds: <span>My Journey as </span> <br />a <span>Teacher and Researcher</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="sticky__back">
      <p>
        <i>"The only way to do great work is to love what you do."</i> 
      </p>        
      </div>
    </>
  );
};

export default About;
