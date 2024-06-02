import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Awards.scss";

const Awards = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const query = '*[_type == "award"]';

    client.fetch(query).then((data) => {
      setAwards(data);
    });
  }, []);

  return (
    <div className="main">
      <h2 className="head">
        My <span>Awards </span> And <span>Achievements</span>
      </h2>
      <div className="container">
        <ul>
          {awards.map((award, index) => (
            <li key={index}>
              <h3 className="heading">{award.title}</h3>
              <img
                src={urlFor(award.image)}
                alt={award.title}
                style={{ width: "100%", height: "300px" }} // Adjust size here
              />
              <p>{award.description}</p>
              <a href="#">Read More </a>
              <span className="date">{new Date(award.date).toLocaleDateString()}</span>
              <span className="circle"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;