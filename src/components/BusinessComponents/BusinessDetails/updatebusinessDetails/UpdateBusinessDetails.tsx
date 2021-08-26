import React, { useState, useEffect, useRef, Fragment } from "react";
import { Field, Form } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import arrayMutators from "final-form-arrays";
import { Row, Col, Container } from "react-bootstrap";
import {
  HistoryProp,
  LocationPorp,
  MatchProp,
} from "../../../../utils/interfaces/common_props";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactDetails,
  updateContactDetails,
} from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { RootState } from "../../../../redux/reducer";
import Loader from "../../../../utils/Loader/Loader";
import "./UpdateCommen.css";
import { SelectBusinessType } from "../../../../utils/form";
import {
  homebusinessVal,
  mobilebusinessVal,
  shopbusinessVal,
  initialValStrut,
} from "./Validations_updatebusiness_details";
import HomeBusiness from "./updateBusiness_sub_forms/HomeBusiness";
import MobileBusiness from "./updateBusiness_sub_forms/MobileBusiness";
import ShopBusiness from "./updateBusiness_sub_forms/ShopBusiness";
import Tabs, { TabPane } from "rc-tabs";
import { ToastContainer } from "react-toastify";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";

interface StateProps extends HistoryProp, LocationPorp, MatchProp {}

