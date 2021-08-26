import React, { Fragment, useState } from "react";
import { FieldRenderProps } from "react-final-form";
import TimePicker from "react-time-picker";

type Props = FieldRenderProps<any, any>;

const TimePickerInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <Fragment>
      <TimePicker
        {...input}
        disableClock={true}
        format={"HH:mm"}
        locale="sv-sv"
        required={true}
        disabled={rest.disabled}
        className={rest.className}
      />
      {meta.touched && meta.error && (
        <span className={`error `}>*{meta.error}</span>
      )}
    </Fragment>
  );
};

export default TimePickerInput;

// import TimePicker from "rc-time-picker";
// import "rc-time-picker/assets/index.css";

// const now = moment(value);
// const defaultVal = moment();
// OLD TIME PICKER INEGRATION
/* <TimePicker
        allowEmpty={true}
        name={input.name}
        onChange={(value) => {
          console.log(value);
          if (value && value.format()) input.onChange(value.format());
        }}
        {...rest}
        // popupClassName="businessServTmPkr"
        showSecond={false}
        value={now}
        placeholder={"00:00"}
        defaultValue={defaultVal}
        // className="businessServTm"
        // popupClassName="businessServTmPkr"
      /> */
