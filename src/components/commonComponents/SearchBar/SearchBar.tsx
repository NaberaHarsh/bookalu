import React from "react";
import "./SearchBar.css";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const SearchBar: React.FC = () => {
  return (
    <section className="bannar_area">
      <Container>
        <Row>
          <Col md={12}>
            <div className="bannar_inner1">
              <div className="inner1_item">
                <input
                  type="text"
                  placeholder="Search company name or keywords"
                />
              </div>
              <div className="inner1_item inner1_item1">
                <label>Location :</label>
                <input type="text" placeholder="20 Nameof road" />
                <a href="#">Change</a>
              </div>
              <div className="inner1_item inner1_item2">
                <select>
                  <option>Any Date</option>
                  <option>Any Date1</option>
                  <option>Any Date2</option>
                </select>
              </div>
              <div className="inner1_item inner1_item2 inner1_item3">
                <select>
                  <option>Any Time</option>
                  <option>Any Time1</option>
                  <option>Any Time1</option>
                </select>
              </div>
            </div>
            <div className="bannar_inner2">
              <div className="inner2_item" id="inner2_item">
                <select>
                  <option>Select an Industry</option>
                  <option>Select an Ipsum1</option>
                  <option>Select an Ipsum2</option>
                </select>
              </div>
              <div className="inner2_item inner2_item1">
                <input type="checkbox" id="inner2_item1Check" />
                <label htmlFor="inner2_item1Check">Home Business</label>
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-left`}>
                      A business that operates from their own home.
                    </Tooltip>
                  }
                >
                  <img
                    src="/images/dontknow.png"
                    alt="images"
                    className="contactDet_Dont_know step_two_dont_know_img home homebusiness"
                  />
                </OverlayTrigger>
              </div>
              <div className="inner2_item inner2_item2">
                <input type="checkbox" id="inner2_item1Check1" />
                <label htmlFor="inner2_item1Check1">Mobile</label>
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-left`}>
                      A business that travels to other people.
                    </Tooltip>
                  }
                >
                  <img
                    src="/images/dontknow.png"
                    alt="images"
                    className="contactDet_Dont_know step_two_dont_know_img home mobilebooking"
                  />
                </OverlayTrigger>
              </div>
              <div className="inner2_item inner2_item3">
                <input type="checkbox" id="inner2_item1Check2" />
                <label htmlFor="inner2_item1Check2">Shop</label>
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-left`}>
                      A business that operates from a shop or office space.
                    </Tooltip>
                  }
                >
                  <img
                    src="/images/dontknow.png"
                    alt="images"
                    className="contactDet_Dont_know step_two_dont_know_img home shop"
                  />
                </OverlayTrigger>
              </div>
              <div className="inner2_item inner2_item4">
                <input type="checkbox" id="inner2_item1Check3" />
                <label htmlFor="inner2_item1Check3">Online bookings only</label>
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-left`}>
                      This will filter your search results to show online
                      bookings only
                    </Tooltip>
                  }
                >
                  <img
                    src="/images/dontknow.png"
                    alt="images"
                    className="contactDet_Dont_know step_two_dont_know_img home onlinebooking"
                  />
                </OverlayTrigger>
              </div>
              <div className="inner2_item inner2_item5">
                <button type="button" className="btn btn-default">
                  Search
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchBar;
