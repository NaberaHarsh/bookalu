import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "./common.css";
import { Link } from "react-router-dom";
type Props = FieldRenderProps<boolean, any>;

const CheckBox: React.FC<Props> = ({
  input: { value, ...input },
  meta,
  ...rest
}: Props) => {
  // console.log(value);

  return (
    <Fragment>
      <span>
        <input
          {...input}
          {...rest}
          type="checkbox"
          // onChange={(e) => {
          //   input.onChange(e);
          //   inputClick && inputClick(e);
          // }}
        />
      </span>
      {meta.touched && meta.error && (
        <span className="error">*{meta.error}</span>
      )}
    </Fragment>
  );
};

export default CheckBox;
