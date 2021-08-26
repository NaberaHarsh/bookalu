import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const TextAreaInput: React.FC<Props> = ({
  input,
  meta: { touched, error },
  ...rest
}: Props) => (
  <Fragment>
    <textarea {...input} {...rest} />
    {touched && error && (
      <span className={`error ${rest.errorClass && rest.errorClass}`}>
        *{error}
      </span>
    )}
  </Fragment>
);

export default TextAreaInput;
