import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Awards.scss";

const Awards = () => {
  return (
    <div className="main">
      <h2 className="head">My <span>Awards </span> And <span>Achievement</span></h2>
      <div className="container">
        <ul>
          <li>
            <h3 className="heading">FrontEnd Developer</h3>
            <img
              src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="Image Description"
              style={{ width: "100%", height: "300px" }} // Adjust size here
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam
            </p>
            <a href="#">Read More </a>
            <span className="date">January 2021</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">BackEnd Developer</h3>
            <img
              src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="Image Description"
              style={{ width: "100%", height: "300px" }} // Adjust size here
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam
            </p>
            <a href="#">Read More </a>
            <span className="date">February 2021</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">Full Stack Developer</h3>
            <img
              src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="Image Description"
              style={{ width: "100%", height: "300px" }} // Adjust size here
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam
            </p>
            <a href="#">Read More </a>
            <span className="date">March 2021</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">App Developer</h3>
            <img
              src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="Image Description"
              style={{ width: "100%", height: "300px" }} // Adjust size here
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam
            </p>
            <a href="#">Read More </a>
            <span className="date">April 2021</span>
            <span className="circle"></span>
          </li>
          
          <li>
            <h3 className="heading">App Developer</h3>
            <img
              src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="Image Description"
              style={{ width: "100%", height: "300px" }} // Adjust size here
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam
            </p>
            <a href="#">Read More </a>
            <span className="date">April 2021</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">App Developer</h3>
            <img
              src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="Image Description"
              style={{ width: "100%", height: "300px" }} // Adjust size here
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam
            </p>
            <a href="#">Read More </a>
            <span className="date">April 2021</span>
            <span className="circle"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Awards, "app__Awards"),
  "Awards",
  "app__primarybg"
);
