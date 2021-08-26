import React, { Fragment, useState } from "react";
import { FieldArray } from "react-final-form-arrays";
import { Field } from "react-final-form";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import TextInput from "../../../Common/form/TextInput";
import TimePickerInput from "../../../Common/form/TimePickerInput";
const TabOne = () => {
  const [services, setServices] = useState([{ name: "", time: "", price: "" }]);
  const [linebreak, setLinebreak] = useState([]);

  const addField = () => {
    // .push({ name: "", time: "", price: "" })
    setServices((oldServices) => [
      ...oldServices,
      { name: "", time: "", price: "" },
    ]);
  };

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
              <Field
                name="services.tabOne.heading"
                type="text"
                placeholder="Services Title  - for example Beauty Services"
                component={TextInput}
              />
            </div>
            <div className="step6_page_tab_pane_item2">
              <ul>
                <li>
                  <p className="step6_page_tab_pane_item2_top1">Services</p>
                </li>
                <li>
                  <p className="step6_page_tab_pane_item2_top2">
                    Timing
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
                <FieldArray name="services.tabOne.services">
                  {({ fields }) => (
                    <>
                      {fields.map((name, index) => {
                        return (
                          <Fragment>
                            <div className="step6_repeat_content">
                              <Fragment key={name}>
                                <div className="step6_page_tab_pane_item2_inner_item1">
                                  <div className="step6_page_tab_pane_item2_inner_item1_inner1">
                                    <Field
                                      type="text"
                                      placeholder="add service - eg. facial"
                                      component={TextInput}
                                      name={`${name}.name`}
                                    />
                                  </div>
                                  <div className="step6_page_tab_pane_item2_inner_item1_inner2">
                                    {/*  .step6_page_tab_pane_item2_inner_item1_inner2:after{ style.css  line - 2546 */}
                                    <Field
                                      name={`${name}.timereqquired`}
                                      //   name=""
                                      component={TimePickerInput}
                                    />
                                  </div>
                                  <div className="step6_page_tab_pane_item2_inner_item1_inner3">
                                    {/* <input type="text" placeholder="$350.50" /> */}
                                    <Field
                                      type="text"
                                      placeholder="$350.50"
                                      component={TextInput}
                                      //   name="price"
                                      name={`${name}.price`}
                                    />
                                  </div>
                                </div>
                                <div className="step6_page_tab_pane_item2_inner_item2">
                                  <div className="step6_page_tab_pane_item2_inner_item2_inner1">
                                    <input
                                      type="checkbox"
                                      id="inner2_item1Check1"
                                    />
                                    <label htmlFor="inner2_item1Check1">
                                      Mobile
                                    </label>
                                  </div>
                                  <div className="step6_page_tab_pane_item2_inner_item2_inner2">
                                    <input
                                      type="checkbox"
                                      id="inner2_item1Check2"
                                    />
                                    <label htmlFor="inner2_item1Check2">
                                      Book online
                                    </label>
                                  </div>
                                  <div className="step6_page_tab_pane_item2_inner_item2_inner3">
                                    <input
                                      type="checkbox"
                                      id="inner2_item1Check3"
                                    />
                                    <label htmlFor="inner2_item1Check3">
                                      Call Now
                                    </label>
                                  </div>
                                </div>

                                {/* Remove service */}
                                <div className="trashStepForm">
                                  {" "}
                                  <i
                                    onClick={() => fields.remove(index)}
                                    className="fas fa-trash-alt"
                                  ></i>
                                </div>
                              </Fragment>
                            </div>
                            {fields.value[0].haslinebreak && (
                              <div className="page6_tab_pane_bottom_area_inner">
                                <div className="page6_line_break_remove"></div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    // fields.update((index, 0) => {
                                    //     console.log(fields[index])
                                    // })
                                    fields.value[0].haslinebreak = false;
                                    console.log(fields.value);
                                    alert(
                                      JSON.stringify(fields.value, undefined, 2)
                                    );
                                  }}
                                  className="page6_tab_pane_bottom_area_item1 page6_line_rm_btn"
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                          </Fragment>
                        );
                      })}
                      {/* Add Service  */}
                      <div className="page6_tab_pane_bottom_area_inner2">
                        <button
                          type="button"
                          className="page6_tab_pane_bottom_area_item2"
                          onClick={() =>
                            fields.push({
                              name: "",
                              time: "",
                              price: "",
                              haslinebreak: false,
                            })
                          }
                        >
                          <img src="images/plus.png" alt="images" />
                          add another Service
                        </button>
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Add More Services
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </div>
                      <div className="page6_tab_pane_bottom_area_inner2">
                        <button
                          type="button"
                          className="page6_tab_pane_bottom_area_item3"
                          onClick={() => {
                            console.log("Trigger");
                          }}
                        >
                          <img src="images/plus.png" alt="images" />
                          add a Line break
                        </button>
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Add a Line break to Specify different service
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </div>
                    </>
                  )}
                </FieldArray>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--- page_link_area End-----*/}

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page6_tab_pane_bottom_area_inner3">
              <a href="#" className="page6_tab_pane_bottom_area_item3">
                <img src="images/plus.png" alt="images" />
                add a line break
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TabOne;
