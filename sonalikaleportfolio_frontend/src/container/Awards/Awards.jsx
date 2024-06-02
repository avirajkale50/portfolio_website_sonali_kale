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
                style={{ width: "85%", height: "30%" ,margin:"5%"}} // Adjust size here
              />
              <p>{award.description}</p>
              <span className="date">{award.date}</span>
              <span className="circle"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;