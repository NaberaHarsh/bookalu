import React, { Fragment } from "react";
import { FieldArray } from "react-final-form-arrays";
import { Field } from "react-final-form";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  TextInput,
  CheckBox,
  BusinessServiceTimePicker,
  TimePickerDropdown,
  HourMinutesSelect,
} from "../../../../utils/form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer";
import { businessRegPgVal } from "../../../../redux/action/businessPagesAction/businessRegPgVal";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import { OnChange } from "react-final-form-listeners";
import "./BusinessService.css";
import { composeValidators, timeRequired } from "../validation";

const BusinessServiceThree: React.FC = () => {
  const { values } = useSelector((state: RootState) => state.businessRegPgVal);

  const dispatch = useDispatch();

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
            {values.tab3 ? (
              <>
                <div className="step6_page_tab_pane_item">
                  <label>Heading</label>
                  <Field
                    name={`services.tabThree.heading`}
                    type="text"
                    placeholder="Services Title  - for example Beauty Services"
                    component={TextInput}
                  />
                </div>
                <div className="step6_page_tab_pane_item2">
                  <ul>
                    <li>
                      <p className="step6_page_tab_pane_item2_top1">
                        Services{" "}
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Enter the individual services you provide
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </p>
                    </li>
                    <li>
                      <p className="step6_page_tab_pane_item2_top2">
                        Timing
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              If this service is available for online bookings
                              you must specify a time period. For example
                              Haircut 30 mins
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </p>
                    </li>
                    <li>
                      <p className="step6_page_tab_pane_item2_top3">
                        Price{" "}
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Enter the price for this service or tick the check
                              box for POA if pricing needs to be discussed prior
                              to booking.
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                        &nbsp;&nbsp;&nbsp;&nbsp; POA{" "}
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Check the tick box to display POA instead of price
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </p>
                    </li>
                    <li>
                      <p className="step6_page_tab_pane_item2_top5">
                        Mobile{" "}
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Check the tick box if this service is available
                              for mobile appointments. 30 mins will be added
                              either side of the time period stated to allow for
                              travel
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </p>
                    </li>
                    <li>
                      <p className="step6_page_tab_pane_item2_top6">
                        Booking and Enquiries{" "}
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              Check the tick box to add a book now and/or call
                              now button for this service. Book now buttons will
                              allow online bookings to be added to your
                              calendar.
                            </Tooltip>
                          }
                        >
                          <img src="images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </p>
                    </li>
                  </ul>

                  <div className="step6_page_tab_pane_item2_inner">
                    <FieldArray name={`services.tabThree.subservices`}>
                      {({ fields }) => (
                        <>
                          {fields.map((name, index) => {
                            return (
                              <Fragment>
                                <div className="step6_repeat_content">
                                  <Fragment key={name}>
                                    <div className="step6_page_tab_pane_item2_inner_item1 RcTimepicker">
                                      <div className="step6_page_tab_pane_item2_inner_item1_inner1">
                                        <Field
                                          type="text"
                                          placeholder="add service - eg. facial"
                                          component={TextInput}
                                          name={`${name}.name`}
                                          // validate={required}
                                        />
                                      </div>
                                      <div className="step6_page_tab_pane_item2_inner_item1_inner2 duration-picker">
                                        {/*  .step6_page_tab_pane_item2_inner_item1_inner2:after{ style.css  line - 2546 */}
                                        {/* <Field
                                          name={`${name}.timereqquired`}

                                          // validate={required}
                                        >
                                          {({ input, meta, ...rest }) => {
                                            return (
                                              <TimePicker
                                                name={input.name}
                                                onChange={(value) => {
                                                  if (value && value.format())
                                                    input.onChange(
                                                      value.format()
                                                    );
                                                }}
                                                {...rest}
                                                popupClassName="businessServTmPkr"
                                                showSecond={false}
                                                defaultValue={moment()}
                                                value={moment(input.value)}
                                                className="businessServTm"
                                                // popupClassName="businessServTmPkr"
                                              />
                                            );
                                          }}
                                        </Field> */}
                                        <Field
                                          name={`${name}.timereqquired`}
                                          component={HourMinutesSelect}
                                          className="service_time_picker"
                                          required={
                                            values.services.tabThree
                                              .subservices[index]
                                              .appoinmentvia[1] === true
                                              ? true
                                              : false
                                          }
                                          validate={composeValidators(
                                            timeRequired
                                          )}
                                          maxValue={"11:59:59"}
                                          hideSeconds={true}
                                          formatPattern={"HH:mm"}
                                          style={{
                                            width: "100%",
                                            maxWidth: 190,
                                            background: "white",
                                          }}
                                          value={
                                            values.services.tabThree
                                              .subservices[index].timereqquired
                                          }
                                        />
                                        <OnChange
                                          name={`${name}.timereqquired`}
                                        >
                                          {(val) => {
                                            if (val && val.length <= 5) {
                                              values.services.tabThree.subservices[
                                                index
                                              ].timereqquired = val;
                                              dispatch(
                                                businessRegPgVal(values)
                                              );
                                            }
                                          }}
                                        </OnChange>
                                      </div>
                                      <div className="step6_page_tab_pane_item2_inner_item1_inner3">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control prize"
                                            placeholder="£0.00"
                                            value={
                                              values.services.tabThree
                                                .subservices[index].price
                                            }
                                            onChange={(e) => {
                                              values.services.tabThree.subservices[
                                                index
                                              ].price = e.target.value;
                                              dispatch(
                                                businessRegPgVal(values)
                                              );
                                            }}
                                            readOnly={
                                              values.services.tabThree
                                                .subservices[index].poa
                                            }
                                          />
                                          <div className="input-group-append">
                                            <div className="input-group-text poa-checkbox">
                                              <input
                                                type="checkbox"
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                }}
                                                value={
                                                  values.services.tabThree
                                                    .subservices[index].poa
                                                }
                                                checked={
                                                  values.services.tabThree
                                                    .subservices[index].poa
                                                }
                                                onChange={(e) => {
                                                  if (e.target.checked) {
                                                    values.services.tabThree.subservices[
                                                      index
                                                    ].price = "POA";
                                                    values.services.tabThree.subservices[
                                                      index
                                                    ].poa = true;
                                                    dispatch(
                                                      businessRegPgVal(values)
                                                    );
                                                  } else {
                                                    values.services.tabThree.subservices[
                                                      index
                                                    ].price = "";
                                                    values.services.tabThree.subservices[
                                                      index
                                                    ].poa = false;
                                                    dispatch(
                                                      businessRegPgVal(values)
                                                    );
                                                  }
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="step6_page_tab_pane_item2_inner_item2_inner1 ml-3">
                                      <Field
                                        name={`${name}.appoinmentvia[${0}]`}
                                        type="checkbox"
                                        id="inner2_item1Check1"
                                        component={CheckBox}
                                        disabled={
                                          values.mobile === null ||
                                          values.mobile === ""
                                        }
                                      />
                                      <label htmlFor="inner2_item1Check1">
                                        Mobile
                                      </label>
                                    </div>

                                    <div className="ServiceCheckTrash">
                                      <div className="step6_page_tab_pane_item2_inner_item2">
                                        <div className="step6_page_tab_pane_item2_inner_item2_inner2">
                                          <Field
                                            name={`${name}.appoinmentvia[${1}]`}
                                            type="checkbox"
                                            id="inner2_item1Check2"
                                            component={CheckBox}
                                            disabled={
                                              values.services.tabThree
                                                .subservices[index].poa
                                            }
                                          />

                                          <label htmlFor="inner2_item1Check2">
                                            Book online
                                          </label>
                                        </div>
                                        <div className="step6_page_tab_pane_item2_inner_item2_inner3">
                                          <Field
                                            name={`${name}.appoinmentvia[${2}]`}
                                            type="checkbox"
                                            id="inner2_item1Check3"
                                            component={CheckBox}
                                            // disabled={true}
                                          />
                                          <label htmlFor="inner2_item1Check3">
                                            Call Now
                                          </label>
                                        </div>
                                      </div>

                                      {/* Remove service */}
                                      {fields.value.length > 1 && (
                                        <div className="trashStepForm">
                                          {" "}
                                          <i
                                            onClick={() => {
                                              if (
                                                fields.value[index]
                                                  .haslinebreak === true &&
                                                index > 0
                                              ) {
                                                fields.value[
                                                  index - 1
                                                ].haslinebreak = true;
                                                values.services.tabThree.subservices[
                                                  index - 1
                                                ].haslinebreak = true;
                                                dispatch(
                                                  businessRegPgVal(values)
                                                );
                                              }

                                              fields.remove(index);
                                            }}
                                            className="fas fa-trash-alt"
                                          ></i>
                                        </div>
                                      )}
                                    </div>
                                  </Fragment>
                                </div>
                                {fields.value[index].haslinebreak && (
                                  <div className="page6_tab_pane_bottom_area_inner">
                                    <div className="page6_line_break_remove"></div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        let test = fields.value[index];
                                        test.haslinebreak = false;
                                        values.services.tabThree.subservices[
                                          index
                                        ].haslinebreak = false;
                                        dispatch(businessRegPgVal(values));
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
                                  timereqquired: "00:30",
                                  price: "",
                                  appoinmentvia: [
                                    values.home,
                                    values.mobile,
                                    values.shop,
                                  ],
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
                                let test =
                                  fields.value[fields.value.length - 1];
                                // console.log(test);
                                test.haslinebreak = true;
                                values.services.tabThree.subservices[
                                  fields.value.length - 1
                                ].haslinebreak = true;
                                dispatch(businessRegPgVal(values));
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
              </>
            ) : (
              <h6>Please select the checkbox to add services</h6>
            )}
          </div>
        </div>
      </div>

      {/*--- page_link_area End-----*/}
    </div>
  );
};

export default BusinessServiceThree;
