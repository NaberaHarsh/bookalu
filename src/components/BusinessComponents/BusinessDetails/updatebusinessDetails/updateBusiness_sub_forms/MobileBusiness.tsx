import React, { useState } from "react";
import { Field } from "react-final-form";
import { Col } from "react-bootstrap";
import { FieldArray } from "react-final-form-arrays";
import { OnChange } from "react-final-form-listeners";
import {
  CheckBox,
  AddressLookup,
  TextInput,
  PhoneNumber,
  TimePickerInput,
} from "../../../../../utils/form";
import "./UpdateContactDetails.css";

interface Props {
  selected: {
    home: any;
    shop: any;
    mobile: any;
  };
}

const MobileBusiness: React.FC<Props> = ({ selected: { mobile } }: Props) => {
  const [addressToggle, setAddressToggle] = useState(false);

  return (
    <>
      {mobile === "mobile" ? (
        <>
          <Col sm={12} md={6}>
            <div className="OpnningTimesMain">
              <div className="contab_tab_inner_left_title updatebusiness_title">
                <h5>Opening times</h5>
              </div>
              <div className="updatebusiness_openingtime">
                <FieldArray name={`openingtimes.mobile`}>
                  {({ fields }) => {
                    return (
                      <>
                        {fields.map((name, index) => {
                          return (
                            <div className="operationTmDay" key={index}>
                              <div className="step3_tab_pane_item_inner pLeftUnset pdbottm dayWidth">
                                <div className="step3_tab_pane_item_inner_item">
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

                              <div className="step3_tab_pane_item_inner pLeft dayWidth ">
                                <div className="step3_tab_pane_item_inner1_item">
                                  <Field
                                    name={`${name}.starttime`}
                                    component={TimePickerInput}
                                    placeholder={"00:00"}
                                    disabled={fields.value[index].day === null}
                                  />
                                  <OnChange name={`${name}.starttime`}>
                                    {(val) => console.log(val)}
                                  </OnChange>
                                </div>
                              </div>

                              <div className="step3_tab_pane_item_inner step3_tab_pane_item_inner2">
                                <div className="step3_tab_pane_item_inner2_item">
                                  <Field
                                    name={`${name}.endtime`}
                                    component={TimePickerInput}
                                    disabled={fields.value[index].day === null}
                                  />
                                  <OnChange name={`${name}.endtime`}>
                                    {(val) => console.log(val)}
                                  </OnChange>
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
          </Col>
          <Col
            sm={12}
            md={6}
            className="contab_tab_inner_right updatebusiness_border"
          >
            <div className="right_side">
              <div className="contab_tab_inner_right_title updatebusiness_title">
                <h5>Contact Details</h5>
              </div>
              <div className="contab_tab_inner_right_address">
                <>
                  <div className="step2_page_tab_pane_right updBusDetail_right">
                    {/* <Field
                      name={`contactdetails.mobile.address`}
                      placeholder="Search Address"
                      component={AddressLookup}
                      disabled={addressToggle}
                      calledFrom="updatemobilebusiness"
                      id={"updatemobilebusiness"}
                    />

                    <button
                      type="button"
                      className={`${
                        addressToggle ? "txtEanble" : "txtDisable"
                      } searchToggle`}
                      onClick={() => setAddressToggle(!addressToggle)}
                    >{`${
                      addressToggle
                        ? "Enable Search address"
                        : "Disable Search address"
                    }`}</button> */}

                    {/* <div className="addressInfo">
                      <label className="agree_terms">Full Address -</label>
                    </div> */}
                    <Field
                      name={`contactdetails.mobile.address.addressLine1`}
                      placeholder="Address line 1.."
                      component={TextInput}
                    />
                    <Field
                      name={`contactdetails.mobile.address.addressLine2`}
                      placeholder="Address line 2.."
                      component={TextInput}
                    />
                    <div className="signupName">
                      <Field
                        name={`contactdetails.mobile.address.county`}
                        placeholder="County"
                        component={TextInput}
                        className="mr-1"
                      />

                      <Field
                        name={`contactdetails.mobile.address.town`}
                        placeholder="Town"
                        component={TextInput}
                      />
                    </div>

                    <div className="signupName">
                      <Field
                        name={`contactdetails.mobile.address.country`}
                        placeholder="Country"
                        component={TextInput}
                        className="mr-1"
                      />

                      <Field
                        name={`contactdetails.mobile.address.postcode`}
                        placeholder="Post Code"
                        component={TextInput}
                      />
                    </div>
                  </div>
                  <div className="step2_page_tab_pane_right updBusDetail_right">

                     <div className="number_wrapper">
                        <span className="country_code">+44</span>
                        <Field
                          type="text"
                          name={`contactdetails.mobile.phonenumber1`}
                          placeholder="Phone number 1"
                          component={TextInput}  
                        />
                       </div>            
                  
                     <div className="number_wrapper">
                          <span className="country_code">+44</span>
                          <Field
                            type="text"
                            name={`contactdetails.mobile.phonenumber2`}
                            placeholder="Phone number 2"
                            component={TextInput}  
                          />
                      </div>

                    <Field
                      type="text"
                      name={`contactdetails.mobile.email`}
                      placeholder="Email address"
                      component={TextInput}
                      //   validate={composeValidators(isValidEmail)}
                    />
                  </div>
                </>
              </div>
            </div>
          </Col>
        </>
      ) : (
        <h4>
          Please click on checkbox to update the tab content of mobile business
        </h4>
      )}
    </>
  );
};

export default MobileBusiness;
