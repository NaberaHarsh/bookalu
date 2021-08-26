// import React, { Fragment, useState, useRef, useEffect } from "react";
// import CreatableSelect from "react-select/creatable";
// import Select from "react-dropdown-select";
// import { FieldRenderProps } from "react-final-form";
// import "./common.css";
// // import { Information } from "./test";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/reducer";
// import {
//   businessRegDropdown,
//   createOccupation,
// } from "../../redux/action/DropdownData/businessRegDropdown";
// // import  from 'react-bootstrap';

// type Props = FieldRenderProps<any, any>;

// const OccupationSelect: React.FC<Props> = ({
//   input,
//   meta: { touched, error },
//   ...rest
// }: Props) => {
//   const renderOn = useRef(true);
//   const dispatch = useDispatch();
//   const occupationDropdownReducer = useSelector(
//     (state: RootState) => state.occupationDropdownReducer
//   );
//   const { data } = occupationDropdownReducer;
//   const createOccupationReducer = useSelector(
//     (state: RootState) => state.createOccupationReducer
//   );

//   const [loading, setLoading] = useState(false);
//   const [newOpt, setNewOpt]: any = useState(null);
//   const [dropDownOption, setDropDownOption] = useState<any>([]);
//   const [inpVal, setInpVal] = useState("");
//   const [selectedVal, setSelectedVal]: any = useState([]);
//   const [showAddBtn, setShowAddBtn] = useState(false);

//   useEffect(() => {
//     setSelectedVal(input.value);
//   }, []);

//   useEffect(() => {
//     input.onChange(selectedVal);
//     for (var i = 0; i < data.length; i++) {
//       for (var j = 0; j < selectedVal.length; j++) {
//         if (data[i].id === selectedVal[j].id) {
//           data.splice(i, 1);
//         }
//       }
//     }
//     setDropDownOption([...data]);
//   }, [selectedVal]);

//   useEffect(() => {
//     if (renderOn.current) renderOn.current = false;
//     else {
//       const { data, loading, error } = createOccupationReducer;
//       if (loading) setLoading(!loading);
//       if (!loading && data && !error) {
//         const found = selectedVal.some((el: any) => el.name === data.data.name);
//         if (!found) updateSelectedVal(data.data);
//         clearInp();
//       }
//     }
//   }, [createOccupationReducer]);

//   const clearInp = () => setInpVal("");

//   /* Update the selcted value into list  */
//   const updateSelectedVal = (data: any) =>
//     setSelectedVal((selectedVal: any) => [...selectedVal, data]);

//   /* Check if the data is in the dropdwon list if its there then add it to the list  */
//   // const checkList = (value: string) =>
//   //   dropDownOption.filter((val: any) => val.name === value && val);
//   const checkList = async (value: string) => {
//     const filterData = await dropDownOption.filter((val: any) => {
//       return val && val.name.toLowerCase().search(value.toLowerCase()) > -1;
//     });
//     return filterData;
//   }

//   const handleChoosenOpt = () => {
//     dispatch(createOccupation({ name: inpVal }));
//     // let valueL = checkList(inpVal);

//     // if (valueL.length !== 0) {
//     //   const found = selectedVal.some((el: any) => el.name === inpVal);
//     //   if (!found) {
//     //     updateSelectedVal(valueL[0]);
//     //     clearInp();
//     //   }
//     // } else {
//     // }
//   };

//   const removeOccupation = (ind: number) => {
//     let cp = selectedVal;
//     cp.splice(ind, 1);
//     setSelectedVal((selectedVal: any) => [...cp]);
//   };

//   const onChangeInput = async (value: string) => {
//     const search = value.trim();
//     setInpVal(search);
//     let valueL = await checkList(search);
//     if (search && valueL.length !== 0) {
//       setShowAddBtn(false);
//       const found = selectedVal.some((el: any) => el.name === search);
//       if (!found) {
//         const isFound = valueL.findIndex(e => e.name.toLowerCase() === search.toLowerCase())
//         if (isFound > -1) {
//           updateSelectedVal(valueL[isFound]);
//           clearInp();
//         }
//       }
//     } else if (search) {
//       setShowAddBtn(true);
//     } else if (!search) {
//       setShowAddBtn(false);
//     }
//   }

//   return (
//     <Fragment>
//       <input
//         name={input.name}
//         list="occupationSearch"
//         placeholder="Start typing..."
//         value={inpVal}
//         // onSelect={handleChoosenOpt}
//         onChange={(val) => {
//           onChangeInput(val.target.value);
//           // setInpVal(val.target.value );
//         }}
//       />

