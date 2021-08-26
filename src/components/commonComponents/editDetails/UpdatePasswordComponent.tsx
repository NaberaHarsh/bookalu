import React, { useEffect, useState } from "react";
import { TextInput } from "../../../utils/form";
import Loader from "../../../utils/Loader/Loader";
import { validate } from "../../../utils/validations/editDetails/updatePasswordValidator";
import { PasswordField } from "../../../utils/interfaces/updateUserDetails";
import { RootState } from "../../../redux/reducer/index";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";

// Actions
import { updatePasswordAction } from "../../../redux/action/authentication/updatePassword/updatePasswordAction";

const UpdatePasswordComponent: React.FC = () => {
  /* Redux action and Reducers  */
  const dispatch = useDispatch();
  const verifyPasswordReducer = useSelector(
    (state: RootState) => state.verifyPasswordReducer
  );
  const updatePasswordReducer = useSelector((state: RootState) => {
    return state.updatePasswordReducer;
  });
  // For disable and enable the form
  const [disableFields, setDisableFields] = useState(true);
  const [loader, setLoader] = useState(false);
  /* useEffect Hooks  */
  // IF password given is corrct then enable the edit fileds
  useEffect(() => {
    const { success, dataReceived } = verifyPasswordReducer;
    if (success && dataReceived) {
      setDisableFields(false);
    }
  }, [verifyPasswordReducer]);

  //   Update Password Response
  useEffect(() => {
    const { dataReceived } = updatePasswordReducer;
    if (dataReceived) setLoader(false);
  }, [updatePasswordReducer]);

  /* Submit Update Password */
  const updatePasswordSubmit = (e: PasswordField) => {
    setLoader(true);
    dispatch(
      updatePasswordAction({
        password: e.password,
        oldPassword: e.oldPassword,
      })
    );
  };

  return (
    <>
      <Form onSubmit={(e) => updatePasswordSubmit(e)} validate={validate}>
        {({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div
              className="details_input_box details_input_box1"
              id="details_input_box2"
            >
              <label className="input_box_lab">Change password</label>

              <Field
                className="cu_password"
                type="password"
                placeholder="Current Password"
                name="oldPassword"
                //   value={updatePassword.oldPassword}
                component={TextInput}
                disabled={disableFields}
              />
            </div>
            <div
              className="details_input_box details_input_box1"
              id="details_input_box1"
            >
              <Field
                className="cu_password"
                type="password"
                placeholder="New Password"
                name="password"
                //   value={updatePassword.password}
                component={TextInput}
                disabled={disableFields}
              />
              <label id="change_lab" className="input_box_lab">
                * Password must contain atleast 8 characters
              </label>
            </div>
            <div
              className="details_input_box details_input_box2"
              id="details_input_box4"
            >
              <Field
                className="cu_password"
                type="password"
                placeholder="Re enter New Password"
                name="confirmPassword"
                //   value={updatePassword.confirmPassword}
                component={TextInput}
                disabled={disableFields}
              />
            </div>
            <button
              className="details_btn updatePass"
              type="submit"
              disabled={submitting || pristine}
            >
              Update Password
            </button>
          </form>
        )}
      </Form>
      {loader && <Loader />}
    </>
  );
};

export default UpdatePasswordComponent;
