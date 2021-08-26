import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import Select from "react-dropdown-select";
import { RootState } from "../../../../redux/reducer";
import {
  getIndustries,
  updateIndustries,
} from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { businessRegDropdown } from "../../../../redux/action/DropdownData/businessRegDropdown";
import "./UpdateCommen.css";
import Loader from "../../../../utils/Loader/Loader";
import { ToastContainer } from "react-toastify";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";

interface Props {
  history: any;
}

const UpdateIndustries: React.FC<Props> = (props: Props) => {
  const ref1 = useRef(true);
  const dispatch = useDispatch();

  const getIndustriesReducer = useSelector(
    (state: RootState) => state.getIndustriesReducer
  );
  const industriesDropdownReducer = useSelector(
    (state: RootState) => state.industriesDropdownReducer
  );
  const updateIndustriesReducer = useSelector(
    (state: RootState) => state.updateIndustriesReducer
  );

  const goBack = () => {
    props.history.goBack();
    setLoading(false);
  };
  const [initialVal, setInitialVal]: any = useState({ industries: [] });
  const [option, setOption] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ref1.current = true;
    setLoading(true);
    dispatch(getIndustries());
    dispatch(businessRegDropdown());
  }, []);

  useEffect(() => {
    const { data, loading, error } = getIndustriesReducer;
    if (
      industriesDropdownReducer.data &&
      !industriesDropdownReducer.error &&
      data &&
      !error &&
      !loading
    ) {
      let updateStateWith: any = [];
      for (let i = 0; i < industriesDropdownReducer.data.length; i++) {
        for (let j = 0; j < data.data.length; j++)
          industriesDropdownReducer.data[i].id === data.data[j] &&
            updateStateWith.push(industriesDropdownReducer.data[i]);
        // .splice(i, 1)
      }
      setLoading(false);
      setOption(industriesDropdownReducer.data);

      setInitialVal({ ...initialVal, industries: updateStateWith });
    }
  }, [getIndustriesReducer, industriesDropdownReducer]);

  useEffect(() => {
    if (ref1.current) ref1.current = false;
    else {
      const { data, loading, error } = updateIndustriesReducer;
      if (loading) setLoading(true);
      if (!loading && error) setLoading(false);
      if (!loading && data && !error) {
        setLoading(false);
        goBack();
      }
    }
  }, [updateIndustriesReducer]);

  const updateOptionsDropdown = (test: any) => {
    for (var i = 0; i < option.length; i++) {
      // console.log(option[i].id);
      for (var j = 0; j < test.length; j++) {
        if (option[i].id == test[j].id) {
          option.splice(i, 1);
        }
      }
    }
    setOption(option);
  };

  const removeIndustry = (
    valToRm: any,
    index: number,
    changeHandler: (value: any[]) => void
  ) => {
    const { industries } = initialVal;
    let copy = industries;
    copy.splice(index, 1);
    // updateOptionsDropdown(copy);
    // alert(JSON.stringify(inputSelectdValCopy, undefined, 2));
    setInitialVal({ ...initialVal, industries: copy });
    changeHandler(copy);
  };

  const handleOptionSelect = (newOpt: any) => {
    console.log(newOpt);
    if (newOpt.length > 1) {
    } else if (newOpt.length !== 0) {
      const copy = initialVal;
      const { industries } = copy;
      let updateWith = false;
      industries.filter((val: any, ind: number) => {
        if (val.id === newOpt[0].id) {
          updateWith = true;
        }
      });
      if (!updateWith) {
        let test = [...industries, newOpt[0]];
        updateOptionsDropdown(test);

        setInitialVal({ ...initialVal, industries: test });
      }
    }
  };

  const handleIndustriesUpdate = (val: any) => {
    let payload: any = [];
    val.industries.map((val: any) => payload.push(val.id));
    dispatch(updateIndustries(payload));
  };

  return (
    <>
      <NavbarHeader />
      <div className="mt-5">
        <section className="page_text_area step4_page_text_area">
          <Container>
            <Row>
              <div className="page_text_title">
                <h1>Update Industries </h1>
                <p className="step4_page_text_area_p">
                  Please choose up to 5 industries that best describe your
                  business. <br />
                  For example if you are a plumber you may choose “Trade” and
                  “Maintenance”...{" "}
                </p>
              </div>
            </Row>
          </Container>
        </section>
        {/*--- page_text_area End-----*/}
        <section className="page_input_area">
          <Container>
            <Form
              onSubmit={handleIndustriesUpdate}
              initialValues={initialVal}
              validate={(values) => {
                const errors: any = {};
                if (values.industries && values.industries.length === 0) {
                  errors["industries"] = "Required";
                } else if (values.industries.length > 5) {
                  errors["industries"] = "Maximum 5 industries can be added";
                } else {
                  errors["industries"] = undefined;
                }
                return errors;
              }}
            >
              {({ handleSubmit, submitting, pristine }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={12}>
                        <div className="page_input_area_inner page4_input_area_inner">
                          <Field
                            name="industries"
                            placeholder="Choose upto 5 industries"
                          >
                            {({ input, meta, ...rest }) => {
                              return (
                                <>
                                  <Select
                                    clearOnSelect={true}
                                    className="industry_select_dropdwon"
                                    name={input.name}
                                    values={input.value}
                                    // values={initialVal.industries}
                                    onChange={(newValue) =>
                                      handleOptionSelect(newValue)
                                    }
                                    options={option}
                                    valueField="id"
                                    labelField="name"
                                  />
                                  {input.value &&
                                    input.value.length !== 0 &&
                                    input.value.map((val: any, ind: number) => {
                                      return (
                                        <p
                                          key={ind}
                                          className="page4_input_area_inner_p1 p4_opt_flex"
                                        >
                                          {val.name}&nbsp;
                                          <span
                                            className="cusrorP"
                                            onClick={() => {
                                              removeIndustry(
                                                val,
                                                ind,
                                                input.onChange
                                              );
                                            }}
                                          >
                                            Remove
                                          </span>
                                        </p>
                                      );
                                    })}
                                  {meta.touched && meta.error && (
                                    <span className="error">*{meta.error}</span>
                                  )}
                                </>
                              );
                            }}
                          </Field>
                        </div>
                      </Col>
                    </Row>
                    <section
                      className="page_button_area p3"
                      style={{ paddingTop: "48px" }}
                    >
                      <div className="container">
                        <Row >

                         <div className = "flex_items">
                          <div className="col-md-6">
                            <div className = "next_button">
                            <button
                              className="updatebtn page_button_inner pg_next_btn ml150"
                              type="submit"
                            >
                              Update Industries
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
          </Container>
        </section>
      </div>
      {loading && <Loader />}
      <ToastContainer autoClose={2000} />
      <TabFooter />
    </>
  );
};

export default UpdateIndustries;
