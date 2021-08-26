import React, { Fragment, useState } from "react";
import { FieldRenderProps } from "react-final-form";
// import TimePicker from "react-time-picker";
// import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

// import "react-datepicker/dist/react-datepicker.css";

import TimePicker from "react-bootstrap-time-picker";

type Props = FieldRenderProps<any, any>;

const TimePickerDropdown: React.FC<Props> = ({
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <Fragment>
      {/* <DatePicker
                {...input}
                name={rest.name}
                selected={rest.selected}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                // timeCaption="Time"
                // timeFormat="HH:mm aa"
                dateFormat="HH:mm"
                isClearable={rest.isClearable}
                className={rest.className}
                disabled={rest.disabled}
                required={rest.required}
                // maxDate={rest.maxDate ? new Date(rest.maxDate) : null}
                minDate={rest.minDate ? new Date(rest.minDate) : null}
                maxTime={(rest.maxTime && rest.maxTime.length > 0) ? setHours(setMinutes(new Date(), rest.maxTime[0]), rest.maxTime[1]) : null}
                minTime={(rest.minTime && rest.minTime.length > 0) ? setHours(setMinutes(new Date(), rest.minTime[0]), rest.minTime[1]) : null}
            /> */}
      <TimePicker
        {...input}
        start={rest.start}
        end={rest.end}
        step={rest.timeIntervals}
        format={rest.timeFormat}
        disabled={rest.disabled}
        required={rest.required}
      />
      {meta.touched && meta.error && (
        <span className={`error `}>*{meta.error}</span>
      )}
    </Fragment>
  );
};

export default TimePickerDropdown;
