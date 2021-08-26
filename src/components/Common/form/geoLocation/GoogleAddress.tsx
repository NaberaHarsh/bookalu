import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import "../common.css";
import { FieldRenderProps } from "react-final-form";
import { geoLocationData } from "./index";
type Props = FieldRenderProps<string, any>;

const GoogleAddress: React.FC<Props> = ({
  input,
  meta: { touched, error },
  onSuggestSelect,
  // initialValue,
  ...rest
}: Props) => {
  const onBlur = (value: string): void => {};

  return (
    <>
      <Geosuggest
        // initialValue={initialValue}
        {...input}
        {...rest}
        country={["UK"]}
        highlightMatch={true}
        onBlur={onBlur}
        autoActivateFirstSuggest={true}
        onSuggestSelect={(e) => onSuggestSelect(e)}
      />
      {touched && error && <span className="error">*{error}</span>}
    </>
  );
};

export default GoogleAddress;
