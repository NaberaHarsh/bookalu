import React, { useEffect, useRef, useState } from "react";
import { TextInput, PhoneNumber, AddressLookup } from "../../../utils/form";
import Loader from "../../../utils/Loader/Loader";
import { validate } from "../../../utils/validations/editDetails/updateDetailsValidator";
import { ToastContainer } from "react-toastify";
import {
  UserDetailsState,
  ValidationFlag,
} from "../../../utils/interfaces/updateUserDetails";
import { RootState } from "../../../redux/reducer/index";
import { useDispatch, useSelector } from "react-redux";

import { Form, Field } from "react-final-form";
// Actions
import { getUserInfoAction } from "../../../redux/action/updateUserInformation/getUserInfoAction";
import { updateUserInfoAction } from "../../../redux/action/updateUserInformation/updateUserInfoAction";
import ManualAddressForm from "../../commonComponents/Popups/manualAddressForm/MannualAddressForm";
import "./EditPersonalDetails.css";

import { OnChange } from "react-final-form-listeners";

const UpdateDetails: React.FC = () => {
  const ref1 = useRef(true);
  // const isFirstRender = useRef(true);
  /* Redux action and Reducers  */
  const dispatch = useDispatch();
  const verifyPasswordReducer = useSelector(
    (state: RootState) => state.verifyPasswordReducer
  );
  const getPersonalDetailsReducer = useSelector(
    (state: RootState) => state.getPersonalDetailsReducer
  );
  const updatePersonalDetailsReducer = useSelector(
    (state: RootState) => state.updatePersonalDetailsReducer
  );
  const searchSelectedRducer = useSelector(
    (state: RootState) => state.searchSelectedRducer
  );

  // User form fields state
  const [updateDetails, setUpdateDetails] = useState<UserDetailsState>({
    firstName: "",
    lastName: "",
    mobile: "",
    telephone: "",
    email: "",
    address: "",
    postcode: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    county: "",
    country: "",
  });

  const hideAddressForm = () => {
    setAddressForm(!addressForm);
  };
  const [addressForm, setAddressForm] = useState(false);
  // For disable and enable the form
  const [disableFields, setDisableFields] = useState(true);
  const [loader, setLoader] = useState(false);
  const [addressToggle, setAddressToggle] = useState(false);
  const [validationFlag, setValidationFlag] = useState<ValidationFlag>({
    postCodeFlag: false,
    mobileOrTelephone: false,
  });
  /* useEffect Hooks  */

  // Get all user details for editing it
  useEffect(() => {
    setLoader(true);
    dispatch(getUserInfoAction());
  }, [dispatch]);

  // IF password given is corrct then enable the edit fileds
  useEffect(() => {
    const { success, dataReceived } = verifyPasswordReducer;
    if (success && dataReceived) {
      setDisableFields(false);
    }
  }, [verifyPasswordReducer]);

  useEffect(() => {
    const { dataReceived } = updatePersonalDetailsReducer;
    if (dataReceived) setLoader(false);
  }, [updatePersonalDetailsReducer]);

  useEffect(() => {
    const { data, success, dataReceived } = getPersonalDetailsReducer;
    if (success && dataReceived) {
      setUpdateDetails({
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
        telephone: data.telephone,
        email: data.emailId,
        address: `${data.addressLine1} ${data.addressLine2} ${data.town} ${data.county} ${data.country} ${data.postalCode}`,
        postcode: data.postalCode,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        town: data.town,
        county: data.county,
        country: data.country,
      });
    }
    if (dataReceived) setLoader(false);
  }, [getPersonalDetailsReducer]);

  /* This useEffect is used to capture the response of address selected by the user  */
  useEffect(() => {
    if (ref1.current) {
      ref1.current = false;
    } else {
      ref1.current = true;
      const { dataReceived, data } = searchSelectedRducer;
      if (dataReceived) {
        // Set address Line value

        setUpdateDetails({
          ...updateDetails,
          address: data.address,
          postcode: data.postcode,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          town: data.town,
          county: data.county,
          country: data.country,
        });
        setAddressToggle(true);
        // // Check for country and town or counties
        // // Set address Fields for final form submission
      }
    }
  }, [searchSelectedRducer]);

  /* Here we make API call to update the user details  */
  const updateUserDetails = (e: UserDetailsState) => {
    console.log(e);
    if (!e.mobile && !e.telephone)
      setValidationFlag({ ...validationFlag, mobileOrTelephone: true });
    else {
      setLoader(true);
      dispatch(
        updateUserInfoAction({
          firstName: e.firstName,
          lastName: e.lastName,
          mobile: e.mobile,
          telephone: e.telephone,
          email: e.email,
          postCode: e.postcode,
          addressLine1: e.addressLine1,
          addressLine2: e.addressLine2,
          town: e.town,
          county: e.county,
          country: e.country,
        })
      );
    }
  };

  /* Here we update the validation flag for Mobile and phone number as any one of them is required  */
  const telephoneOrMobile = () =>
    setValidationFlag({ ...validationFlag, mobileOrTelephone: false });

  return (
    <>
      <Form
        onSubmit={(e) => updateUserDetails(e)}
        validate={validate}
        initialValues={updateDetails}
      >
        {({ handleSubmit, submitting, dirty }) => (
          <form onSubmit={handleSubmit}>
            <div className="right_side">
              <div className="details_input_box details_input">
                <label className="input_box_lab input_box_lab1">
                  Change your registered email
                </label>

                <Field
                  type="email"
                  placeholder="Emailaddress@hotmail.com"
                  name="email"
                  value={updateDetails.email}
                  component={TextInput}
                  disabled={disableFields}
                />
              </div>
              <div className="nameField">
                <div className="details_input_box_top">
                  <Field
                    className="input1"
                    name="firstName"
                    placeholder="Name"
                    type="text"
                    value={updateDetails.firstName}
                    component={TextInput}
                    disabled={disableFields}
                  />
                </div>
                <div className="details_input_box_top">
                  <Field
                    className="input2"
                    name="lastName"
                    type="text"
                    placeholder="Surname"
                    value={updateDetails.lastName}
                    component={TextInput}
                    disabled={disableFields}
                  />
                </div>
              </div>
              <div className="details_input_box details_input_box_right">
                <div className="number_wrapper">
                  <span className="country_code">+44</span>
                  <Field
                    name="mobile"
                    type="text"
                    placeholder="Mobile mobile"
                    value={updateDetails.mobile}
                    component={TextInput}
                    disabled={disableFields}
                    onFocus={() => telephoneOrMobile()}
                  />
                </div>
              </div>
              <OnChange name="mobile">
                {(value) =>
                  setUpdateDetails({ ...updateDetails, mobile: value })
                }
              </OnChange>
              <div className="details_input_box details_input_box_right">
                <div className="number_wrapper">
                  <span className="country_code">+44</span>
                  <Field
                    name="telephone"
                    type="text"
                    placeholder="Telephone number"
                    value={updateDetails.telephone}
                    component={TextInput}
                    disabled={disableFields}
                    onFocus={() => telephoneOrMobile()}
                  />
                </div>
              </div>
              <OnChange name="telephone">
                {(value) =>
                  setUpdateDetails({ ...updateDetails, telephone: value })
                }
              </OnChange>
              {validationFlag.mobileOrTelephone && (
                <div className="details_input_box details_input_box_right">
                  <span className="error">
                    *Either Mobile Or Telephone number is required{" "}
                  </span>
                </div>
              )}

              {/* <div className="details_input_box details_input_box_right">
                <p className="address1">Current home address:</p>
                <p className="address2">{updateDetails.address}</p>
              </div>
              <div className="details_input_box details_input_box3">
                <label className="input_box_lab">
                  Change home address: Enter new postcode
                </label>
              </div>
              <div className="details_input_box details_input_box_right">
                <Field
                  name="address"
                  component={AddressLookup}
                  value={updateDetails.address}
                  disabled={disableFields || addressToggle}
                />
              </div>
              <div className="details_input_box details_input_box_right">
                <button
                  type="button"
                  className={`${
                    addressToggle ? "txtEanble" : "txtDisable"
                  } searchToggleUpdate`}
                  onClick={() => setAddressToggle(!addressToggle)}
                >{`${
                  addressToggle
                    ? "Enable Search address"
                    : "Disable Search address"
                }`}</button>
              </div> */}

              <div className="addressInfo">
                <label className="agree_terms">Full Address -</label>
              </div>

              <div className="details_input_box details_input_box_right">
                <Field
                  name="addressLine1"
                  value={updateDetails.addressLine1}
                  placeholder="Address line 1.."
                  component={TextInput}
                  disabled={disableFields}
                />
              </div>
              <div className="details_input_box details_input_box_right">
                <Field
                  name="addressLine2"
                  value={updateDetails.addressLine2}
                  placeholder="Address line 2.."
                  component={TextInput}
                  disabled={disableFields}
                />
              </div>

              <div className="nameField">
                <div className="details_input_box_top">
                  <Field
                    className="input1"
                    name="county"
                    placeholder="County"
                    type="text"
                    value={updateDetails.county}
                    component={TextInput}
                    disabled={disableFields}
                  />
                </div>
                <div className="details_input_box_top">
                  <Field
                    className="input2"
                    name="town"
                    type="text"
                    placeholder="Town"
                    value={updateDetails.town}
                    component={TextInput}
                    disabled={disableFields}
                  />
                </div>
              </div>

              <div className="nameField">
                <div className="details_input_box_top">
                  <Field
                    className="input1"
                    name="country"
                    placeholder="Country"
                    type="text"
                    value={updateDetails.country}
                    component={TextInput}
                    disabled={disableFields}
                  />
                </div>
                <div className="details_input_box_top">
                  <Field
                    className="input2"
                    name="postcode"
                    type="text"
                    placeholder="postcode"
                    value={updateDetails.postcode}
                    component={TextInput}
                    disabled={disableFields}
                  />
                </div>
              </div>
              <button
                className="details_btn detailsBtn"
                type="submit"
                // disabled={submitting || dirty}
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </Form>
      {loader && <Loader />}
      <ManualAddressForm show={addressForm} onHide={hideAddressForm} />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default UpdateDetails;
