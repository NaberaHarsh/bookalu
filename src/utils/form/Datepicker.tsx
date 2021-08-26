
// import "./common.css"

// import React, { Fragment, useState } from "react";
// import { FieldRenderProps } from "react-final-form";

// import { enGB } from 'date-fns/locale'
// import { DatePicker } from 'react-nice-dates'
// import 'react-nice-dates/build/style.css'

// type Props = FieldRenderProps<any, any>;

// const Datepicker: React.FC<Props> = ({ input, meta, ...rest }: Props) => {

//   // const [startDate, setStartDate] = useState<Date | null>(new Date());
//   const [date, setDate] = useState(new Date());
//    const handleChange = date  => setDate(date);
 
//   return (
//     <DatePicker 
//     {...input} {...rest} 
//     date={date}
//      onDateChange={handleChange} 
//      locale={enGB}>
//     {({ inputProps, focused }) => (
//       <input
//         className={'input' + (focused ? ' -focused' : '')}
//         {...inputProps}
//       />
//     )}
//   </DatePicker>
//   );
// };
// export default Datepicker

// import React,{Fragment} from 'react'
// import DateTimePicker from 'react-widgets/lib/DateTimePicker'
// import { FieldRenderProps } from "react-final-form";

// type Props = FieldRenderProps<any, any>;
// const datePickerInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {

//   return (
//     <Fragment>
//     <DateTimePicker
//       placeholder=" Select"
//       defaultValue={new Date()}
//     />

//       {meta.touched && meta.error && (
//         <span className={`error `}>*{meta.error}</span>
//       )}
//     </Fragment>
//   );
// };

// export default datePickerInput;


// import React,{useState, Fragment} from 'react'

// import moment from 'moment';
// import momentLocalizer from 'react-widgets-moment';  

// import { FieldRenderProps } from "react-final-form";
// import DatePicker from "react-widgets/lib/DatePicker";
// import 'react-widgets/dist/css/react-widgets.css'

// type Props = FieldRenderProps<any, any>;
// const datePickerInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
//   const [locale, setLocale] = useState('en');
   
//   // moment.locale(locale);
//   momentLocalizer();

//   return (
//     <Fragment>
//          <DatePicker 
//          placeholder="m/dd/yy" /> 

//       {meta.touched && meta.error && (
//         <span className={`error `}>*{meta.error}</span>
//       )}
//     </Fragment>
//   );
// };

// export default datePickerInput;
import React from 'react'

function Datepicker() {
  return (
    <div>
     <input   
      type = "date"
     /> 
    </div>
  )
}

export default Datepicker
