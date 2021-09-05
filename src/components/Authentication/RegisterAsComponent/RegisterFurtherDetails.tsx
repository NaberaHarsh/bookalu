import React, { useState, useEffect, useRef, Fragment } from "react";
// Form input field imports
import {
  TextInput,
  CheckboxInput,
  PhoneNumber,
  AddressLookup,
} from "../../../utils/form";
// Loader
import Loader from "../../../utils/Loader/Loader";
import { validate } from "../../../utils/validations/RegisterFurtherDetails";
import {
  SubmittingData,
  address,
  ValidationFlag,
} from "../../../utils/interfaces/register";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
// Redux Calls
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer/index";
import { fetchRequest } from "../../../redux/action/authentication/userRegister/userRegister";
// Authentication common components
import AuthenticationHeader from "../AuthCommonUI/AuthenticationHeader";
import AuthSideDetails, {
  CommonColumnField,
  CommonFooter,
} from "../AuthCommonUI/AuthSideDetails";
import "./RegisterFurtherDetails.css";

import { registerUser } from "../../../redux/action/authentication/userRegister/userRegister";
import RegisterSuccess from "../../commonComponents/Popups/RegisterSuccess/RegisterSuccess";
import ManualAddressForm from "../../commonComponents/Popups/manualAddressForm/MannualAddressForm";
import { OnChange } from "react-final-form-listeners";

import dropdown from "../../../utils/form/dropdown";

import DatePicker from "../../../utils/form/Datepicker";
import {
  required,
  composeValidators,
  postCodeValidation,
} from "../businessRegister/validation";

