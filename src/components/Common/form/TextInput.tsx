import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "./common.css";
// import  from 'react-bootstrap';
type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({
  input,
  meta: { touched, error },
  ...rest
}: Props) => (
  <Fragment>
    <input {...input} {...rest} autoComplete="new-password" />
    {touched && error && <span className="error">*{error}</span>}
  </Fragment>
);

export default TextInput;
