import React from "react";
import { Row, Col } from "react-bootstrap";
import "./commonUi.css";

const AuthenticationHeader: React.FC = () => {
  return (
    <>
      <div className="main_bg">
        <img src="/images/bg_color.png" alt="img" />
      </div>
      <header className="site_header authHeader">
        <div className="container-fluid">
          <Row>
            <Col md={12}>
              <div className="site_logo">
                <a href="#">
                  <img src="/images/logo.png" alt="images" />
                </a>
              </div>
            </Col>
            <Col md={12}>
              <div className="mobile">
                <div className="mobile_left">
                  <a href="#">
                    <img src="images/header/left_arrow.png" alt="image" />
                  </a>
                </div>
                <div className="mobile_middle">
                  <a href="#">
                    <img src="images/header/mobile.png" alt="images" />
                  </a>
                </div>
                <div className="mobile_right">
                  <a href="#">
                    <img src="images/header/3dot.png" alt="images" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};

export default AuthenticationHeader;
