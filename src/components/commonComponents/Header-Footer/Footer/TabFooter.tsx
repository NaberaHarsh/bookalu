import React, { Component } from "react";
import PropTypes from "prop-types";

const TabFooter: React.FC = () => {
  return (
    <div>
      <section className="pc_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="pc_footer_left">
                <p>© Copyright Bookalu Ltd 2021 </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pc_footer_right">
                <ul>
                  <li>
                    <a href="#">Feedback</a>
                  </li>
                  <li>
                    <a href="#">Advertise with us</a>
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
                    <a id="pc_footer_right_last" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tab_display" id="tab_display">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab_display_inner">
                <ul className="tab_display_innerlist">
                  <li>
                    <a href="#" className="tab_display_innerlist1">
                      <img src="/images/footer/icon_1.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tab_display_innerlist2">
                      <img src="/images/footer/icon_2.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tab_display_innerlist3">
                      <img src="/images/footer/icon_3.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tab_display_innerlist4">
                      <img src="/images/footer/icon_4.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tab_display_innerlist5">
                      <img src="/images/footer/icon_5.png" alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a className=" tab_display_innerlist6" href="#">
                      <img src="/images/footer/icon_8.png" alt="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TabFooter;
