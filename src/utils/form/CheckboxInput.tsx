import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "./common.css";
import { Link } from "react-router-dom";
type Props = FieldRenderProps<boolean, any>;

const CheckboxInput: React.FC<Props> = ({
  input: { value, ...input },
  meta,
  inputClick,
}: Props) => {
  // console.log(value);

  return (
    <Fragment>
      <span>
        <input
          {...input}
          type="checkbox"
          // onChange={(e) => {
          //   input.onChange(e);
          //   inputClick && inputClick(e);
          // }}
        />
        <label className="agree_terms" htmlFor="signup2_check_inner">
          Agree <Link to="#!">Terms &amp; Conditions</Link>
        </label>
      </span>
      {meta.touched && meta.error && (
        <span className="error">*{meta.error}</span>
      )}
    </Fragment>
  );
};

export default CheckboxInput;
