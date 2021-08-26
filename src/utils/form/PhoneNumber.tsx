import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./common.css";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
type Props = FieldRenderProps<string, any>;

const PhoneNumber: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <Fragment>
    <PhoneInput {...input} {...rest} autoComplete="new-password" />
    {/* <PhoneInput country={'us'} value={this.state.phone} onChange={phone => this.setState({ phone })/> */}
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </Fragment>
);

export default PhoneNumber;
