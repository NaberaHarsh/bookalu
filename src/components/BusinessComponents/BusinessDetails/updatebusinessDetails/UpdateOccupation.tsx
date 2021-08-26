import React, { useEffect, useState, useRef } from "react";
import { RootState } from "../../../../redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  businessRegDropdown,
  createOccupation,
} from "../../../../redux/action/DropdownData/businessRegDropdown";
import {
  getOccupation,
  updateOccupation,
} from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { Form, Field } from "react-final-form";
import { Row } from "react-bootstrap";
import "./UpdateCommen.css";
import { ToastContainer } from "react-toastify";
import Loader from "../../../../utils/Loader/Loader";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";
interface Props {
  history: any;
}

const UpdateOccupation: React.FC<Props> = (props: Props) => {
  const renderOn = useRef(true);
  const renderOn1 = useRef(true);
  const dispatch = useDispatch();
  const occupationDropdownReducer = useSelector(
    (state: RootState) => state.occupationDropdownReducer
  );

  const createOccupationReducer = useSelector(
    (state: RootState) => state.createOccupationReducer
  );

  const getOccupationReducer = useSelector(
    (state: RootState) => state.getOccupationReducer
  );

  const updateOccupationReducer = useSelector(
    (state: RootState) => state.updateOccupationReducer
  );

  const goBack = () => props.history.goBack();
  const [dropDownOption, setDropDownOption] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const [selectedVal, setSelectedVal]: any = useState([]);
  const [showEr, setShowEr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    renderOn.current = true;
    renderOn1.current = true;
    dispatch(getOccupation());
    dispatch(businessRegDropdown());
  }, []);

  const loaderStateUpdate = () => setLoading(!loading);

  useEffect(() => {
    const { data, loading, error } = getOccupationReducer;
    if (occupationDropdownReducer.error && !loading) setLoading(false);
    if (
      occupationDropdownReducer.data &&
      !occupationDropdownReducer.error &&
      data &&
      !error &&
      !loading
    ) {
      let updateStateWith: any = [];
      for (let i = 0; i < occupationDropdownReducer.data.length; i++) {
        for (let j = 0; j < data.data.length; j++)
          occupationDropdownReducer.data[i].id === data.data[j] &&
            updateStateWith.push(occupationDropdownReducer.data[i]);
      }
      setLoading(false);
      setDropDownOption(occupationDropdownReducer.data);

      setSelectedVal((selectedVal: any) => [...updateStateWith]);
    }
  }, [getOccupationReducer, occupationDropdownReducer]);

  useEffect(() => {
    if (renderOn.current) renderOn.current = false;
    else {
      const { data, loading, error } = createOccupationReducer;
      if (loading) setLoading(true);
      if (!loading && error) setLoading(false);
      if (!loading && data && !error) {
        const found = selectedVal.some((el: any) => el.name === data.data.name);
        if (!found) updateSelectedVal(data.data);
        clearInp();
      }
    }
  }, [createOccupationReducer]);

  /* Final update occupation */
  useEffect(() => {
    if (renderOn1.current) renderOn1.current = false;
    else {
      const { data, loading, error } = updateOccupationReducer;
      if (loading) setLoading(true);
      if (!loading && error) setLoading(false);
      if (!loading && data && !error) {
        // console.log(data);
        goBack();
      }
    }
  }, [updateOccupationReducer]);

  const clearInp = () => setInpVal("");

  /* Update the selcted value into list  */
  const updateSelectedVal = (data: any) =>
    setSelectedVal((selectedVal: any) => [...selectedVal, data]);

  /* Check if the data is in the dropdwon list if its there then add it to the list  */
  const checkList = (value: string) =>
    dropDownOption.filter((val: any) => val.name === value && val);

  const handleChoosenOpt = () => {
    let valueL = checkList(inpVal);

    if (valueL.length !== 0) {
      const found = selectedVal.some((el: any) => el.name === inpVal);
      if (!found) {
        updateSelectedVal(valueL[0]);
        clearInp();
      }
    } else {
      dispatch(createOccupation({ name: inpVal }));
    }
  };

  const removeOccupation = (ind: number) => {
    let cp = selectedVal;
    cp.splice(ind, 1);
    console.log(cp);
    setSelectedVal((selectedVal: any) => [...cp]);
  };

  const onUpdateHandler = (val: any) => {
    if (selectedVal.length === 0) setShowEr(true);
    else {
      let cp: any = [];
      selectedVal.map((val: any) => {
        cp.push(val.id);
      });
      // console.log(cp);

      dispatch(updateOccupation(cp));
    }
  };

  return (
    <div>
      <NavbarHeader />
      <section className="page_text_area step5_page_text_area mt-4">
        <div className="container">
          <div className="row">
            <div className="page_text_title ">
              <h1>Update Occupation</h1>
              <p className="step4_page_text_area_p step5_page_text_area_p">
                Please type and select your occupation below. <br />
                For example plumber, hairdresser, accountant. Your business may
                have more than one. <br />
                If it doesn’t show in the list below use the plus button to add
                a new occupation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*--- page_text_area End-----*/}

      <section className="page_input_area">
        <div className="container">
          <Form onSubmit={onUpdateHandler}>
            {({ handleSubmit, values, errors }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="page_input_area_inner page5_input_area_inner">
                        <Field name="occupation">
                          {({ input }) => {
                            return (
                              <>
                                <input
                                  name={input.name}
                                  list="occupationSearch"
                                  placeholder="Start typing..."
                                  onChange={(val) => {
                                    setInpVal(val.target.value);
                                  }}
                                  onFocus={() => setShowEr(false)}
                                />
                                <datalist id="occupationSearch">
                                  {dropDownOption.map(
                                    (value: any, index: number) => (
                                      <option key={value.id}>
                                        {value.name}
                                      </option>
                                    )
                                  )}
                                </datalist>

                                {showEr && (
                                  <span className="error">*Required</span>
                                )}
                                <span
                                  className="page5_input_area_inner_add cusrorP"
                                  onClick={handleChoosenOpt}
                                >
                                  <img src="/images/add.png" alt="iage" />
                                </span>

                                {selectedVal &&
                                  selectedVal.length !== 0 &&
                                  selectedVal.map((val: any, ind: number) => {
                                    return (
                                      <p
                                        key={ind}
                                        className="page4_input_area_inner_p1 p4_opt_flex"
                                      >
                                        {val.name}&nbsp;
                                        <span
                                          onClick={() => removeOccupation(ind)}
                                        >
                                          Remove
                                        </span>
                                      </p>
                                    );
                                  })}
                              </>
                            );
                          }}
                        </Field>
                      </div>
                    </div>
                  </div>

                  <section
                    className="page_button_area "
                    style={{ paddingTop: "48px" }}
                  >
                    <div className="container">
                      <Row>
                        {/* <div className="col-md-6">
                          <button
                            className="updatebtn page_button_inner pg_next_btn ml150"
                            type="submit"
                          >
                            Update occupation
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="updatebtn page_button_inner ml11"
                            type="button"
                            onClick={goBack}
                          >
                            Go Back ?
                          </button>
                        </div> */}
                        <div className = "flex_items">
                          <div className="col-md-6">
                            <div className = "next_button">
                            <button
                              className="updatebtn page_button_inner pg_next_btn ml150"
                              type="submit"
                            >
                               Update occupation
                            </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className ="prev_button">
                            <button
                              className="prev_button_setup page_button_inner ml11"
                              type="button"
                              onClick={goBack}
                            >
                              « Go Back ?
                            </button>
                            </div>
                          </div>
                         </div> 

                      </Row>
                    </div>
                  </section>
                </form>
              );
            }}
          </Form>
        </div>
      </section>
      {loading && <Loader />}
      <ToastContainer autoClose={2000} />
      <TabFooter />
    </div>
  );
};

export default UpdateOccupation;
