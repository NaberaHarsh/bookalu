import React, { useEffect, useRef, useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServicesTabs from "./ServicesTabs";
import SocialTabs from "./SocialTabs";
import ReviewsTab from "./ReviewsTab";
import "./BusinessDetails.css";
import { useDispatch, useSelector } from "react-redux";
// import { getUpdateBusiness } from "../../../redux/action/businessRegister/businessRegUpdateAction";
import { AuthRoutes } from "../../../RouteHandler/routeEnum";
import HomeContactDetails from "./contactDetails/HomeContactDetails";
import MobileContactDetails from "./contactDetails/MobileContactDetails";
import ShopContactDetails from "./contactDetails/ShopContactDetails";

import { NEW_API_BASE_URL } from "../../../utils/baseUrl";
import { StateProps } from "../../../utils/interfaces/businessDetails";
import SearchBar from "../../commonComponents/SearchBar/SearchBar";
import PgTopAdBanner from "../../commonComponents/AdBanner/PgTopAdBanner";
import PgBottomBanner from "../../commonComponents/AdBanner/PgBottomBanner";
const BusinessDetails: React.FC<StateProps> = ({ details, searched }) => {
  console.log("details", details);
  const [defaultSelected, setDefaultSelected] = useState<number>(0);
  return (
    <>
      <SearchBar />
      {/*--------- Add Area ------*/}
      {/* Main page begins here ..  */}
      <PgTopAdBanner />
      {/*--------- Food Item Area ------*/}
      <section className="fooditem_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="food_card">
                <div className="food_card_img">
                  <img
                    src={`${
                      details.coverphotoid
                        ? `${NEW_API_BASE_URL}/file/${details.coverphotoid}`
                        : "/images/page_image.png"
                    } `}
                    // src="/images"

                    alt="im"
                  />
                  <div className="food_card_img_inner">
                    <a href="#">
                      <img src="/images/share.png" alt="share_icon" />
                      <span>Share Page</span>
                    </a>
                  </div>
                </div>
                <div className="food_card_text">
                  <div className="card_text_inner">
                    <p>@{details.username}</p>
                    {!searched && (
                      <div className="company_info_edit_link">
                        <Link to={AuthRoutes.updateCompanyInfo}>edit</Link>
                      </div>
                    )}
                    <h3>{details.companyname} </h3>
                    <ul>
                      <li className="card_text_inner_ul_item">
                        <a href="#">Home Business</a>
                      </li>
                      <li className="card_text_inner_ul_item1">
                        <a href="#">Mobile</a>
                      </li>
                      <li className="card_text_inner_ul_item2">
                        <a href="#">Shop</a>
                      </li>
                    </ul>

                    <div
                      className="profileImg"
                      style={{
                        background: `url(${
                          details.logoid
                            ? `${NEW_API_BASE_URL}/file/${details.logoid}`
                            : "/images/home/inner_logo.png"
                        })center center no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="card_text_inner2">
                    <ul className="businessD_industries">
                      {details.industries.map((val: string, ind: number) => (
                        <li key={ind}>
                          <a href="#">{val}</a>
                        </li>
                      ))}
                      {!searched && (
                        <li>
                          <Link to={AuthRoutes.updateIndustries}>edit</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="card_text_inner2">
                    <ul className="businessD_industries">
                      {details.occupations.map((val: string, ind: number) => (
                        <li key={ind}>
                          <a href="#">{val}</a>
                        </li>
                      ))}
                      {!searched && (
                        <li>
                          <Link to={AuthRoutes.updateOccupation}>edit</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="card_text_inner3">
                    <div className="card_text_inner3_top">
                      <p className="card_text_inner3_top_pc">{details.bio}</p>
                    </div>
                    <div className="card_text_inner3_bottom">
                      <div className="card_text_inner3_bottom_left">
                        <p>
                          <a href="#">Following</a>
                          <img src="/images/heart.png" alt="heart_icon" />
                          2.376K
                        </p>
                      </div>
                      <div className="card_text_inner3_bottom_right">
                        <b>4.5</b>
                        <ul>
                          <li>
                            <a href="#">
                              <img src="/images/star.png" alt="star_icon" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/star.png" alt="star_icon" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/star.png" alt="star_icon" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/star.png" alt="star_icon" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/star.png" alt="star_icon" />
                            </a>
                          </li>
                        </ul>
                        <a href="#">
                          678 <span>reviews</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fooditem_area">
        <Container>
          <Tabs
            forceRenderTabPanel
            defaultIndex={defaultSelected}
            onSelect={(index) => setDefaultSelected(index)}
          >
            <div className="card_text_inner4">
              <TabList>
                <Tab>
                  <img
                    src={`/images/page/${
                      defaultSelected === 0 ? "icon1_act.png" : "icon1.png"
                    }`}
                    alt="iage"
                  />{" "}
                </Tab>
                <Tab>
                  <img
                    src={`/images/page/${
                      defaultSelected === 1 ? "icon2_act.png" : "icon2.png"
                    }`}
                    alt="imge"
                  />{" "}
                </Tab>
                <Tab>
                  <img
                    src={`/images/page/${
                      defaultSelected === 2 ? "icon3_act.png" : "icon3.png"
                    }`}
                    alt="iage"
                  />{" "}
                </Tab>
                <Tab>
                  <img
                    src={`/images/page/${
                      defaultSelected === 3 ? "icon4_act.png" : "icon4.png"
                    }`}
                    alt="imae"
                  />{" "}
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              {details.services && <ServicesTabs services={details.services} />}
            </TabPanel>
            <TabPanel>
              <Tabs
                forceRenderTabPanel
                defaultIndex={0}
                className="servtab_area contab_area"
              >
                <TabList className="nav nav-tabs" id="myTab">
                  {details.homebusiness.contactdetails && (
                    <Tab
                      className="nav-item businessDet_width"
                      disabled={
                        details.homebusiness.contactdetails ? false : true
                      }
                    >
                      <span className="nav-link">Home Business</span>
                    </Tab>
                  )}

                  {details.mobile.contactdetails && (
                    <Tab
                      className="nav-item  businessDet_width"
                      disabled={details.mobile.contactdetails ? false : true}
                    >
                      <span className="nav-link">Mobile </span>
                    </Tab>
                  )}
                  {details.shop.contactdetails && (
                    <Tab
                      className="nav-item businessDet_width "
                      disabled={details.shop.contactdetails ? false : true}
                    >
                      <span className="nav-link nav_link3">Shop </span>
                    </Tab>
                  )}

                  {!searched && (
                    <Link
                      className="contab_tab_edit_link"
                      to={AuthRoutes.update_business_details}
                    >
                      edit
                    </Link>
                  )}
                </TabList>
                {details.homebusiness.contactdetails && (
                  <TabPanel>
                    <div className="tab-content tab_content">
                      <HomeContactDetails homeBusiness={details.homebusiness} />
                    </div>
                  </TabPanel>
                )}
                {details.mobile.contactdetails && (
                  <TabPanel>
                    <div className="tab-content tab_content">
                      <MobileContactDetails mobile={details.mobile} />
                    </div>
                  </TabPanel>
                )}
                {details.shop.contactdetails && (
                  <TabPanel>
                    <div className="tab-content tab_content">
                      <ShopContactDetails shop={details.shop} />
                    </div>
                  </TabPanel>
                )}
              </Tabs>
            </TabPanel>
            <TabPanel>
              <SocialTabs />
            </TabPanel>
            <TabPanel>
              <ReviewsTab />
            </TabPanel>
          </Tabs>
        </Container>
      </section>

      {/*------- Contact tab Area -----*/}

      {/*--------- Add2 Area ------*/}
      <PgBottomBanner />
      {/*--- Footer Area-----*/}
    </>
  );
};

export default BusinessDetails;
