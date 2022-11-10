import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      {/* <span className="section_subtitle">what i offer</span> */}
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">UI/UX Designer</h3>
              <p className="services_modal-description">
               ..................
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  I create user friendly interfaces and minimal designs that are very appealing to users.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">i have great experience in wireframing, prototyping and visual communication.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Front-End <br />
              Development
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Frontend Development</h3>
              <p className="services_modal-description">
               .......................
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  i convert designs data from a graphical interface through the use of HTML, CSS, JAVASCRIPT, to enable view and interact with the data(website).
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info"> I also work with frameworks like React js for building efficient and flexible user interface.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                   
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Back-End <br /> Development
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Backend Development</h3>
              <p className="services_modal-description">
               .....................
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  I handle the server functionality of web application.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">i write backend codes that works hand-in-hand with the frontend codes to deliver the final product to the users.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil_check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  i write efficient codes that connects the web to a database, manage the users connection and power the web application.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