//       <datalist id="occupationSearch">
//         {dropDownOption.map((value: any, index: number) => (
//           <option
//           key={value.id}>{value.name  }    </option>

//         ))}
//       </datalist>

//       <span
//         className="page5_input_area_inner_add cusrorP"
//         onClick={showAddBtn ? handleChoosenOpt : () => {}}
//       >
//         {
//           showAddBtn && (
//             <img src="images/add.png" alt="iage" />
//           )
//         }
//       </span>

//       {selectedVal &&
//         selectedVal.length !== 0 &&
//         selectedVal.map((val: any, ind: number) => {
//           return (
//             <p key={ind} className="page4_input_area_inner_p1 p4_opt_flex">
//               {val.name}&nbsp;
//               <span onClick={() => removeOccupation(ind)}>Remove</span>
//             </p>
//           );
//         })}

//       {touched && error && <span className="error">*{error}</span>}
//     </Fragment>
//   );
// };

// export default OccupationSelect;

import React, { Fragment, useEffect, useState, useRef } from "react";
import Select from "react-dropdown-select";
import { FieldRenderProps } from "react-final-form";
import "./common.css";
import { RootState } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { createOccupation } from "../../redux/action/DropdownData/businessRegDropdown";

type Props = FieldRenderProps<any, any>;

const OccupationSelect: React.FC<Props> = ({
  input,
  meta: { touched, error },
  ...rest
}: Props) => {
  const renderOn = useRef(true);
  const dispatch = useDispatch();

  const occupationDropdownReducer = useSelector(
    (state: RootState) => state.occupationDropdownReducer
  );
  const { data } = occupationDropdownReducer;

  const createOccupationReducer = useSelector(
    (state: RootState) => state.createOccupationReducer
  );

  const [inputSelectedVal, setInputSelectedVal]: any = useState([]);
  const [options, setOptions] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInputSelectedVal(input.value);
    setOptions(data);
  }, []);

  useEffect(() => {
    input.onChange(inputSelectedVal);
    // for (var i = 0; i < data.length; i++) {
    //   for (var j = 0; j < inputSelectedVal.length; j++) {
    //     if (data[i].id === inputSelectedVal[j].id) {
    //       data.splice(i, 1);
    //     }
    //   }
    // }
    // setOptions([...data]);
  }, [inputSelectedVal]);

  useEffect(() => {
    if (renderOn.current) renderOn.current = false;
    else {
      const { data, loading, error } = createOccupationReducer;
      if (loading) setLoading(!loading);
      if (!loading && data && !error) {
        const found = inputSelectedVal.some(
          (el: any) => el.name === data.data.name
        );
        if (!found) updateSelectedVal(data.data);
      }
    }
  }, [createOccupationReducer]);

  const updateSelectedVal = (data: any) =>
    setInputSelectedVal((selectedVal: any) => [...selectedVal, data]);

  const changeHandler = (newValue: any) => {
    if (newValue.length === 1) {
      let found = inputSelectedVal.some((el: any) => el.name === newValue.name);
      if (!found) setInputSelectedVal([...inputSelectedVal, newValue[0]]);

      setOptions(options.filter((val: any) => val.id !== newValue[0].id));
    }
  };

  const removeIndustry = (val: any, index: number) => {
    let cp = inputSelectedVal;
    cp.splice(index, 1);
    setInputSelectedVal([...cp]);
    input.onChange(cp);
  };

  const onClickAddNewOccupation = (text) => {
    if (text) {
      dispatch(createOccupation({ name: text }));
    }
  };

  const customNoDataRenderer = ({ props, state, methods }) => (
    <span className="justify-content-center text-center p-2">
      <a
        className="justify-content-center"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClickAddNewOccupation(state.search.trim());
        }}
      >
        Add New Occupation
      </a>
    </span>
  );

  return (
    <Fragment>
      <Select
        className="industry_select_dropdwon"
        name={input.name}
        values={inputSelectedVal}
        onChange={(newValue) => {
          changeHandler(newValue);
        }}
        options={options}
        valueField="id"
        labelField="name"
        noDataRenderer={customNoDataRenderer}
        clearOnSelect={true}
        clearOnBlur={true}
        searchBy="name"
      />

      {inputSelectedVal &&
        inputSelectedVal.length !== 0 &&
        inputSelectedVal.map((val: any, ind: number) => {
          return (
            <p key={ind} className="page4_input_area_inner_p1 p4_opt_flex">
              {val.name}&nbsp;
              <span
                className="cusrorP"
                onClick={() => {
                  removeIndustry(val, ind);
                }}
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

export default OccupationSelect;
