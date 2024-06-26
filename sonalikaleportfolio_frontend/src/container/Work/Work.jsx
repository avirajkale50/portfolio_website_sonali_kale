import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [visibleWorksCount, setVisibleWorksCount] = useState(6);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleReadMoreClick = (work) => {
    setSelectedWork(work);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedWork(null);
  };

  const handleShowMore = () => {
    setVisibleWorksCount(visibleWorksCount + 6); // Increment the number of visible works by 6
  };

  return (
    <>
      <h2 className="head-text">The Characterization <span>and </span> Applications of Nanomaterials</h2>
      <div className="app__work-filter">
        {['Thermal Energy Storage', 'Power Consumption', 'ZnO Nanoneedles', 'Biomedical', 'Modern Agricultural Technology', 'Nanotech', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.slice(0, visibleWorksCount).map((work, index) => (
          <motion.div className="app__work-item app__flex" key={work._id}
          whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration:0.1}}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>

              <div className="app__work-readmore">
                <button onClick={() => handleReadMoreClick(work)} className="read-more-button">Read More</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visibleWorksCount < filterWork.length && (
      <div className="app__work-showmore">
  <button onClick={handleShowMore} className="show-more-button">Show More</button>
</div>

      )}

      {isPopupOpen && selectedWork && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={handleClosePopup}>X</button>
            <h2>{selectedWork.titlepopup}</h2>
            <img src={urlFor(selectedWork.imgUrl)} alt={selectedWork.name} />
            <div className="publication-details">
              <p><strong>Author:</strong> {selectedWork.author}</p>
              <p><strong>Publisher:</strong> {selectedWork.publisher}</p>
              <p><strong>Publication Date:</strong> {selectedWork.publicationdate}</p>
            </div>
            <p>{selectedWork.descriptionpopup}</p>
            <a href={selectedWork.downloadlink} target="_blank" rel="noreferrer" className="download-button">Download</a>
            <div className="app__work-tag app__flex">
              {selectedWork.tags.map((tag, index) => (
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
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
