import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AuthenticationHeader from "../AuthCommonUI/AuthenticationHeader";
import AuthSideDetails from "../AuthCommonUI/AuthSideDetails";
import "./RegisterAs.css";
import {
  HistoryProp,
  LocationPorp,
} from "../../../utils/interfaces/common_props";
import { AuthRoutes, nonAuthRoutes } from "../../../RouteHandler/routeEnum";

interface StateProps extends HistoryProp, LocationPorp {}

const RegisterAs: React.FC<StateProps> = (props: StateProps) => {
  const [selectedType, setSelectedType] = useState(1);

  const handleRoleUpdate = () => {
    if (selectedType) props.history.push(nonAuthRoutes.home);
    else if (!selectedType) props.history.push(AuthRoutes.businessRegister);
  };

  return (
    <div>
      <div>
        {/*Header Area Start */}
        <AuthenticationHeader />
        {/* site_main Area Start */}
        <section className="site_main">
          <Container>
            <Row>
              <Col md={6}>
                <div className="site_main_left">
                  <div className="left_inner_top">
                    <h1>Bringing customers &amp; industries closer </h1>
                    <p>
                      {" "}
                      A 100% FREE self promotional booking system for local
                      businesses and their customers. Taking the hard work out
                      of finding local services near you and making
                      appointments, when ever you want where ever you want.
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
              <Col md={6}>
                <div className="site_main_right">
                  <div className="right_inner_top" id="create_page_right">
                    <img src="images/right_logo.png" alt="right_images" />
                    <h1 className="create_right_title">
                      Would you like to create a business page?
                    </h1>
                    <p className="creat_page_p">Almost there!</p>
                  </div>
                  <div className="right_inner_mid">
                    <div className="site_form">
                      <div className="check_box_btn">
                        <button
                          className={`${selectedType == 0 && "selected "}`}
                          type="button"
                          onClick={() => setSelectedType(0)}
                        >
                          Yes - I am also a business owner
                        </button>
                        <button
                          type="button"
                          className={`${selectedType == 1 && "selected "}`}
                          onClick={() => setSelectedType(1)}
                        >
                          No - I am a customer only
                        </button>
                      </div>
                      <button
                        className="creaete_page_btn"
                        type="button"
                        onClick={handleRoleUpdate}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
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
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <AuthSideDetails />
      </div>
    </div>
  );
};

RegisterAs.propTypes = {};

export default RegisterAs;
