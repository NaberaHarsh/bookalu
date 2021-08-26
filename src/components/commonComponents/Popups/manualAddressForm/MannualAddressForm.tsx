import React, { useEffect, useState } from "react";
import { TextInput } from "../../../../utils/form";
import { Modal } from "react-bootstrap";
import { UpdatePassword, formData } from "./index";
import { Field, Form } from "react-final-form";
import "../modal.css";
import { validate } from "../../../../utils/validations/manualAddressFromValidation";
import { manualAddressAction } from "../../../../redux/action/searchAddress/manualAddressAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer/index";

interface Address {
  postcode?: string;
  addressLine1?: string;
  addressLine2?: string;
  town?: string;
  county?: string;
  country?: string;
}

const ManualAddressForm: React.FC<UpdatePassword> = (props) => {
  const dispatch = useDispatch();
  const manualAddressReducer = useSelector(
    (state: RootState) => state.manualAddressReducer
  );

  const submitManualAddress = (v: formData) => {
    dispatch(manualAddressAction(v));
    props.onHide();
  };
  const [state, setstate] = useState<Address>({
    postcode: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    county: "",
    country: "",
  });

  useEffect(() => {
    const { data, dataReceived } = manualAddressReducer;
    if (dataReceived) {
      setstate({
        postcode: data.postcode,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        town: data.town,
        county: data.county,
        country: data.country,
      });
    }
  }, [manualAddressReducer]);

  return (
    <div>
      {/*  */}
      <Modal
        className="boxBorder forgotPassModal"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modalParent">
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
              Manual <span>Address</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Form
              onSubmit={submitManualAddress}
              validate={validate}
              initialValues={state}
            >
              {({ handleSubmit, pristine, values, submitting }) => (
                <form
                  onSubmit={handleSubmit}
                  className="site_form"
                  id="signup2"
                >
                  <Field
                    name="addressLine1"
                    placeholder="Address Line 1"
                    component={TextInput}
                  />

                  <Field
                    name="addressLine2"
                    placeholder="Address Line 2"
                    component={TextInput}
                  />

                  <Field name="town" placeholder="Town" component={TextInput} />

                  <Field
                    name="county"
                    placeholder="County"
                    component={TextInput}
                  />

                  <Field
                    name="country"
                    placeholder="Country"
                    component={TextInput}
                  />

                  <Field
                    name="postcode"
                    placeholder="PostCode"
                    component={TextInput}
                  />

                  <button type="submit" disabled={pristine || submitting}>
                    Address
                  </button>
                </form>
              )}
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
      
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </div>
      </Modal>
    </div>
  );
};

export default ManualAddressForm;
