import React, { Component } from "react";
import { DropdownList } from "react-widgets";
import { useSelector } from "react-redux";
import { FieldRenderProps } from "react-final-form";
import { RootState } from "../../../redux/reducer";
import "react-widgets/dist/css/react-widgets.css";
import "./Address.css";
type Props = FieldRenderProps<string, any>;

const AddressLine1: React.FC<Props> = ({
  input,
  meta: { touched, error },
  ...rest
}: Props) => {
  const addressLine1Reducer = useSelector(
    (state: RootState) => state.addressLine1Reducer
  );

  return (
    <>
      {" "}
      <DropdownList
        {...input}
        {...rest}
        containerClassName="addressDropdown"
        // open={true}
        filter={"contains"}
        data={addressLine1Reducer.data}
        allowCreate="onFilter"
        textField="addressline1"
      />
      {touched && error && <span className="error">*{error}</span>}
    </>
  );
};

export default AddressLine1;
