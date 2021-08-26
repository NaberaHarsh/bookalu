import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "../common.css";
import { Multiselect } from "react-widgets";
import "react-widgets/dist/css/react-widgets.css";
// import  from 'react-bootstrap';

let colors = [
  { id: 0, name: "orange" },
  { id: 1, name: "purple" },
  { id: 2, name: "red" },
  { id: 3, name: "blue" },
];
type Props = FieldRenderProps<string, any>;

const MultiselectInput: React.FC<Props> = ({
  input,
  meta: { touched, error },
  ...rest
}: Props) => (
  <Fragment>
    <Multiselect
      data={colors}
      {...rest}
      // {...input}
      // defaultValue={[1, 2]}
    />
    {touched && error && <span className="error">*{error}</span>}
  </Fragment>
);

export default MultiselectInput;
