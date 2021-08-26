import React, { useState } from "react";
import { Field } from "react-final-form";
import {
  TextInput,
  PhoneNumber,
  AddressLookup,
  CountySelectInput,
} from "../../../../utils/form";
import { RootState } from "../../../../redux/reducer";
import { useSelector } from "react-redux";
import {
  isValidEmail,
  required,
  composeValidators,
  postCodeValidation,
  requiredCounty,
} from "../validation";

const ShopBusiness: React.FC = () => {
  const { values } = useSelector((state: RootState) => state.businessRegPgVal);

  // const [addressToggle, setAddressToggle] = useState(false);

  return (
    <div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="step2_page_tab_pane">
            {values.shop === "shop" ? (
              <>
                <div className="step2_page_tab_pane_left">
                  {/* <Field
                    name="address"
                    placeholder="Address"
                    component={AddressLookup}
                    disabled={addressToggle}
                    id="shop-business"
                    calledFrom="shopBusiness"
                  />
                  <button
                    type="button"
                    className={`${
                      addressToggle ? "txtEanble" : "txtDisable"
                    } searchToggle addressBtnToggle step2search`}
                    onClick={() => setAddressToggle(!addressToggle)}
                  >{`${
                    addressToggle
                      ? "Enable Search address"
                      : "Disable Search address"
                  }`}</button>

                  <div className="addressInfo">
                    <label className="agree_terms">Full Address -</label>
                  </div> */}
                  <Field
                    name="contactdetails.shop.address.addressLine1"
                    placeholder="Address line 1.."
                    component={TextInput}
                    value={values.contactdetails.shop.address.addressLine1}
                  />
                  <Field
                    name="contactdetails.shop.address.addressLine2"
                    placeholder="Address line 2.."
                    value={values.contactdetails.shop.address.addressLine2}
                    component={TextInput}
                  />
                  <div className="signupName">
                    <div className="business_ad_form mr-1">
                      <Field
                        name="contactdetails.shop.address.town"
                        placeholder="Town"
                        value={values.contactdetails.shop.address.town}
                        component={TextInput}
                        // className="ml-1"
                      />
                    </div>
                    <div className="business_ad_form mr-1">
                      <Field
                        name="contactdetails.shop.address.county"
                        placeholder="County"
                        value={values.contactdetails.shop.address.county}
                        options={[
                          "",
                          "Avon",
                          "Bedfordshire",
                          "Berkshire",
                          "Buckinghamshire",
                          "Cambridgeshire",
                          "Cheshire",
                          "Cleveland",
                          "Cornwall",
                          "County Durham",
                          "Cumbria",
                          "Derbyshire",
                          "Devon",
                          "Dorset",
                          "East Sussex",
                          "Essex",
                          "Gloucestershire",
                          "Hampshire",
                          "Herefordshire",
                          "Hertfordshire",
                          "Isle of Wight",
                          "Kent",
                          "Lancashire",
                          "Leicestershire",
                          "Lincolnshire",
                          "London",
                          "Merseyside",
                          "Middlesex",
                          "Norfolk",
                          "North Humberside",
                          "North Yorkshire",
                          "Northamptonshire",
                          "Northumberland",
                          "Nottinghamshire",
                          "Oxfordshire",
                          "Shropshire",
                          "Somerset",
                          "South Humberside",
                          "South Yorkshire",
                          "Staffordshire",
                          "Suffolk",
                          "Surrey",
                          "Tyne and Wear",
                          "Warwickshire",
                          "West Midlands",
                          "West Sussex",
                          "West Yorkshire",
                          "Wiltshire",
                          "Worcestershire",
                        ]}
                        component={CountySelectInput}
                        className="ml-1"
                        validate={composeValidators(requiredCounty)}
                      />
                    </div>
                  </div>

                  <div className="signupName">
                    <div className="business_ad_form mr-1">
                      <Field
                        name="contactdetails.shop.address.postcode"
                        placeholder="Post Code"
                        component={TextInput}
                        value={values.contactdetails.shop.address.postcode}
                        validate={composeValidators(
                          required,
                          postCodeValidation
                        )}
                      />
                    </div>
                    <div className="business_ad_form mr-1">
                      <Field
                        name="contactdetails.shop.address.country"
                        placeholder="Country"
                        component={TextInput}
                        value={values.contactdetails.shop.address.country}
                      />
                    </div>
                  </div>
                </div>
                <div className="step2_page_tab_pane_right">
                  {/* <Field
                    type="text"
                    name="contactdetails.shop.phonenumber1"
                    placeholder="Phone number 1"
                    component={PhoneNumber}
                  />
                  <Field
                    type="text"
                    name="contactdetails.shop.phonenumber2"
                    placeholder="Phone number 2"
                    component={PhoneNumber}
                  /> */}
                  <div className="number_wrapper">
                    <span className="country_code">+44</span>
                    <Field
                      name="contactdetails.shop.phonenumber1"
                      type="text"
                      placeholder="Mobile number"
                      component={TextInput}
                    />
                  </div>
                  <div className="number_wrapper">
                    <span className="country_code">+44</span>
                    <Field
                      name="contactdetails.shop.phonenumber2"
                      placeholder="Telephone number"
                      type="text"
                      component={TextInput}
                    />
                  </div>
                  <Field
                    type="text"
                    name="contactdetails.shop.email"
                    placeholder="Email address"
                    component={TextInput}
                    validate={isValidEmail}
                  />
                </div>
              </>
            ) : (
              <h6>Please select Home business to fill the details </h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBusiness;
