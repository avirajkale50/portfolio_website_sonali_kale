import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  };

  const handleReadMoreClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const handleShowMore = () => {
    setVisibleProjectsCount(visibleProjectsCount + 3); // Increment the number of visible projects by 3
  };

  return (
    <>
      <h2 className="head-text">My <span>Projects</span></h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProjects.slice(0, visibleProjectsCount).map((project, index) => (
          <motion.div className="app__project-item app__flex" 
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration:0.1}}
          key={project._id}>

          <h2 className="bold-text">{project.title}</h2>
            <div className="app__project-img app__flex">
              
              <img src={urlFor(project.imgUrl)} alt={project.name} />

            </div>

            <motion.div className="app__project-content app__flex">

              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>

              <div className="app__project-readmore">
                <button onClick={() => handleReadMoreClick(project)} className="read-more-button">Read More</button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {visibleProjectsCount < filterProjects.length && (
        <div className="app__project-showmore">
          <button onClick={handleShowMore} className="show-more-button">Show More</button>
        </div>
      )}

      {isPopupOpen && selectedProject && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={handleClosePopup}>X</button>
            <h2>{selectedProject.title}</h2>
            <img src={urlFor(selectedProject.imgUrl)} alt={selectedProject.name} />
            <div className="publication-details">
              <p><strong>Author:</strong> {selectedProject.author}</p>
              <p><strong>Publication Date:</strong> {selectedProject.date}</p>
            </div>
            <p>{selectedProject.description}</p>
            
            <div className="app__project-tag app__flex">
              {selectedProject.tags.map((tag, index) => (
                <p key={index} className="p-text">{tag}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">@2024 Sonali Kale</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, 'app__projects'),
  'projects',
  'app__primarybg',
);
