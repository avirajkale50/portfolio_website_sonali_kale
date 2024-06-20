// import React, { useState, useEffect } from 'react';
import { LiaOrcid } from "react-icons/lia";
import { SiGooglescholar, SiScopus } from "react-icons/si";
import './CopyrightFooter.scss';


const CopyrightFooter = () => {
  // const [visitorCount, setVisitorCount] = useState(0); // State to hold the visitor count

  // useEffect(() => {
  //   // Fetch visitor count from backend
  //   fetch('http://localhost:3333/structure/count')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVisitorCount(data.count);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching visitor count', error);
  //     });
  // }, []);

  return (
    <div>
      <div className='flag'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, pariatur?</p>
      </div>
      <div className="footer">
        <div className="sb__footer section__padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links-div">
              <div className="foot__logo__style">
                <iframe 
                  title="Map" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.546565048871!2d73.75211259357907!3d18.651728800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering%20%7C%20Autonomous%20Engineering%20College%20in%20Pune!5e0!3m2!1sen!2sus!4v1673342758968!5m2!1sen!2sus"  
                  width="100%" 
                  height="160px" 
                  id="map"
                ></iframe>
              </div>
            </div>
            <div className="sb__footer-links-div">
              <h4>IMP Website</h4>
              <a href="https://orcid.org/0000-0002-5479-821X" target='_blank' rel="noreferrer">
                <p>orcid.org</p>
              </a>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=58245893400" target='_blank' rel="noreferrer">
                <p>scopus.com</p>
              </a>
              <a href="https://scholar.google.com/citations?user=bVwjFygAAAAJ&amp;hl=en" target='_blank' rel="noreferrer">
                <p>scholar.google.com</p>
              </a>
            </div>
            <div className="sb__footer-links-div">
              <h4>My Work</h4>
              <a href="#work" target='_blank' rel="noreferrer">
                <p>Works</p>
              </a>
              <a href="#projects" target='_blank' rel="noreferrer">
                <p>Projects</p>
              </a>
            </div>
            <div className="sb__footer-links-div">
              <h4>Social Media</h4>
              <div className="socialmedia">
                <a href="https://orcid.org/0000-0002-5479-821X" target='_blank' rel="noreferrer"><LiaOrcid /></a>
                <a href="https://scholar.google.com/citations?user=bVwjFygAAAAJ&amp;hl=enT" target='_blank' rel="noreferrer"><SiGooglescholar /></a>
                <a href="https://www.scopus.com/authid/detail.uri?authorId=58245893400" target='_blank' rel="noreferrer"><SiScopus /></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>
                @{new Date().getUTCFullYear()} All rights reserved...
              </p>
              {/* <p>
                Visitor Count: {visitorCount}
              </p> */}
            </div>
            <div className="sb__footer-below-links">
              <a href="/terms"><div><p>Made by WEBDEVDUO</p></div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyrightFooter;
