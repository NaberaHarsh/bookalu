import React, { Fragment, useEffect, useState } from "react";
// import Select from "react-dropdown-select";
// import Select from "react-select";
import Select from "react-dropdown-select";
import { FieldRenderProps } from "react-final-form";
import "./common.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";

// import  from 'react-bootstrap';

type Props = FieldRenderProps<any, any>;

const IndustriesSelect: React.FC<Props> = ({
  input,
  meta: { touched, error },
  ...rest
}: Props) => {
  const value = input.value;

  const { data } = useSelector(
    (state: RootState) => state.industriesDropdownReducer
  );

  const [inputSelectedVal, setInputSelectedVal]: any = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log("data", data);

    setInputSelectedVal(input.value);
    setOptions(data);
  }, []);

  useEffect(() => {
    console.log(inputSelectedVal);
    input.onChange(inputSelectedVal);
  }, [inputSelectedVal]);

  const changeHandler = (newValue: any) => {
    if (newValue.length > 1) console.log("Its racearound condition");
    if (newValue.length == 1) {
      let found = inputSelectedVal.some((el: any) => el.name === newValue.name);
      if (!found) setInputSelectedVal([...inputSelectedVal, newValue[0]]);

      setOptions(options.filter((val: any) => val.id !== newValue[0].id));
    }
  };

  const removeIndustry = (val: any, index: number) => {
    // let inputSelectdValCopy = inputSelectedVal.slice(0, index);
    // setInputSelectedVal(inputSelectdValCopy);
    let cp = inputSelectedVal;
    cp.splice(index, 1);
    setInputSelectedVal([...cp]);
    input.onChange(cp);
  };

  return (
    <Fragment>
      <Select
        className="industry_select_dropdwon"
        name={input.name}
        values={inputSelectedVal}
        onChange={(newValue) => changeHandler(newValue)}
        options={options}
        // clearOnSelect={true}

        valueField="id"
        labelField="name"
      />

      {inputSelectedVal &&
        inputSelectedVal.length !== 0 &&
        inputSelectedVal.map((val: any, ind: number) => {
          return (
            <p key={ind} className="page4_input_area_inner_p1 p4_opt_flex">
              {val.name}&nbsp;
              <span
                className="cusrorP"
                onClick={() => removeIndustry(val, ind)}
              >
                Remove
              </span>
            </p>
          );
        })}

      {touched && error && <span className="error">*{error}</span>}
    </Fragment>
  );
};

export default IndustriesSelect;
