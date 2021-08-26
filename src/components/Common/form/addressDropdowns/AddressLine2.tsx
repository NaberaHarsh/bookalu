import React, { Component } from "react";
import { DropdownList } from "react-widgets";
import { useSelector } from "react-redux";
import { FieldRenderProps } from "react-final-form";
import { RootState } from "../../../../redux/reducer";
import "react-widgets/dist/css/react-widgets.css";
import "./Address.css";
type Props = FieldRenderProps<string, any>;

const AddressLine2: React.FC<Props> = ({ input, ...rest }: Props) => {
  const addressLine = useSelector(
    (state: RootState) => state.addressLine2Reducer
  );

  return (
    <>
      {" "}
      <DropdownList
        {...input}
        {...rest}
        // open={true}
        containerClassName="addressDropdown"
        filter={"contains"}
        data={addressLine.data}
        allowCreate="onFilter"
        textField="addressline2"
      />
    </>
  );
};

export default AddressLine2;
