import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../../RouteHandler/routeEnum";
import { Appointmentcalendar } from "../../commonComponents/Popups/Appointmentcalendar";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";

interface StateProps {
  services: any;
  companyId: number;
}

const ServicesTabs: React.FC<StateProps> = ({ services, companyId }) => {
  const result = Object.keys(services).map((key) => [key, services[key]]);
  console.log("result", result);
  const [appointmentBooking, setAppointmentBooking] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<any>("");

  console.log("serviceId", serviceId);

  const appointmentClickHandler = () => {
    setAppointmentBooking(!appointmentBooking);
  };

  return (
    <>
      <section className="servtab_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Tabs
                forceRenderTabPanel
                defaultIndex={0}
                className="servtab_area contab_area"
              >
                <TabList className="nav nav-tabs" id="myTab">
                  {result.map((tabKey, index) => {
                    if (tabKey[1]) {
                      return (
                        <Tab className="nav-item businessDet_width">
                          <span className="nav-link">{tabKey[1].heading}</span>
                        </Tab>
                      );
                    }
                  })}

                  <Link
                    className="contab_tab_edit_link"
                    to={AuthRoutes.updateServices}
                  >
                    edit
                  </Link>
                </TabList>
                {result.map((tabKey, index) => {
                  if (tabKey[1]) {
                    return (
                      <TabPanel key={tabKey[1].id}>
                        <div className="tab-content tab_content active">
                          <div
                            className="tab-pane fade show active tab_content_inner"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            {tabKey[1].subservices.map((service: any) => {
                              return (
                                <div className="tab_content_inner_item">
                                  <div className="row">
                                    <div className="col-10">
                                      <div
                                        className={`inner_item_left ${
                                          service.haslinebreak &&
                                          "inner_item_left_border"
                                        }`}
                                      >
                                        <p>
                                          {service.name}
                                          <span>
                                            <img
                                              src="/images/icon_set/icon_12.png"
                                              alt="icon"
                                            />
                                            {service.price}
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="col-2 sm-container"
                                      style={{ display: "flex" }}
                                    >
                                      <div
                                        className="inner_item_leftt"
                                        style={{
                                          width: "100%",
                                          paddingRight: "20px",
                                        }}
                                      >
                                        {service.appoinmentvia &&
                                          service.appoinmentvia[1] === 1 && (
                                            <a
                                              className="calenderIcon"
                                              type="button"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                appointmentClickHandler();
                                                setServiceId(service.id);
                                              }}
                                              href="/"
                                            >
                                              <i
                                                className="far fa-calendar-alt"
                                                style={{ fontSize: 30 }}
                                              ></i>
                                            </a>
                                          )}

                                        {/* {service.appoinmentvia.map(
                                          (appointmentVia: any) => {
                                            if (appointmentVia === "mobile") {
                                              return (
                                                //  <button
                                                //   className="inner_item_right_btn3"
                                                //   type="button"
                                                // >
                                                //   Call Now
                                                // </button>

                                                <a
                                                  className="calenderIcon"
                                                  type="button"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    appointmentClickHandler();
                                                  }}
                                                  href="/"
                                                >
                                                  <i
                                                    className="far fa-calendar-alt"
                                                    style={{ fontSize: 30 }}
                                                  ></i>
                                                </a>
                                              );
                                            }
                                          }
                                        )}
                                     */}
                                      </div>

                                      <div
                                        className="inner_item_right"
                                        style={{ paddingRight: "10px" }}
                                      >
                                        <a
                                          className="calenderIcon"
                                          type="button"
                                          href="/"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                          }}
                                        >
                                          <i
                                            className="fas fa-phone"
                                            style={{ fontSize: 30 }}
                                          ></i>
                                        </a>
                                      </div>

                                      {/* <div className ="inner_item_leftt" style= {{width:'100%',paddingRight:'20px'}} >
                                        <button
                                          className="inner_item_right_btn" 
                                          type="button"
                                        >
                                          Call Now
                                        </button>
                                      </div>

                                      <div className="inner_item_right" style = {{paddingRight:'10px'}}>
                                        {service.appoinmentvia.map(
                                          (appointmentVia: any) => {
                                            if (appointmentVia === "mobile") {
                                              return (
                                                //  <button
                                                //   className="inner_item_right_btn3"
                                                //   type="button"
                                                // >
                                                //   Call Now
                                                // </button>

                                                <button
                                                  className="inner_item_right_btn " 
                                                  type="button"
                                                  onClick={() =>
                                                    appointmentClickHandler()
                                                  }
                                                >
                                                  Book Now
                                                  <i className="far fa-calendar-alt" style={{ fontSize: 48 }}></i>
                                                </button>
                                              );
                                            }
                                          }
                                        )}
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </TabPanel>
                    );
                  }
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <Appointmentcalendar
        companyId={companyId}
        show={appointmentBooking}
        onHide={appointmentClickHandler}
        serviceId={serviceId}
      />
    </>
  );
};

export default ServicesTabs;
