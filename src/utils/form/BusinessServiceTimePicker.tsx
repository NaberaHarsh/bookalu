import React, { Fragment, useState } from "react";
import { FieldRenderProps } from "react-final-form";
import TimePicker from "react-time-picker";

type Props = FieldRenderProps<any, any>;

const BusinessServiceTimePicker: React.FC<Props> = ({
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <Fragment>
      <TimePicker
        {...input}
        disableClock={true}
        format={"HH:mm"}
        locale="sv-sv"
        required={true}
        className={rest.className}
      />
      {meta.touched && meta.error && (
        <span className={`error `}>*{meta.error}</span>
      )}
    </Fragment>
  );
};

export default BusinessServiceTimePicker;

// import TimePicker from "rc-time-picker";
// import "rc-time-picker/assets/index.css";
// import moment from "moment";

// const { value } = input;
// const now = moment().hour(value).minute(value);
// const { className } = rest;

// <Fragment>
//   <TimePicker
//     allowEmpty={true}
//     name={input.name}
//     onChange={(value) => {
//       if (value && value.format()) input.onChange(value.format());
//     }}
//     {...rest}
//     popupClassName="businessServTmPkr"
//     showSecond={false}
//     // value={now}
//     defaultValue={now}
//     className="businessServTm"
//     // popupClassName="businessServTmPkr"
//   />

//   {meta.touched && meta.error && (
//     <span className="error">*{meta.error}</span>
//   )}
// </Fragment>
