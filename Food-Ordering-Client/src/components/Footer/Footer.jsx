import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo1.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="footer__container">
              <div className="footer__section">
                <img className="logo__img" src={logo} alt="logo" />
                <p className="footer__title">Stay Connected </p>
              <div className="social__links">
                  <span>
                  <Link to="https://www.facebook.com/Josiel-Mark-Miel-Seroy/">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="https://github.com/josielmark">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to=" https://www.instagram.com/josiel_mark/">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to=" https://www.linkedin.com/Josiel-Mark-Seroy">
                    <i className="ri-linkedin-line"></i>
                  </Link>
                </span>
              </div>
              </div>
              <div className="footer__section">
                  <h5 className="footer__title">Delivery Time</h5>
                <span>Monday - Friday</span>
                <p>7:00am - 8:30pm</p>
                <span>Monday - Friday</span>
                <p>7:00am - 8:30pm</p>
              </div>
              <div className="footer__section">
                <h5 className="footer__title">Contact Information</h5>
                <p>Location: Pagadian City Zamboanga Del Sur, Philippines</p>
                <p>Phone: 09757718249</p>
                <p>Email: foodforyou@gmail.com</p>
              </div>
              {/* <div className="footer__section">
              <Link to="/contact">
                Contact
              </Link>
              <Link to="/contact">
                Contact
              </Link>
              <Link to="#">
                FAQ
              </Link>
              <Link to="#">
                Terms And Condition
              </Link>
              <Link to="#">
                Privacy Policy
              </Link>
              </div> */}
              <div className="footer__section">
                <h5 className="footer__title">Contact Information</h5>
                <p>Location: Pagadian City Zamboanga Del Sur, Philippines</p>
                <p>Phone: 09757718249</p>
                <p>Email: foodforyou@gmail.com</p>
              </div>
      </div>
            <p className="copyright__text">
              Copyright Ⓒ 2022 McDollibee. All Rights
              Reserved.
            </p>
    </footer>
    </>

  );
};

export default Footer;
