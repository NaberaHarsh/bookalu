import React, { Component } from "react";

const GoogleAddressMultipleFields = () => {
  const callbackFunc = (autoCompleteData: unknown) => {
    //You can use the address data, passed by autocomplete as you want.
    console.log(autoCompleteData);
  };

  return <div></div>;
};

export default GoogleAddressMultipleFields;
