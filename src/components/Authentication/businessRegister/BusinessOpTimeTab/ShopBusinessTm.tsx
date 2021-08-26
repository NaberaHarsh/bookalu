import React from "react";
// import TimePickerInput from "../../../Common/form/TimePickerInput";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
// import CheckBox from "../../../Common/form/CheckBox";
import { TimePickerInput, CheckBox } from "../../../../utils/form";
import { OnChange } from "react-final-form-listeners";
import "./BusinessTime.css";
const ShopBusinessTm: React.FC = () => {
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
            <div className="step3_page_tab_pane_item">
              {/* Monday  */}

              <FieldArray name={"openingtimes.shop"}>
                {({ fields }) => {
                  return (
                    <>
                      {fields.map((name, index) => {
                        return (
                          <div className="operationTmDay">
                            <div className="step3_tab_pane_item_inner ">
                              <div className="step3_tab_pane_item_inner_item responsive_step_3_update">
                                <Field
                                  type="checkbox"
                                  name={`${name}.day`}
                                  id="home_business_monday_checkbox"
                                  format={(v) => v === index}
                                  parse={(v) => (v ? index : null)}
                                  component={CheckBox}
                                />

                                <label htmlFor="home_business_monday_checkbox">
                                  {fields.value[index].val}
                                </label>
                              </div>
                            </div>

                            <div className="step3_time_inpt mb5">
                              <div className="step3_tab_pane_item_inner step3_tab_pane_item_inner1 ">
                                <div className="step3_tab_pane_item_inner1_item ">
                                  <Field
                                    name={`${name}.starttime`}
                                    component={TimePickerInput}
                                    disabled={fields.value[index].day === null}
                                    className="time_selector"
                                  />
                                  <OnChange name={`${name}.starttime`}>
                                    {(val) => console.log(val)}
                                  </OnChange>
                                </div>
                              </div>

                              <div className="step3_tab_pane_item_inner step3_tab_pane_item_inner2 ">
                                <div className="step3_tab_pane_item_inner2_item">
                                  <Field
                                    name={`${name}.endtime`}
                                    component={TimePickerInput}
                                    disabled={fields.value[index].day === null}
                                    className="time_selector"
                                  />
                                  <OnChange name={`${name}.endtime`}>
                                    {(val) => console.log(val)}
                                  </OnChange>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBusinessTm;
