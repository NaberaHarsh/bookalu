import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "./common.css";
// import  from 'react-bootstrap';
type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  // console.log(JSON.stringify(meta, undefined, 2));
  return (
    <Fragment>
      <input {...input} {...rest} autoComplete="new-password" />
      {meta.touched && meta.error && (
        <span className="error">*{meta.error}</span>
      )}
    </Fragment>
  );
};

export default TextInput;