const RegisterFurtherDetails: React.FC = () => {
  const isFirstRender = useRef(true);
  const ref1 = useRef(true);
  const ref2 = useRef(true);
  const dispatch = useDispatch();
  /* prettier-ignore */
  const userRegisterReducer = useSelector((state: RootState) => state.userRegisterReducer);
  /* prettier-ignore */
  const registerdReducerResponse = useSelector((state: RootState) => state.userRegisterResponse);
  /* prettier-ignore */
  const searchSelectedRducer = useSelector((state: RootState) => state.searchSelectedRducer);

  const [details, setDetails] = useState<SubmittingData>({
    firstName: "",
    lastName: "",
    telephone: "",
    mobile: "",
    address: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    county: "",
    country: "United Kingdom",
    postcode: "",
    checkbox: false,
  });

  const showHideregisterSuccess = () => {
    setRegisterSuccess(!registerSuccess);
    setRedirect(true);
  };

  const hideAddressForm = () => {
    setAddressForm(!addressForm);
  };

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [checkIfEmlPassExists, setCheckIfEmlPassExists] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loader, setLoader] = useState(false);
  const [addressToggle, setAddressToggle] = useState(false);
  const [addressForm, setAddressForm] = useState(false);
  const [validationFlag, setValidationFlag] = useState<ValidationFlag>({
    postCodeFlag: false,
    mobileOrTelephone: false,
  });

  // Check if
  useEffect(() => {
    const { data, success, error, dataReceived } = registerdReducerResponse;
    if (error && !dataReceived) setRedirect(true);
    else if (success && dataReceived) {
      dispatch(
        registerUser({
          email: data.email,
          password: data.password,
          state: 2,
        })
      );
    }
  }, []);

  // Check if user is registerd successfully and redirect to login screen
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const { dataReceived, success } = userRegisterReducer;

      if (dataReceived) setLoader(false);
      if (dataReceived && success) {
        setRegisterSuccess(true);
      }
      // isFirstRender.current = true;
    }
  }, [userRegisterReducer]);

  // Selecetd address
  useEffect(() => {
    if (ref1.current) {
      ref1.current = false;
    } else {
      ref1.current = true;
      const { dataReceived, data } = searchSelectedRducer;
      if (dataReceived) {
        setDetails({
          ...details,
          address: data.address,
          postcode: data.postcode,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          town: data.town,
          county: data.county,
          country: data.country,
        });
        setAddressToggle(true);
      }
    }
  }, [searchSelectedRducer]);

  // Make API call for submit and complete registeration process
  const submitRegister = async (e: SubmittingData) => {
    if (!e.mobile && !e.telephone)
      return setValidationFlag({ ...validationFlag, mobileOrTelephone: true });
    setLoader(true);
    const { data } = registerdReducerResponse;
    await dispatch(
      fetchRequest({
        firstName: e.firstName,
        lastName: e.lastName,
        mobile: e.mobile ? "+44" + e.mobile : "",
        telephone: e.telephone ? "+44" + e.telephone : "",
        postCode: e.postcode,
        emailId: data.email,
        password: data.password,
        addressLine1: e.addressLine1,
        addressLine2: e.addressLine2,
        town: e.town,
        county: e.county,
        country: e.country,
      })
    );
  };

  const telephoneOrMobile = () =>
    setValidationFlag({ ...validationFlag, mobileOrTelephone: false });
  return (
    <div>
      <div>
        <AuthenticationHeader />
        {/* site_main Area Start */}
        <section className="site_main signup_page2">
          <div className="container">
            <Row className="row">
              <CommonColumnField />

              <Col md={6}>
                <div className="site_main_right">
                  <div className="right_inner_top">
                    <img src="images/right_logo.png" alt="right_images" />
                    <h1>Create an account</h1>
                    <p className="sign_up2_p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magnaaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                  <div className="right_inner_mid">
                    <Form
                      onSubmit={(e: SubmittingData) => submitRegister(e)}
                      initialValues={details}
                      validate={validate}
                    >
                      {({ handleSubmit, pristine, submitting, values }) => (
                        <form
                          className="site_form"
                          id="signup2"
                          onSubmit={handleSubmit}
                        >
                          <div className="address_fields50">
                            <div>
                              <Field
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                component={TextInput}
                              />
                            </div>
                            <OnChange name="firstName">
                              {(value) =>
                                setDetails({ ...details, firstName: value })
                              }
                            </OnChange>
                            <div className="ml8">
                              <Field
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                component={TextInput}
                              />
                            </div>
                            <OnChange name="lastName">
                              {(value) =>
                                setDetails({ ...details, lastName: value })
                              }
                            </OnChange>
                          </div>

                          <div className="number_wrapper">
                            <span className="country_code">+44</span>
                            <Field
                              name="mobile"
                              type="text"
                              placeholder="Mobile number"
                              component={TextInput}
                              onFocus={() => telephoneOrMobile()}
                            />
                          </div>

                          {validationFlag.mobileOrTelephone && (
                            <span className="error">
                              *Either Mobile Or Telephone number is required{" "}
                            </span>
                          )}

                          <Field
                            name="gender"
                            placeholder="Select"
                            //option
                            id="gender"
                            component={dropdown}
                          />

                          <Field
                            name="datepicker"
                            placeholder=" Select"
                            component={DatePicker}
                          />

                          {/* <Field
                            name="address"
                            placeholder="Address"
                            component={AddressLookup}
                            disabled={addressToggle}
                            id="register-user"
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

                          <div className="addressInfo">
                            <label className="agree_terms">
                              Full Address -
                            </label>
                          </div>
                          <Field
                            name="addressLine1"
                            placeholder="Address line 1.."
                            component={TextInput}
                          />
                          <Field
                            name="addressLine2"
                            placeholder="Address line 2.."
                            component={TextInput}
                          />
                          <div className="address_fields50">
                            <div>
                              <Field
                                name="county"
                                placeholder="County"
                                component={TextInput}
                              />
                            </div>
                            <div className="ml8">
                              <Field
                                name="town"
                                placeholder="Town"
                                component={TextInput}
                              />
                            </div>
                          </div>

                          <div className="address_fields50">
                            <div>
                              <Field
                                name="postcode"
                                placeholder="Post Code"
                                component={TextInput}
                                validate={composeValidators(
                                  required,
                                  postCodeValidation
                                )}
                              />
                            </div>

                            <div className="ml8">
                              <Field
                                name="country"
                                placeholder="Country"
                                component={TextInput}
                              />
                            </div>
                          </div>

                          <label
                            className={`${details.address && "signup_lab2"}`}
                          >
                            {details.address}
                          </label>
                          <div className="signup2_check">
                            <Field
                              name="checkbox"
                              type="checkbox"
                              placeholder="Terms and conditions"
                              checked={details.checkbox}
                              component={CheckboxInput}
                            />

                            {/* Validation for accepted field */}
                          </div>
                          <button type="submit" disabled={submitting}>
                            Finish
                          </button>
                          {/* <button type="button">
                            <Link to="/register" className="updateEmlLnk">
                              Update Email and Password ?{" "}
                            </Link>
                          </button> */}
                        </form>
                      )}
                    </Form>

                    <div className="have_acc">
                      <p>
                        {" "}
                        Have an account? <Link to="/">Login</Link>
                      </p>
                    </div>
                  </div>
                  <CommonFooter />
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <AuthSideDetails />
      </div>
      <RegisterSuccess
        show={registerSuccess}
        onHide={showHideregisterSuccess}
      />
      <ManualAddressForm show={addressForm} onHide={hideAddressForm} />
      <ToastContainer autoClose={2000} />
      {redirect && <Redirect to="/" />}
      {checkIfEmlPassExists && <Redirect to="/register" />}
      {loader && <Loader />}
    </div>
  );
};

RegisterFurtherDetails.propTypes = {};

export default RegisterFurtherDetails;
