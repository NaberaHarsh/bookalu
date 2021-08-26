import React, { Fragment } from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import {
  TextInput,
  BusinessServiceTimePicker,
  CheckBox,
} from "../../../../../utils/form";
import { OnChange } from "react-final-form-listeners";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

interface Props {
  tabThreeInitailD: any;
  addLineBreak: (index: number, fieldValues: any) => void;
  removeLineBreak: (index: number) => void;
  removeService: (index: number, fields: any, masterField: any) => void;
  tabSelected: any;
}

const TabThreeServices: React.FC<Props> = ({
  tabThreeInitailD,
  addLineBreak,
  removeLineBreak,
  removeService,
  tabSelected,
}: Props) => {
  return (
    <div>
      {tabSelected ? (
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="step2_page_tab_pane step3_page_tab_pane">
              {/* {values.tab1 ? ( */}
              <>
                <div className="step6_page_tab_pane_item">
                  <label>Heading</label>
                  <Field
                    name={`services.tabThree.heading`}
                    type="text"
                    placeholder="Services Title  - for example Beauty Services"
                    component={TextInput}
                    // validate={required}
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
                          <img src="/images/dontknow.png" alt="images" />
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
                          <img src="/images/dontknow.png" alt="images" />
                        </OverlayTrigger>
                      </p>
                    </li>
                  </ul>

                  <div className="step6_page_tab_pane_item2_inner">
                    <FieldArray
                      name={`services.tabThree.subservices`}
                      // validate={requiredArray}
                    >
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
                                      <div className="step6_page_tab_pane_item2_inner_item1_inner2">
                                        {/*  .step6_page_tab_pane_item2_inner_item1_inner2:after{ style.css  line - 2546 */}
                                        <Field
                                          name={`${name}.timereqquired`}
                                          component={BusinessServiceTimePicker}
                                          // validate={required}
                                        >
                                          {({ input, meta, ...rest }) => {
                                            return (
                                              <>
                                                <TimePicker
                                                  allowEmpty={true}
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
                                                  value={moment(input.value)}
                                                  className="businessServTm"
                                                  // popupClassName="businessServTmPkr"
                                                />

                                                {meta.touched && meta.error && (
                                                  <span className="error">
                                                    *{meta.error}
                                                  </span>
                                                )}
                                              </>
                                            );
                                          }}
                                        </Field>

                                        <OnChange
                                          name={`${name}.timereqquired`}
                                        >
                                          {(val) => {}}
                                        </OnChange>
                                      </div>
                                      <div className="step6_page_tab_pane_item2_inner_item1_inner3">
                                        {/* <input type="text" placeholder="$350.50" /> */}
                                        <Field
                                          name={`${name}.price`}
                                          type="text"
                                          placeholder="$350.50"
                                          component={TextInput}
                                          // validate={composeValidators(
                                          //   required,
                                          //   mustBeNumber
                                          // )}
                                        />
                                      </div>
                                    </div>
                                    <div className="ServiceCheckTrash">
                                      <div className="step6_page_tab_pane_item2_inner_item2 ">
                                        <div className="step6_page_tab_pane_item2_inner_item2_inner1">
                                          <Field
                                            name={`${name}.appoinmentvia[${0}]`}
                                            type="checkbox"
                                            id="inner2_item1Check1"
                                            component={CheckBox}
                                            disabled={true}
                                          />
                                          <label htmlFor="inner2_item1Check1">
                                            Mobile
                                          </label>
                                        </div>
                                        <div className="step6_page_tab_pane_item2_inner_item2_inner2">
                                          <Field
                                            name={`${name}.appoinmentvia[${1}]`}
                                            type="checkbox"
                                            id="inner2_item1Check2"
                                            component={CheckBox}
                                            disabled={true}
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
                                            disabled={true}
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
                                              removeService(
                                                index,
                                                fields.value,
                                                fields
                                              );
                                              fields.remove(index);
                                            }}
                                            className="fas fa-trash-alt"
                                          ></i>
                                        </div>
                                      )}
                                    </div>
                                    {/*  */}
                                  </Fragment>
                                </div>
                                {fields.value[index].haslinebreak && (
                                  <div className="page6_tab_pane_bottom_area_inner">
                                    <div className="page6_line_break_remove"></div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        // index
                                        removeLineBreak(index);
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
                                  timereqquired: "2021-02-01T21:00:57-08:00",
                                  price: "",
                                  id: "",
                                  appoinmentvia:
                                    tabThreeInitailD.subservices[0]
                                      .appoinmentvia,
                                  appoinmentviastring:
                                    tabThreeInitailD.subservices[0]
                                      .appoinmentviastring,
                                  haslinebreak: false,
                                })
                              }
                            >
                              <img src="/images/plus.png" alt="images" />
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
                              <img src="/images/dontknow.png" alt="images" />
                            </OverlayTrigger>
                          </div>
                          <div className="page6_tab_pane_bottom_area_inner2">
                            <button
                              type="button"
                              className="page6_tab_pane_bottom_area_item3"
                              onClick={() =>
                                addLineBreak(
                                  fields.value.length - 1,
                                  fields.value
                                )
                              }
                            >
                              <img src="/images/plus.png" alt="images" />
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
                              <img src="/images/dontknow.png" alt="images" />
                            </OverlayTrigger>
                          </div>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>
              </>
              {/* // ) : (
    //   <h4>Please select checkbox to add services</h4>
    // )} */}
            </div>
          </div>
        </div>
      ) : (
        <h4>Please select tabThree checkbox to update services</h4>
      )}
      {/*--- page_link_area End-----*/}
    </div>
  );
};

export default TabThreeServices;