const UpdateBusinessDetails: React.FC<StateProps> = (props: StateProps) => {
  const ref1 = useRef(false);
  const goBack = () => props.history.goBack();
  const dispatch = useDispatch();
  const getContactDetailsReducer = useSelector(
    (state: RootState) => state.getContactDetailsReducer
  );
  const address = useSelector((state: RootState) => state.searchSelectedRducer);

  const updateContactDetailsReducer = useSelector(
    (state: RootState) => state.updateContactDetailsReducer
  );

  const [loading, setLoading] = useState(false);

  const [iniT, setIniT]: any = useState({
    selectedTab: {
      home: null,
      shop: null,
      mobile: null,
    },
    contactdetails: {
      homebusiness: {
        address: {
          addressLine1: "",
          addressLine2: "",
          country: "",
          county: "",
          postcode: "",
          town: "",
        },
        email: "",
        phonenumber1: "",
        phonenumber2: "",
      },
      mobile: {
        address: {
          addressLine1: "",
          addressLine2: "",
          country: "",
          county: "",
          postcode: "",
          town: "",
        },
        email: "",
        phonenumber1: "",
        phonenumber2: "",
      },
      shop: {
        address: {
          addressLine1: "",
          addressLine2: "",
          country: "",
          county: "",
          postcode: "",
          town: "",
        },
        email: "",
        phonenumber1: "",
        phonenumber2: "",
      },
    },
    openingtimes: {
      homebusiness: [
        {
          val: "Monday",
          day: 0,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Tuesday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Wednesday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Thuresday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Friday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Saturday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Sunday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
      ],
      mobile: [
        {
          val: "Monday",
          day: 0,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Tuesday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Wednesday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Thuresday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Friday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Saturday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Sunday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
      ],
      shop: [
        {
          val: "Monday",
          day: 0,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Tuesday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Wednesday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Thuresday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Friday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Saturday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
        {
          val: "Sunday",
          day: null,
          starttime: "2021-02-01T09:00:57-08:00",
          endtime: "2021-02-01T21:00:57-08:00",
        },
      ],
    },
  });

  useEffect(() => {
    dispatch(getContactDetails());
  }, []);
  /* Update Opening Times Loop  */
  const updateTime = (loopOn: any, forV: any) => {
    const cp = iniT;
    loopOn.map((val: any, ind: number) => {
      cp.openingtimes[forV][val.day].day = val.day;
      cp.openingtimes[forV][val.day].starttime = val.starttime;
      cp.openingtimes[forV][val.day].endtime = val.endtime;
    });
    setIniT({ ...iniT, openingtimes: cp.openingtimes });
  };

  useEffect(() => {
    const { data, loading, error } = getContactDetailsReducer;
    if (loading) setLoading(true);
    if (error && !loading) setLoading(false);
    let updateValFor = {
      contactdetails: {
        homebusiness: initialValStrut,
        mobile: initialValStrut,
        shop: initialValStrut,
      },
    };
    const tabSelct: any = {
      selectedTab: {
        home: null,
        mobile: null,
        shop: null,
      },
    };
    if (data && !loading && !error) {
      setLoading(false);
      const { contactdetails, openingtimes } = data.data;

      if (contactdetails.homebusiness) {
        updateValFor.contactdetails.homebusiness = contactdetails.homebusiness;
        tabSelct.selectedTab.home = "home";
        updateTime(openingtimes.homebusiness, "homebusiness");
      }
      if (contactdetails.mobile) {
        updateValFor.contactdetails.mobile = contactdetails.mobile;
        tabSelct.selectedTab.mobile = "mobile";
        updateTime(openingtimes.mobile, "mobile");
      }
      if (contactdetails.shop) {
        updateValFor.contactdetails.shop = contactdetails.shop;
        tabSelct.selectedTab.shop = "shop";
        updateTime(openingtimes.shop, "shop");
      }

      setIniT({
        ...iniT,
        contactdetails: updateValFor.contactdetails,
        selectedTab: tabSelct.selectedTab,
      });
    }
  }, [getContactDetailsReducer]);

  useEffect(() => {
    const { dataReceived, data } = address;
    const initialValCopy = iniT;
    const { contactdetails } = initialValCopy;
    if (dataReceived && data.calledFrom === "updatehomebusiness") {
      contactdetails.homebusiness.address.addressLine1 = data.addressLine1;
      contactdetails.homebusiness.address.addressLine2 = data.addressLine2;
      contactdetails.homebusiness.address.town = data.town;
      contactdetails.homebusiness.address.county = data.county;
      contactdetails.homebusiness.address.country = data.country;
      contactdetails.homebusiness.address.postcode = data.postcode;

      setIniT({ ...iniT, ...initialValCopy });
    }

    if (dataReceived && data.calledFrom === "updatemobilebusiness") {
      contactdetails.mobile.address.addressLine1 = data.addressLine1;
      contactdetails.mobile.address.addressLine2 = data.addressLine2;
      contactdetails.mobile.address.town = data.town;
      contactdetails.mobile.address.county = data.county;
      contactdetails.mobile.address.country = data.country;
      contactdetails.mobile.address.postcode = data.postcode;

      setIniT({ ...iniT, ...initialValCopy });
    }
    if (dataReceived && data.calledFrom === "updateshopbusiness") {
      contactdetails.shop.address.addressLine1 = data.addressLine1;
      contactdetails.shop.address.addressLine2 = data.addressLine2;
      contactdetails.shop.address.town = data.town;
      contactdetails.shop.address.county = data.county;
      contactdetails.shop.address.country = data.country;
      contactdetails.shop.address.postcode = data.postcode;

      setIniT({ ...iniT, ...initialValCopy });
    }
  }, [address]);

  useEffect(() => {
    ref1.current = true;
  }, []);

  useEffect(() => {
    if (ref1.current) ref1.current = false;
    else {
      const { loading, error, data } = updateContactDetailsReducer;
      if (loading) setLoading(true);
      if (!loading && data && !error) {
        goBack();
      }
    }
  }, [updateContactDetailsReducer]);

  const updateTabSelected = (value: any, from: any) => {
    const cp = iniT;
    cp.selectedTab[from] = value;
    setIniT({ ...cp });
  };

  const updateBusinessSubmit = (val: any) => {
    // console.log(val);
    dispatch(updateContactDetails({ data: val }));
  };

  return (
    <>
      <NavbarHeader />
      <section className="UpdateBusiness page_text_area step2_page_text_area mt-4">
        <div className="container">
          <div className="row">
            <div className="page_text_title">
              <h1>Update a business contact details </h1>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="page_input_area updateBusiContDetails">
          <Container>
            <Form
              onSubmit={updateBusinessSubmit}
              mutators={{ ...arrayMutators }}
              initialValues={iniT}
              validate={(values) => {
                let errors: any = {};
                let homebusinessError = homebusinessVal(values);
                let shopbusinessError = shopbusinessVal(values);
                let mobilebusinessError = mobilebusinessVal(values);
                const openingTimeError: any = {
                  homebusiness: [null],
                  mobile: [null],
                  shop: [null],
                };
                const contactdetails: any = {
                  homebusiness: {},
                  mobile: {},
                  shop: {},
                };
                if (
                  !values.selectedTab.home &&
                  !values.selectedTab.shop &&
                  !values.selectedTab.mobile
                ) {
                  errors.selectedTab = {
                    home: "*",
                  };
                }
                /* Home Error message START  */
                if (values.selectedTab.home === "home") {
                  if (!values.contactdetails.homebusiness.address.addressLine1)
                    contactdetails.homebusiness = {
                      address: { addressLine1: "Required" },
                    };

                  if (!values.contactdetails.homebusiness.address.country)
                    contactdetails.homebusiness = {
                      address: { country: "Required" },
                    };

                  if (!values.contactdetails.homebusiness.address.postcode)
                    contactdetails.homebusiness = {
                      address: { postcode: "Required" },
                    };

                  if (!values.contactdetails.homebusiness.email)
                    contactdetails.homebusiness = {
                      email: "Required",
                    };
                  if (
                    values.contactdetails.homebusiness.email &&
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.contactdetails.homebusiness.email
                    )
                  )
                    contactdetails.homebusiness = {
                      email: "Please Provide valid email address",
                    };

                  if (!values.contactdetails.homebusiness.phonenumber1)
                    contactdetails.homebusiness = {
                      phonenumber1: "Required",
                    };

                  if (!values.contactdetails.homebusiness.phonenumber2)
                    contactdetails.homebusiness = {
                      phonenumber2: "Required",
                    };
                }
                /* Shop Error Message START  */
                if (values.selectedTab.shop === "shop") {
                  if (!values.contactdetails.shop.address.addressLine1)
                    contactdetails.shop = {
                      address: { addressLine1: "Required" },
                    };

                  if (!values.contactdetails.shop.address.country)
                    contactdetails.shop = {
                      address: { country: "Required" },
                    };

                  if (!values.contactdetails.shop.address.postcode)
                    contactdetails.shop = {
                      address: { postcode: "Required" },
                    };

                  if (!values.contactdetails.shop.email)
                    contactdetails.shop = {
                      email: "Required",
                    };
                  if (
                    values.contactdetails.shop.email &&
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.contactdetails.shop.email
                    )
                  )
                    contactdetails.shop = {
                      email: "Please Provide valid email address",
                    };
                  if (!values.contactdetails.shop.phonenumber1)
                    contactdetails.shop = {
                      phonenumber1: "Required",
                    };

                  if (!values.contactdetails.shop.phonenumber2)
                    contactdetails.shop = {
                      phonenumber2: "Required",
                    };
                }
                /* Mobile error message START */
                if (values.selectedTab.mobile === "mobile") {
                  if (!values.contactdetails.mobile.address.addressLine1)
                    contactdetails.mobile = {
                      address: { addressLine1: "Required" },
                    };

                  if (!values.contactdetails.mobile.address.country)
                    contactdetails.mobile = {
                      address: { country: "Required" },
                    };

                  if (!values.contactdetails.mobile.address.postcode)
                    contactdetails.mobile = {
                      address: { postcode: "Required" },
                    };

                  if (!values.contactdetails.mobile.email)
                    contactdetails.mobile = {
                      email: "Required",
                    };
                  if (
                    values.contactdetails.mobile.email &&
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.contactdetails.mobile.email
                    )
                  )
                    contactdetails.mobile = {
                      email: "Please Provide valid email address",
                    };

                  if (!values.contactdetails.mobile.phonenumber1)
                    contactdetails.mobile = {
                      phonenumber1: "Required",
                    };

                  if (!values.contactdetails.mobile.phonenumber2)
                    contactdetails.mobile = {
                      phonenumber2: "Required",
                    };
                }

                errors.contactdetails = contactdetails;
                if (
                  values.selectedTab.home === "home" &&
                  homebusinessError.error
                ) {
                  openingTimeError.homebusiness =
                    homebusinessError.errorObj.homebusiness;
                  for (let i = 0; i <= 7; i++) {
                    if (openingTimeError.shop.length <= 1)
                      openingTimeError.shop[i] = {};
                    if (openingTimeError.mobile.length <= 1)
                      openingTimeError.mobile[i] = {};
                  }
                }

                if (
                  values.selectedTab.shop === "shop" &&
                  shopbusinessError.error
                ) {
                  // console.log("In shop business time error");
                  openingTimeError.shop = shopbusinessError.errorObj.shop;
                  for (let i = 0; i <= 7; i++) {
                    if (openingTimeError.homebusiness.length <= 1)
                      openingTimeError.homebusiness[i] = {};
                    if (openingTimeError.mobile.length <= 1)
                      openingTimeError.mobile[i] = {};
                  }
                }

                if (
                  values.selectedTab.mobile === "mobile" &&
                  mobilebusinessError.error
                ) {
                  openingTimeError.mobile = mobilebusinessError.errorObj.mobile;
                  for (let i = 0; i <= 7; i++) {
                    if (openingTimeError.shop.length <= 1)
                      openingTimeError.shop[i] = {};
                    if (openingTimeError.homebusiness.length <= 1)
                      openingTimeError.homebusiness[i] = {};
                  }
                }
                errors.openingtimes = openingTimeError;

                return errors;
              }}
            >
              {({ handleSubmit, values, errors }) => {
                return (
                  <form onSubmit={handleSubmit}>
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
                              {" "}
                              <Field
                                name="selectedTab.home"
                                type="checkbox"
                                format={(v) => v === "home"}
                                parse={(v) => (v ? "home" : null)}
                              >
                                {({ input, meta, ...rest }) => {
                                  return (
                                    <Fragment>
                                      <input {...input} {...rest} />
                                      {meta.touched && meta.error && (
                                        <span className="error">
                                          *{meta.error}
                                        </span>
                                      )}
                                    </Fragment>
                                  );
                                }}
                              </Field>{" "}
                              <OnChange name="selectedTab.home">
                                {(value) => updateTabSelected(value, "home")}
                              </OnChange>
                              Home business
                            </span>
                          </>
                        }
                        key="1"
                      >
                        <div className="tab-content tab_content ">
                          <div className="tab-pane fade tab_content_inner active show">
                            <div className="tab_content_inner_item">
                              <div className="contab_tab_inner updatebusiness_padding">
                                <Row>
                                  <HomeBusiness selected={iniT.selectedTab} />
                                </Row>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane
                        className="nav-item step6_nav_item1"
                        tab={
                          <>
                            <span className="nav-link step6_nav_link step6_nav_link1 step6_nav_link3">
                              {" "}
                              <Field
                                name="selectedTab.mobile"
                                component={SelectBusinessType}
                                type="checkbox"
                                format={(v) => v === "mobile"}
                                parse={(v) => (v ? "mobile" : null)}
                              />{" "}
                              Mobile business
                            </span>
                            <OnChange name="selectedTab.mobile">
                              {(value) => updateTabSelected(value, "mobile")}
                            </OnChange>
                          </>
                        }
                        key="2"
                      >
                        <div className="tab-content tab_content ">
                          <div className="tab-pane fade tab_content_inner active show">
                            <div className="tab_content_inner_item">
                              <div className="contab_tab_inner updatebusiness_padding">
                                <Row>
                                  <MobileBusiness selected={iniT.selectedTab} />
                                </Row>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane
                        className="nav-item step6_nav_item1"
                        tab={
                          <>
                            <span className="nav-link step6_nav_link step6_nav_link3 step6_nav_link1">
                              {" "}
                              <Field
                                name="selectedTab.shop"
                                component={SelectBusinessType}
                                type="checkbox"
                                format={(v) => v === "shop"}
                                parse={(v) => (v ? "shop" : null)}
                              />{" "}
                              Shop business
                            </span>
                            <OnChange name="selectedTab.shop">
                              {(value) => updateTabSelected(value, "shop")}
                            </OnChange>
                          </>
                        }
                        key="3"
                      >
                        <div className="tab-content tab_content ">
                          <div className="tab-pane fade tab_content_inner active show">
                            <div className="tab_content_inner_item">
                              <div className="contab_tab_inner updatebusiness_padding">
                                <Row>
                                  <ShopBusiness selected={iniT.selectedTab} />
                                </Row>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                    </Tabs>

                    <Row>
                      {/* <Col md={12} sm={12} className=" offset-1">
                        <div className="udateBusiness_btn_div dFlex">
                          <button
                            className="updatebtn mr-3 mbUnset"
                            type="submit"
                          >
                            Update Business details
                          </button>
                          <button
                            className="updatebtn mbUnset"
                            type="button"
                            onClick={goBack}
                          >
                            Go Back ?
                          </button>
                        </div> 
                      </Col> */}

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

export default UpdateBusinessDetails;
