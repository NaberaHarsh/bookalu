import React, { Fragment, useEffect, useRef, useState } from "react";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import TabOneServices from "./update_services_sub_forms/TabOneServices";
import TabTwoServices from "./update_services_sub_forms/TabTwoServices";
import TabThreeServices from "./update_services_sub_forms/TabThreeServices";
import { SelectBusinessType } from "../../../../utils/form";
import Loader from "../../../../utils/Loader/Loader";
import {
  getServices,
  deleteServiceAction,
  deleteServiceTabAction,
  updateServiceTabsAction,
} from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { RootState } from "../../../../redux/reducer";
import { OnChange } from "react-final-form-listeners";
import Tabs, { TabPane } from "rc-tabs";
import { tabInitialValues } from "./initialVal";
import { ToastContainer } from "react-toastify";
interface Props {
  history: any;
}

const UpdateServices: React.FC<Props> = (props: Props) => {
  const ref2 = useRef(false);
  const dispatch = useDispatch();
  const getServicesReducer = useSelector(
    (state: RootState) => state.getServicesReducer
  );
  const ref1 = useRef(true);
  const ref3 = useRef(true);
  const DeleteServiceTabReducer = useSelector(
    (state: RootState) => state.DeleteServiceTabReducer
  );

  const updateServicesReducer = useSelector(
    (state: RootState) => state.updateServicesReducer
  );

  const updateServiceTabReducer = useSelector(
    (state: RootState) => state.updateServiceTabReducer
  );

  const goBack = () => props.history.goBack();

  const [loading, setLoading] = useState(false);

  interface SDetails {
    forTab: any;
    serviceInd: number;
    service: any;
    masterField: any;
    forUpdating: string;
  }
  const [deleteService, setDeleteService] = useState(false);
  const [serviceDetails, setServiceDetails] = useState<SDetails>({
    forTab: "",
    serviceInd: 0,
    service: {},
    masterField: null,
    forUpdating: "",
  });

  const [iniT, setIniT] = useState({
    selectedTabs: {
      tabOne: null,
      tabTwo: null,
      tabThree: null,
    },
    services: {
      tabOne: {
        id: "",
        heading: "",

        subservices: [
          {
            appoinmentvia: ["", "", "mobile"],
            appoinmentviastring: "",
            haslinebreak: false,
            id: "",
            name: "asfd",
            price: 4325,
            sequenceKey: 0,
            tabItemId: null,
            timereqquired: 1611741790000,
          },
        ],
      },
      tabTwo: {
        id: "",
        heading: "",
        subservices: [
          {
            appoinmentvia: ["", "", "mobile"],
            appoinmentviastring: "",
            haslinebreak: false,
            id: "",
            name: "asfd",
            price: 4325,
            sequenceKey: 0,
            tabItemId: null,
            timereqquired: 1611741790000,
          },
        ],
      },
      tabThree: {
        id: "",
        heading: "",
        subservices: [
          {
            appoinmentvia: ["", "", "mobile"],
            appoinmentviastring: "",
            haslinebreak: false,
            id: "",
            name: "asfd",
            price: 4325,
            sequenceKey: 0,
            tabItemId: null,
            timereqquired: 1611741790000,
          },
        ],
      },
    },
  });

  useEffect(() => {
    ref2.current = true;
    ref3.current = true;
    dispatch(getServices());
  }, []);

  /* UPdate Initial state of the form  */
  useEffect(() => {
    const { loading, data, error } = getServicesReducer;
    if (loading) setLoading(true);
    if (!loading && error) setLoading(false);
    if (!loading && data && !error) {
      setLoading(false);

      const selectedTabsD: any = {
        tabOne: null,
        tabTwo: null,
        tabThree: null,
      };
      const updateTabsD: any = {
        tabOne: null,
        tabTwo: null,
        tabThree: null,
      };

      if (data.data.tabOne) {
        updateTabsD.tabOne = {
          heading: data.data.tabOne.heading,
          id: data.data.tabOne.id,
          subservices: data.data.tabOne.subservices.map((val: any) => {
            return {
              appoinmentvia: val.appoinmentvia,
              appoinmentviastring: val.appoinmentviastring,
              haslinebreak: val.haslinebreak,
              id: val.id,
              name: val.name,
              price: val.price,
              sequenceKey: val.sequenceKey,
              tabItemId: val.tabItemId,
              timereqquired: new Date(val.timereqquired),
            };
          }),
        };
        selectedTabsD.tabOne = "tabOne";
      }
      if (data.data.tabTwo) {
        updateTabsD.tabTwo = {
          heading: data.data.tabTwo.heading,
          id: data.data.tabTwo.id,
          subservices: data.data.tabTwo.subservices.map((val: any) => {
            return {
              appoinmentvia: val.appoinmentvia,
              appoinmentviastring: val.appoinmentviastring,
              haslinebreak: val.haslinebreak,
              id: val.id,
              name: val.name,
              price: val.price,
              sequenceKey: val.sequenceKey,
              tabItemId: val.tabItemId,
              timereqquired: new Date(val.timereqquired),
            };
          }),
        };
        selectedTabsD.tabTwo = "tabTwo";
      } else {
        updateTabsD.tabTwo = tabInitialValues(
          data.data.tabOne.subservices[0].appoinmentvia,
          data.data.tabOne.subservices[0].appoinmentviastring
        );
      }
      if (data.data.tabThree) {
        updateTabsD.tabThree = {
          heading: data.data.tabThree.heading,
          id: data.data.tabThree.id,
          subservices: data.data.tabThree.subservices.map((val: any) => {
            return {
              appoinmentvia: val.appoinmentvia,
              appoinmentviastring: val.appoinmentviastring,
              haslinebreak: val.haslinebreak,
              id: val.id,
              name: val.name,
              price: val.price,
              sequenceKey: val.sequenceKey,
              tabItemId: val.tabItemId,
              timereqquired: new Date(val.timereqquired),
            };
          }),
        };
        selectedTabsD.tabThree = "tabThree";
      } else {
        updateTabsD.tabThree = tabInitialValues(
          data.data.tabOne.subservices[0].appoinmentvia,
          data.data.tabOne.subservices[0].appoinmentviastring
        );
      }

      setIniT({ ...iniT, services: updateTabsD, selectedTabs: selectedTabsD });
    }
  }, [getServicesReducer]);

  useEffect(() => {
    if (ref1.current) ref1.current = false;
    else {
      const { error, data, loading } = DeleteServiceTabReducer;
      const cpyT: any = iniT;

      if (loading) setLoading(true);
      if (error) {
        setLoading(false);
      }
      if (!loading && data && !error) {
        setLoading(false);
        setIniT({ ...cpyT });
        cpyT.selectedTabs[serviceDetails.forTab] = null;
      }
    }
  }, [DeleteServiceTabReducer]);

  /* When user tries to delete a service or a complete tab then this function is called to make a API call  */
  const deleteConfrimed = () => {
    const cpyT: any = iniT;

    if (serviceDetails.forUpdating === "services") {
      const { service, forTab, serviceInd } = serviceDetails;
      if (service.id) {
        dispatch(deleteServiceAction({ id: service.id }));
      } else {
        cpyT.services[forTab].subservices.splice(serviceInd, 1);

        setIniT({ ...cpyT });
      }
    }
    if (serviceDetails.forUpdating === "tabs") {
      if (cpyT.services[serviceDetails.forTab].id) {
        dispatch(
          deleteServiceTabAction({
            id: cpyT.services[serviceDetails.forTab].id,
          })
        );
      } else {
        cpyT.selectedTabs[serviceDetails.forTab] = null;
        setIniT({ ...cpyT });
        setDeleteService(!deleteService);
      }
    }
  };

  useEffect(() => {
    if (ref2.current) ref2.current = false;
    else {
      const { loading, error, data } = updateServicesReducer;
      if (loading) setLoading(true);
      if (error && !loading) setLoading(false);
      if (!loading && !error && data) {
        goBack();
      }
    }
  }, [updateServicesReducer]);

  useEffect(() => {
    if (ref3.current) ref3.current = false;
    else {
      const { loading, data, error } = updateServiceTabReducer;
      if (loading) setLoading(true);
      if (!loading && error) setLoading(false);
      if (!loading && !error && data) {
        goBack();
      }
    }
  }, [updateServiceTabReducer]);

  const tabOneLineBreakUpdate = (index: number, fieldValues: any) => {
    const cpyT = iniT;
    fieldValues[index].haslinebreak = true;
    cpyT.services.tabOne.subservices = fieldValues;
    setIniT({ ...cpyT });
  };

  const tabOneRmLBreak = (index: number) => {
    const cpyT = iniT;
    cpyT.services.tabOne.subservices[index].haslinebreak = false;
    setIniT({ ...cpyT });
  };

  const tabOneRmServiceHandler = async (
    index: any,
    fields: any,
    masterField: any
  ) => {
    //
    const cpyT = iniT;
    cpyT.services.tabOne.subservices = fields;
    if (cpyT.services.tabOne.subservices[index].id) {
      // console.log(cpyT.services.tabOne.subservices[index].id);
      const ServiceItemId = cpyT.services.tabOne.subservices[index].id;
      dispatch(deleteServiceAction({ id: ServiceItemId }));
    }

    await setIniT({ ...cpyT });
  };

  /* Tab two function calls */
  const tabTwoLineBreakUpdate = (index: number, fieldValues: any) => {
    const cpyT = iniT;
    fieldValues[index].haslinebreak = true;
    cpyT.services.tabTwo.subservices = fieldValues;
    setIniT({ ...cpyT });
  };

  const tabTwoRmLBreak = (index: number) => {
    const cpyT = iniT;
    cpyT.services.tabTwo.subservices[index].haslinebreak = false;
    setIniT({ ...cpyT });
  };
  const tabTwoRmServiceHandler = async (
    index: any,
    fields: any,
    masterField: any
  ) => {
    console.log(fields);

    const cpyT = iniT;
    cpyT.services.tabTwo.subservices = fields;
    await setIniT({ ...cpyT });
    if (cpyT.services.tabTwo.subservices[index].id) {
      // console.log(cpyT.services.tabTwo.subservices[index].id);
      const ServiceItemId = cpyT.services.tabTwo.subservices[index].id;
      dispatch(deleteServiceAction({ id: ServiceItemId }));
    }
  };

  /* Tab three function calls  */
  const tabThreeLineBreakUpdate = (index: number, fieldValues: any) => {
    const cpyT = iniT;
    fieldValues[index].haslinebreak = true;
    cpyT.services.tabThree.subservices = fieldValues;
    setIniT({ ...cpyT });
  };

  const tabThreeRmLBreak = (index: number) => {
    const cpyT = iniT;
    cpyT.services.tabThree.subservices[index].haslinebreak = false;
    setIniT({ ...cpyT });
  };

  const tabThreeRmServiceHandler = async (
    index: any,
    fields: any,
    masterField: any
  ) => {
    const cpyT = iniT;
    cpyT.services.tabThree.subservices = fields;
    await setIniT({ ...cpyT });
    if (cpyT.services.tabThree.subservices[index].id) {
      // console.log(cpyT.services.tabThree.subservices[index].id);
      const ServiceItemId = cpyT.services.tabThree.subservices[index].id;
      dispatch(deleteServiceAction({ id: ServiceItemId }));
    }
  };

  useEffect(() => {}, [DeleteServiceTabReducer]);

  const updateCheckBoxState = (val: any, updateFor: any) => {
    if (!val) {
      const test: any = iniT;
      if (test.services[updateFor].id) {
        dispatch(deleteServiceTabAction({ id: test.services[updateFor].id }));
      }

      setServiceDetails({
        ...serviceDetails,
        forTab: updateFor,
        forUpdating: "tabs",
      });
    }
  };
  const [testcheckbox, setTestcheckbox] = useState(true);

  const updateCheck = () => {
    setTestcheckbox(!testcheckbox);
  };

  const updateServicesHandler = (val: any) => {
    dispatch(updateServiceTabsAction({ data: val }));
  };
  return (
    <div>
      <NavbarHeader />
      <section className="step6_page_text_area2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="step6_page_text_area2_inner">
                <h5>Services tabs </h5>
                <p>
                  You can add up to 3 tabs to help seperate the services you
                  provide. For example you may provide Hair, Beauty and Wellness
                  services.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--- page_text_area End-----*/}

      <section className="page_input_area">
        <Container>
          <Form
            onSubmit={updateServicesHandler}
            mutators={{ ...arrayMutators }}
            initialValues={iniT}
            validate={(values) => {
              const errors: any = {};
              const tabOneErr: any = {};
              const tabTwoErr: any = {};
              const tabThreeErr: any = {};
              const subServicesTabOne: any = [];
              const subServicesTabTwo: any = [];
              const subServicesTabThree: any = [];
              const tabErrorMt: any = {
                tabOne: {
                  heading: "",
                  subservices: [],
                },
                tabTwo: {
                  heading: undefined,
                  subservices: undefined,
                },
                tabThree: {
                  heading: undefined,
                  subservices: undefined,
                },
              };
              if (values.selectedTabs.tabOne === "tabOne") {
                if (!values.services.tabOne.heading) {
                  tabOneErr.heading = "Required";
                }
                if (values.services.tabOne.subservices.length === 0) {
                  tabOneErr.subservices = "Required";
                } else {
                  values.services.tabOne.subservices.map(
                    (val: any, index: number) => {
                      subServicesTabOne[index] = {
                        name: !val.name ? "Required" : undefined,
                        price: !val.price
                          ? "Required"
                          : isNaN(val.price)
                          ? "Must be a number"
                          : undefined,
                      };
                    }
                  );
                  tabOneErr.subservices = subServicesTabOne;
                }

                tabErrorMt.tabOne = tabOneErr;
              }

              /* Tab Two */
              if (values.selectedTabs.tabTwo === "tabTwo") {
                if (!values.services.tabTwo.heading) {
                  tabTwoErr.heading = "Required";
                }
                if (values.services.tabTwo.subservices.length === 0) {
                  tabTwoErr.subservices = "Required";
                } else {
                  values.services.tabTwo.subservices.map(
                    (val: any, index: number) => {
                      subServicesTabTwo[index] = {
                        name: !val.name ? "Required" : undefined,
                        price: !val.price
                          ? "Required"
                          : isNaN(val.price)
                          ? "Must be a number"
                          : undefined,
                      };
                    }
                  );
                  tabTwoErr.subservices = subServicesTabTwo;
                }
                tabErrorMt.tabTwo = tabTwoErr;
              }

              /* Tab Three */
              if (values.selectedTabs.tabThree === "tabThree") {
                if (!values.services.tabThree.heading) {
                  tabThreeErr.heading = "Required";
                }
                if (values.services.tabThree.subservices.length === 0) {
                  tabThreeErr.subservices = "Required";
                } else {
                  values.services.tabThree.subservices.map(
                    (val: any, index: number) => {
                      subServicesTabThree[index] = {
                        name: !val.name ? "Required" : undefined,
                        price: !val.price
                          ? "Required"
                          : isNaN(val.price)
                          ? "Must be a number"
                          : undefined,
                      };
                    }
                  );
                  tabThreeErr.subservices = subServicesTabThree;
                }
                tabErrorMt.tabThree = tabThreeErr;
              }

              errors.services = tabErrorMt;

              return errors;
            }}
          >
            {({ handleSubmit, values, errors }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={12}>
                      <Tabs
                        defaultActiveKey="1"
                        tabPosition="top"
                        className="update_service_tabs"
                      >
                        <TabPane
                          className="nav-item step6_nav_item1"
                          tab={
                            <>
                              <span className="nav-link  step6_nav_link step6_nav_link1 ">
                                <Field
                                  name="selectedTabs.tabOne"
                                  type="checkbox"
                                  // format={(v) => v === "tabOne"}
                                  // parse={(v) => (v ? "tabOne" : null)}
                                  id="page6_checkbox1"
                                  className="page2_checkbox2"
                                >
                                  {({ input, meta, ...rest }) => {
                                    return (
                                      <Fragment>
                                        <input
                                          disabled={true}
                                          // {...input}
                                          type="checkbox"
                                          checked={
                                            iniT.selectedTabs.tabOne
                                              ? true
                                              : false
                                          }
                                          {...rest}
                                          // checked={input.value ? true : false}
                                          onChange={(e) => input.onChange(e)}
                                        />
                                        {meta.touched && meta.error && (
                                          <span className="error">
                                            *{meta.error}
                                          </span>
                                        )}
                                      </Fragment>
                                    );
                                  }}
                                </Field>{" "}
                                <OnChange name="selectedTabs.tabOne">
                                  {(val) => {
                                    updateCheckBoxState(val, "tabOne");
                                  }}
                                </OnChange>
                                Tab 1
                              </span>
                            </>
                          }
                          key="1"
                        >
                          <div className="page_input_area_inner page6_input_area_inner">
                            <TabOneServices
                              tabOneInitailD={iniT.services.tabOne}
                              addLineBreak={tabOneLineBreakUpdate}
                              removeLineBreak={tabOneRmLBreak}
                              removeService={tabOneRmServiceHandler}
                              tabSelected={values.selectedTabs.tabOne}
                              // addService={tabOneAddService}
                            />
                          </div>
                        </TabPane>
                        <TabPane
                          className="nav-item step6_nav_item1"
                          key="2"
                          tab={
                            <>
                              <span className="nav-link step6_nav_link step6_nav_link1">
                                <Field
                                  name="selectedTabs.tabTwo"
                                  component={SelectBusinessType}
                                  type="checkbox"
                                  format={(v) => v === "tabTwo"}
                                  parse={(v) => (v ? "tabTwo" : null)}
                                  id="page6_checkbox1"
                                  className="page2_checkbox2"
                                />{" "}
                                <OnChange name="selectedTabs.tabTwo">
                                  {(val) => {
                                    updateCheckBoxState(val, "tabTwo");
                                  }}
                                </OnChange>
                                Tab 2
                              </span>
                            </>
                          }
                        >
                          <div className="page_input_area_inner page6_input_area_inner">
                            <TabTwoServices
                              tabTwoInitailD={iniT.services.tabTwo}
                              addLineBreak={tabTwoLineBreakUpdate}
                              removeLineBreak={tabTwoRmLBreak}
                              removeService={tabTwoRmServiceHandler}
                              tabSelected={values.selectedTabs.tabTwo}
                            />
                          </div>
                        </TabPane>
                        <TabPane
                          key="3"
                          className="nav-item step6_nav_item1"
                          tab={
                            <>
                              <span className="nav-link step6_nav_link step6_nav_link3 step6_nav_link1">
                                <Field
                                  name="selectedTabs.tabThree"
                                  component={SelectBusinessType}
                                  type="checkbox"
                                  format={(v) => v === "tabThree"}
                                  parse={(v) => (v ? "tabThree" : null)}
                                  id="page6_checkbox1"
                                  className="page2_checkbox2"
                                />{" "}
                                <OnChange name="selectedTabs.tabThree">
                                  {(val) => {
                                    updateCheckBoxState(val, "tabThree");
                                  }}
                                </OnChange>
                                Tab 3
                              </span>
                            </>
                          }
                        >
                          <div className="page_input_area_inner page6_input_area_inner">
                            <TabThreeServices
                              tabThreeInitailD={iniT.services.tabThree}
                              addLineBreak={tabThreeLineBreakUpdate}
                              removeLineBreak={tabThreeRmLBreak}
                              removeService={tabThreeRmServiceHandler}
                              tabSelected={values.selectedTabs.tabThree}
                            />
                          </div>
                        </TabPane>
                      </Tabs>
                    </Col>
                  </Row>

                  <section
                    className="page_button_area "
                    style={{ paddingTop: "48px" }}
                  >
                    <div className="container">
                      <Row>
        

                        {/* <div className="col-md-6">
                          <button
                            className="updatebtn page_button_inner pg_next_btn ml95"
                            type="submit"
                          >
                            Update Services
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="updatebtn page_button_inner ml11"
                            type="button"
                            onClick={goBack}
                          >
                           « Go Back ?
                          </button>
                        </div> */}
                        <div className = "flex_items">
                          <div className="col-md-6">
                            <div className = "next_button">
                            <button
                              className="updatebtn page_button_inner pg_next_btn ml150"
                              type="submit"
                            >
                              Update Services
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
      <ToastContainer autoClose={2000} />
      {loading && <Loader />}
      <TabFooter />
    </div>
  );
};

export default UpdateServices;
