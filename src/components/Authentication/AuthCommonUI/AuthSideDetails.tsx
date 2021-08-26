import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const AuthSideDetails = () => {
  return (
    <>
      <section className="tab_display">
        <div className="container-fluid">
          <Row>
            <Col md={12}>
              <div className="tab_display_inner">
                <ul className="tab_display_innerlist">
                  <li>
                    <a href="#">
                      <img src="/images/footer/icon_1.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/footer/icon_2.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/footer/icon_3.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/footer/icon_4.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/footer/icon_5.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      <img src="/images/footer/icon_6.png" alt="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export const CommonColumnField = () => {
  return (
    <Col md={6} className="hide">
      <div className="site_main_left">
        <div className="left_inner_top">
          <h1>Bringing customers &amp; industries closer </h1>
          <p>
            A 100% FREE self promotional booking system for local businesses and
            their customers. Taking the hard work out of finding local services
            near you and making appointments, when ever you want where ever you
            want.
          </p>
        </div>
        <div className="left_inner_mid">
          <ul>
            <li>Free User Accounts</li>
            <li>Free Business Pages</li>
            <li>Free Geo Location Search</li>
            <li>Free Booking System</li>
            <li>Free Social Media Links</li>
            <li>Free Promotion Feed</li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export const CommonFooter = () => {
  return (
    <div className="right_inner_bottom">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Policies</a>
        </li>
        <li>
          <a href="#">Disclaimer</a>
        </li>
        <li>
          <a id="border" href="#">
            Support
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AuthSideDetails;
