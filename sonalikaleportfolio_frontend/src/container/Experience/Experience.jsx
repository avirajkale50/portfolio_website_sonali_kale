import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
import './Experience.scss'; // Make sure this file exists and is properly styled
import { urlFor, client } from '../../client';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]{image, works[]{name}}';

    client.fetch(query).then((data) => {
      // Flatten the array of works from each experience into a single array
      const flattenedData = data.flatMap(exp => 
        exp.works.map(work => ({
          name: work.name,
          image: exp.image
        }))
      );
      setExperiences(flattenedData);
    });
  }, []);
  
  return (
    <>
      <div className='experience__style'>
        <h2 className="head-text" style={{ marginTop: 20 }}> Professional <span>Teaching </span> <br /><span>Background</span></h2>

        <div className="app__profiles">
          {experiences.map((experience, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={experience.name + index}
            >
              <img src={urlFor(experience.image)} alt={experience.name} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{experience.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
