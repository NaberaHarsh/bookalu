import React from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { Moment } from "moment";

const TimePickerInput = () => {
  return (
    <div>
      <TimePicker
        // style={{ width: "100px" }}
        showSecond={false}
        // defaultValue={Moment}
        className="xxx"
        // onChange={onChange}
      />
    </div>
  );
};

export default TimePickerInput;
