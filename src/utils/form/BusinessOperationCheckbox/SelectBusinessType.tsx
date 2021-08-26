import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "../common.css";

type Props = FieldRenderProps<any, any>;

const SelectBusinessType: React.FC<Props> = ({
  input: { value, ...input },
  meta,
  ...rest
}: Props) => {
  return <input {...input} {...rest} />;
};

export default SelectBusinessType;
