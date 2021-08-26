import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const TabTwo = () => {
  return (
    <div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="step2_page_tab_pane step3_page_tab_pane">
            <div className="step6_page_tab_pane_item">
              <label>Heading</label>
              <input
                type="text"
                placeholder="Services Title  - for example Beauty Services"
              />
            </div>
            <div className="step6_page_tab_pane_item2">
              <ul>
                <li>
                  <p className="step6_page_tab_pane_item2_top1">Services</p>
                </li>
                <li>
                  <p className="step6_page_tab_pane_item2_top2">
                    Timing{" "}
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id={`tooltip-right`}>
                          Time Business will stay Operating
                        </Tooltip>
                      }
                    >
                      <img src="images/dontknow.png" alt="images" />
                    </OverlayTrigger>
                  </p>
                </li>
                <li>
                  <p className="step6_page_tab_pane_item2_top3">Price</p>
                </li>
                <li>
                  <p className="step6_page_tab_pane_item2_top5">
                    Appointments and Enquiries{" "}
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id={`tooltip-right`}>
                          Time Business will stay Operating
                        </Tooltip>
                      }
                    >
                      <img src="images/dontknow.png" alt="images" />
                    </OverlayTrigger>
                  </p>
                </li>
              </ul>
              <div className="step6_page_tab_pane_item2_inner">
                <div className="step6_page_tab_pane_item2_inner_item1">
                  <div className="step6_page_tab_pane_item2_inner_item1_inner1">
                    <input type="text" placeholder="add service - eg. facial" />
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item1_inner2">
                    <select>
                      <option>15 Mins</option>
                      <option>15 Mins1</option>
                    </select>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item1_inner3">
                    <input type="text" placeholder="$350.50" />
                  </div>
                </div>
                <div className="step6_page_tab_pane_item2_inner_item2">
                  <div className="step6_page_tab_pane_item2_inner_item2_inner1">
                    <input type="checkbox" id="inner2_item1Check1" />
                    <label htmlFor="inner2_item1Check1">Mobile</label>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item2_inner2">
                    <input type="checkbox" id="inner2_item1Check2" />
                    <label htmlFor="inner2_item1Check2">Book online</label>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item2_inner3">
                    <input type="checkbox" id="inner2_item1Check3" />
                    <label htmlFor="inner2_item1Check3">Call Now</label>
                  </div>
                </div>
              </div>
              <div className="step6_page_tab_pane_item2_inner">
                <div className="step6_page_tab_pane_item2_inner_item1">
                  <div className="step6_page_tab_pane_item2_inner_item1_inner1">
                    <input
                      type="text"
                      placeholder="add service - eg. eyebrow wax"
                    />
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item1_inner2">
                    <select>
                      <option>45 Mins</option>
                      <option>15 Mins1</option>
                    </select>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item1_inner3">
                    <input type="text" placeholder="$350.50" />
                  </div>
                </div>
                <div className="step6_page_tab_pane_item2_inner_item2">
                  <div className="step6_page_tab_pane_item2_inner_item2_inner1">
                    <input type="checkbox" id="inner2_item1Check1" />
                    <label htmlFor="inner2_item1Check1">Mobile</label>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item2_inner2">
                    <input type="checkbox" id="inner2_item1Check2" />
                    <label htmlFor="inner2_item1Check2">Book online</label>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item2_inner3">
                    <input type="checkbox" id="inner2_item1Check3" />
                    <label htmlFor="inner2_item1Check3">Call Now</label>
                  </div>
                </div>
              </div>
              <div className="step6_page_tab_pane_item2_inner">
                <div className="step6_page_tab_pane_item2_inner_item1">
                  <div className="step6_page_tab_pane_item2_inner_item1_inner1">
                    <input
                      type="text"
                      placeholder="add service - eg. massage"
                    />
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item1_inner2">
                    <select>
                      <option>1hr 15 mins</option>
                      <option>9:00 am</option>
                    </select>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item1_inner3">
                    <input type="text" placeholder="$350.50" />
                  </div>
                </div>
                <div className="step6_page_tab_pane_item2_inner_item2">
                  <div className="step6_page_tab_pane_item2_inner_item2_inner1">
                    <input type="checkbox" id="inner2_item1Check1" />
                    <label htmlFor="inner2_item1Check1">Mobile</label>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item2_inner2">
                    <input type="checkbox" id="inner2_item1Check2" />
                    <label htmlFor="inner2_item1Check2">Book online</label>
                  </div>
                  <div className="step6_page_tab_pane_item2_inner_item2_inner3">
                    <input type="checkbox" id="inner2_item1Check3" />
                    <label htmlFor="inner2_item1Check3">Call Now</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--- page_link_area End-----*/}

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page6_tab_pane_bottom_area_inner">
              <a href="#" className="page6_tab_pane_bottom_area_item1">
                Remove
              </a>
            </div>
            <div className="page6_tab_pane_bottom_area_inner2">
              <a href="#" className="page6_tab_pane_bottom_area_item2">
                <img src="images/plus.png" alt="images" />
                add another
              </a>
            </div>
            <div className="page6_tab_pane_bottom_area_inner3">
              <a href="#" className="page6_tab_pane_bottom_area_item3">
                <img src="images/plus.png" alt="images" />
                add a line break
              </a>
            </div>
            <div className="page6_tab_pane_bottom_area_inner4">
              <button type="button">Save Tab</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
