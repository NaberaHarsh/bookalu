/* eslint-disable no-useless-escape */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import arrayMutators from "final-form-arrays";
import { Form } from "react-final-form";
// import createDecorator from "final-form-focus";
import { InitialState } from "../../../utils/interfaces/businessRegister";
import { businessRegPgVal } from "../../../redux/action/businessPagesAction/businessRegPgVal";
import NavbarHeader from "../../commonComponents/Header-Footer/Header/NavbarHeader";
// import { getIndustries } from "../../../redux/action/globalActions/Industriesdroplist/Industries";
import { businessFormSubmitAction } from "../../../redux/action/businessPagesAction/businessFormSubmitAction";
import { RootState } from "../../../redux/reducer";
import { AuthRoutes, nonAuthRoutes } from "../../../RouteHandler/routeEnum";
import { useHistory } from "react-router";
import Loader from "../../../utils/Loader/Loader";
import { businessRegDropdown } from "../../../redux/action/DropdownData/businessRegDropdown";
import TabFooter from "../../commonComponents/Header-Footer/Footer/TabFooter";
import { logoutAction } from "../../../redux/action/authentication/login/loginAction";
import { refreshTokenAction } from "../../../redux/action/refreshToken/refreshTokenAction";
import { FormValues } from "./propsType";
import {
  homebusinessVal,
  mobilebusinessVal,
  shopbusinessVal,
} from "../../BusinessComponents/BusinessDetails/updatebusinessDetails/Validations_updatebusiness_details";
import {
  facebookUrlValidation,
  flikerValidation,
  instagramUrlValidation,
  linkedInUrlValidation,
  pinterestValidation,
  twitterUrlValidation,
  youtubeValidation,
  checkardValidation,
} from "./validation";
import "./companyInfo.css";
import "./StepFromCount.css";
import "./TabBar.css";
import "./BusinessRegister.css";
import GlobalPopup from "../../commonComponents/Popups/GlobalPopup/GlobalPopup";

type StateProps = {
  handleFormSubmit: (values: FormValues) => void;
};

// 3-steps form
const Wizard: React.FC<StateProps> = ({ handleFormSubmit, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref1 = useRef(true);
  const ref2 = useRef(true);
  const businessFormSubmitReducer = useSelector(
    (state: RootState) => state.businessFormSubmitReducer
  );
  const refreshTokenReducer = useSelector(
    (state: RootState) => state.refreshTokenReducer
  );
  // const address = useSelector((state: RootState) => state.searchSelectedRducer);

  const [page, setPage] = useState(0);
  const [values, setValues] = useState<FormValues | undefined>(undefined);
  const [hideSuccessModal, setHideSuccessModal] = useState<boolean>(false);
  const activePage = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;
  const test = {
    tabOne: {
      heading: "",
      subservices: [
        {
          name: "",
          timereqquired: "00:30",
          price: "",
          poa: false,
          appoinmentvia: ["mobile", null, null],
          haslinebreak: false,
          actualTimereqquired: new Date(),
        },
      ],
    },
    tabTwo: {
      heading: "",
      subservices: [
        {
          name: "",
          timereqquired: "00:30",
          price: "",
          poa: false,
          appoinmentvia: ["mobile", null, null],
          haslinebreak: false,
          actualTimereqquired: new Date(),
        },
      ],
    },
    tabThree: {
      heading: "",
      subservices: [
        {
          name: "",
          timereqquired: "00:30",
          price: "",
          poa: false,
          appoinmentvia: ["mobile", null, null],
          haslinebreak: false,
          actualTimereqquired: new Date(),
        },
      ],
    },
  };
  const [initialVal, setInitailVal] = useState<InitialState>({
    home: "home",
    mobile: null,
    shop: null,
    tab1: "tab1",
    tab2: null,
    tab3: null,
    companyinfo: {
      logoid: null,
      logo: null,
      coverphotoid: null,
      coverphoto: null,
      companyname: "",
      username: "",
      bio: "",
    },
    industries: [],
    occupation: [],
    contactdetails: {
      homebusiness: {
        address: {
          addressLine1: "",
          addressLine2: "",
          town: "",
          county: "",
          country: "United Kingdom",
          postcode: "",
        },
        phonenumber1: "",
        phonenumber2: "",
        email: "",
      },
      mobile: {
        address: {
          addressLine1: "",
          addressLine2: "",
          town: "",
          county: "",
          country: "United Kingdom",
          postcode: "",
        },
        phonenumber1: "",
        phonenumber2: "",
        email: "",
      },
      shop: {
        address: {
          addressLine1: "",
          addressLine2: "",
          town: "",
          county: "",
          country: "United Kingdom",
          postcode: "",
        },
        phonenumber1: "",
        phonenumber2: "",
        email: "",
      },
    },
    openingtimes: {
      homebusiness: [
        {
          val: "Monday",
          day: 0,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Tuesday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Wednesday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Thuresday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Friday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Saturday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Sunday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
      ],
      mobile: [
        {
          val: "Monday",
          day: 0,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Tuesday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Wednesday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Thuresday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Friday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Saturday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Sunday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
      ],
      shop: [
        {
          val: "Monday",
          day: 0,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Tuesday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Wednesday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Thuresday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Friday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Saturday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
        {
          val: "Sunday",
          day: null,
          starttime: "09:00",
          endtime: "05:00",
          actualStartTime: new Date(
            new Date(new Date(new Date().setHours(9)).setMinutes(0)).setSeconds(
              0
            )
          ),
          actualEndTime: new Date(
            new Date(
              new Date(new Date().setHours(17)).setMinutes(0)
            ).setSeconds(0)
          ),
        },
      ],
    },
    services: test,
    socialmediafeed: [
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Twitter",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Facebook",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Instagram",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Youtube",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Pintrest",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Linkedin",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Flickr",
      },
      {
        url: "",
        isselected: false,
        socialMediaType: null,
        type: "Checkatrade",
      },
    ],
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thuresday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    IndustriesOpt: [],
    OccupationOpt: [],
  });

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    ref1.current = true;
    ref2.current = true;
  }, []);

  useEffect(() => {
    // Occupation
    dispatch(businessRegDropdown());
  }, [dispatch]);

  // next page
  const next = (values: FormValues) => {
    console.log("here in next");
    setPage(Math.min(page + 1, React.Children.count(children)));
    setValues(values);
  };

  // previous page
  const previous = () => {
    setPage(Math.max(page - 1, 0));
  };
  const handleSubmit = (values: FormValues) => {
    console.log("here in submit");
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      dispatch(businessFormSubmitAction(values));
      return handleFormSubmit(values);
    } else {
      next(values);
    }
  };

  useEffect(() => {
    if (ref1.current) ref1.current = false;
    else {
      const { error, data, loading } = businessFormSubmitReducer;
      if (loading) setLoader(true);
      if (error && !loading) setLoader(false);
      if (!loading && !error && data) {
        setLoader(false);
        setHideSuccessModal(true);
      }
    }
  }, [businessFormSubmitReducer]);

  useEffect(() => {
    if (ref2.current) ref2.current = false;
    else {
      const { error, loading, data } = refreshTokenReducer;
      if (loading) setLoader(true);
      if (error && !loading) {
        setLoader(false);
        history.push(nonAuthRoutes.home);
      }
      if (data && !loading && !error) {
        history.push(nonAuthRoutes.home);
      }
    }
  }, [refreshTokenReducer]);

  const handleModalClose = () => {
    setHideSuccessModal(!hideSuccessModal);
    dispatch(refreshTokenAction());
  };

  /* Refresh Token Reducer **** - TEST - ***** */

  // useEffect(() => {
  //   dispatch(refreshTokenAction());
  // }, []);

  /* Refresh Token Reducer **** - TEST - **** */

  // useEffect(() => {
  //   const { dataReceived, data } = address;
  //   const initialValCopy = initialVal;
  //   const { contactdetails } = initialValCopy;
  //   if (dataReceived && data.calledFrom === "homeBusiness") {
  //     contactdetails.homebusiness.address.addressLine1 = data.addressLine1;
  //     contactdetails.homebusiness.address.addressLine2 = data.addressLine2;
  //     contactdetails.homebusiness.address.town = data.town;
  //     contactdetails.homebusiness.address.county = data.county;
  //     contactdetails.homebusiness.address.country = data.country;
  //     contactdetails.homebusiness.address.postcode = data.postcode;

  //     setInitailVal({ ...initialVal, ...initialValCopy });
  //   }

  //   if (dataReceived && data.calledFrom === "mobileBusiness") {
  //     contactdetails.mobile.address.addressLine1 = data.addressLine1;
  //     contactdetails.mobile.address.addressLine2 = data.addressLine2;
  //     contactdetails.mobile.address.town = data.town;
  //     contactdetails.mobile.address.county = data.county;
  //     contactdetails.mobile.address.country = data.country;
  //     contactdetails.mobile.address.postcode = data.postcode;

  //     setInitailVal({ ...initialVal, ...initialValCopy });
  //   }
  //   if (dataReceived && data.calledFrom === "shopBusiness") {
  //     contactdetails.shop.address.addressLine1 = data.addressLine1;
  //     contactdetails.shop.address.addressLine2 = data.addressLine2;
  //     contactdetails.shop.address.town = data.town;
  //     contactdetails.shop.address.county = data.county;
  //     contactdetails.shop.address.country = data.country;
  //     contactdetails.shop.address.postcode = data.postcode;

  //     setInitailVal({ ...initialVal, ...initialValCopy });
  //   }
  // }, [address]);

  return (
    <Fragment>
      <NavbarHeader />
      {/* Debugger */}
      <div className="stepFormMiddleBody">
        <section className="page_top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page_top_inner">
                  <p className="oneOfSeven">{page + 1} of 7</p>
                  <div className="top_inner_item">
                    <p className="top_inner_item_pc">1. Company Info</p>
                    <p className="top_inner_item_tab firstStep">Company Info</p>
                    <div
                      /* prettier-ignore  */
                      className={`${page + 1 !== 1 && page + 1 > 1 ? "top_inner_item_cicrel1" : ""}  top_inner_item_cicrel `}
                    >
                      <b>1</b>
                    </div>
                  </div>
                  <div
                    className="top_inner_item top_inner_common"
                    id={`${page == 1 ? "top_inner_item2" : ""}`}
                  >
                    <p className="top_inner_item_pc">2. Contact Details</p>
                    <p className="top_inner_item_tab">Contact Details</p>
                    <div
                      id={`${page + 1 == 2 && "top_inner_item_cicrel2"}`}
                      /* prettier-ignore  */
                      className={`${page + 1 !== 2 && page + 1 > 2 ? "top_inner_item_cicrel1" : ""} 
                                  ${page + 1 < 2 ? "top_inner_item_circle_b_black" : ""} top_inner_item_cicrel`}
                    >
                      <b>2</b>
                    </div>
                  </div>
                  <div
                    className="top_inner_item top_inner_common"
                    id={`${page == 2 ? "top_inner_item3" : ""}`}
                  >
                    <p className="top_inner_item_pc">3. Opening Times</p>
                    <p className="top_inner_item_tab">Opening Times</p>
                    <div
                      id={`${page + 1 == 3 && "top_inner_item_cicrel3"}`}
                      /* prettier-ignore  */
                      className={`${page + 1 !== 3 && page + 1 > 3 ? "top_inner_item_cicrel1" : ""}  
                                  ${page + 1 < 3 ? "top_inner_item_circle_b_black" : ""} top_inner_item_cicrel`}
                    >
                      <b>3</b>
                    </div>
                  </div>
                  <div
                    className="top_inner_item top_inner_common"
                    id={`${page == 3 ? "top_inner_item4" : ""}`}
                  >
                    <p className="top_inner_item_pc">4. Industry</p>
                    <p className="top_inner_item_tab top_inner_item_tab1">
                      Industry
                    </p>
                    <div
                      id={`${page + 1 == 4 && "top_inner_item_cicrel4"}`}
                      /* prettier-ignore  */
                      className={`${page + 1 !== 4 && page + 1 > 4 ? "top_inner_item_cicrel1" : ""}
                                  ${page + 1 < 4 ? "top_inner_item_circle_b_black" : ""} top_inner_item_cicrel`}
                    >
                      <b>4</b>
                    </div>
                  </div>
                  <div
                    className="top_inner_item top_inner_common"
                    id={`${page == 4 ? "top_inner_item5" : ""}`}
                  >
                    <p className="top_inner_item_pc">5. Occupation</p>
                    <p className="top_inner_item_tab top_inner_item_tab1">
                      Occupation
                    </p>
                    <div
                      id={`${page + 1 == 5 && "top_inner_item_cicrel5"}`}
                      /* prettier-ignore  */
                      className={`${page + 1 !== 5 && page + 1 > 5 ? "top_inner_item_cicrel1" : ""}
                                  ${page + 1 < 5 ? "top_inner_item_circle_b_black" : ""} top_inner_item_cicrel`}
                    >
                      <b>5</b>
                    </div>
                  </div>
                  <div
                    className="top_inner_item top_inner_common"
                    id={`${page == 5 ? "top_inner_item6" : ""}`}
                  >
                    <p className="top_inner_item_pc">6. Services</p>
                    <p className="top_inner_item_tab top_inner_item_tab1">
                      Occupation
                    </p>
                    <div
                      //
                      id={`${page + 1 == 6 && "top_inner_item_cicrel6"}`}
                      /* prettier-ignore  */
                      className={`${page + 1 !== 6 && page + 1 > 6 ? "top_inner_item_cicrel1" : ""}
                                  ${page + 1 < 6 ? "top_inner_item_circle_b_black" : ""} top_inner_item_cicrel`}
                    >
                      <b>6</b>
                    </div>
                  </div>
                  <div
                    className="top_inner_item top_inner_common top_inner_item7"
                    id={`${page == 6 ? "top_inner_item7" : ""}`}
                  >
                    <p className="top_inner_item_pc">7. Social Media</p>
                    <p className="top_inner_item_tab">Social Media</p>
                    <div
                      id={`${page + 1 == 7 && "top_inner_item_cicrel7"}`}
                      /* prettier-ignore  */
                      className={`${page + 1 !== 7 && page + 1 > 7 ? "top_inner_item_cicrel1" : ""} 
                                  ${page + 1 < 7 ? "top_inner_item_circle_b_black" : ""} top_inner_item_cicrel`}
                    >
                      <b>7</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Form
          onSubmit={handleSubmit}
          mutators={{
            // potentially other mutators could be merged here
            ...arrayMutators,
          }}
          validate={(values) => {
            let errors: any = {};
            let homebusinessError = homebusinessVal(values);
            let shopbusinessError = shopbusinessVal(values);
            let mobilebusinessError = mobilebusinessVal(values);
            // social media URL validation
            let twitter = twitterUrlValidation(values);
            let facebook = facebookUrlValidation(values);
            let instagram = instagramUrlValidation(values);
            let youtube = youtubeValidation(values);
            let pintrest = pinterestValidation(values);
            let linkedIn = linkedInUrlValidation(values);
            let fliker = flikerValidation(values);
            let checkatrade = checkardValidation(values);

            const openingTimeError: any = {
              homebusiness: [null],
              mobile: [null],
              shop: [null],
            };

            const servicesErrors: any = {
              tabOne: null,
              tabTwo: null,
              tabThree: null,
            };

            let socialmediafeed: any = [];
            const tabOneErr: any = {};
            const tabTwoErr: any = {};
            const tabThreeErr: any = {};
            const subServicesTabOne: any = [];
            const subServicesTabTwo: any = [];
            const subServicesTabThree: any = [];
            const tabErrorMt: any = {
              tabOne: {
                heading: undefined,
                subservices: [{}],
              },
              tabTwo: {
                heading: undefined,
                subservices: [{}],
              },
              tabThree: {
                heading: undefined,
                subservices: [{}],
              },
            };

            if (!values.home && !values.shop && !values.mobile) {
              errors["home"] = "Required";
            }
            if (!values.tab1 && !values.tab2 && !values.tab3) {
              errors.tab1 = "Required";
            }

            if (values.home === "home" && homebusinessError.error) {
              openingTimeError.homebusiness =
                homebusinessError.errorObj.homebusiness;
              for (let i = 0; i <= 7; i++) {
                if (openingTimeError.shop.length <= 1)
                  openingTimeError.shop[i] = {};
                if (openingTimeError.mobile.length <= 1)
                  openingTimeError.mobile[i] = {};
              }
            }

            if (values.shop === "shop" && shopbusinessError.error) {
              openingTimeError.shop = shopbusinessError.errorObj.shop;
              for (let i = 0; i <= 7; i++) {
                if (openingTimeError.homebusiness.length <= 1)
                  openingTimeError.homebusiness[i] = {};
                if (openingTimeError.mobile.length <= 1)
                  openingTimeError.mobile[i] = {};
              }
            }

            if (values.mobile === "mobile" && mobilebusinessError.error) {
              openingTimeError.mobile = mobilebusinessError.errorObj.mobile;
              for (let i = 0; i <= 7; i++) {
                if (openingTimeError.shop.length <= 1)
                  openingTimeError.shop[i] = {};
                if (openingTimeError.homebusiness.length <= 1)
                  openingTimeError.homebusiness[i] = {};
              }
            }
            errors.openingtimes = openingTimeError;

            if (values.tab1 === "tab1") {
              if (!values.services.tabOne.heading) {
                servicesErrors.tabOne = { heading: "Required" };
              }
            }

            if (values.tab1 === "tab1" && page === 5) {
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
            if (values.tab2 === "tab2" && page === 5) {
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
            if (values.tab3 === "tab3" && page === 5) {
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

            /* 
            -- COntact detials validations 
            */

            const contactdetails: any = {
              homebusiness: {
                address: {
                  addressLine1: "",
                  country: "United Kingdom",
                  postcode: "",
                },
                email: "",
                phonenumber2: "",
                phonenumber1: "",
              },
              mobile: {
                address: {
                  addressLine1: "",
                  country: "United Kingdom",
                  postcode: "",
                },
                email: "",
                phonenumber2: "",
                phonenumber1: "",
              },
              shop: {
                address: {
                  addressLine1: "",
                  country: "United Kingdom",
                  postcode: "",
                },
                email: "",
                phonenumber2: "",
                phonenumber1: "",
              },
            };
            /* Home Error message START  */
            if (values.home === "home" && page === 1) {
              const homebusinessEr: any = {
                address: {
                  addressLine1: "",
                  country: "United Kingdom",
                  postcode: "",
                },
                email: "",
                phonenumber1: "",
                phonenumber2: "",
              };
              if (!values.contactdetails.homebusiness.address.addressLine1) {
                homebusinessEr.address.addressLine1 = "Required";
              } else {
                homebusinessEr.address.addressLine1 = undefined;
              }

              if (!values.contactdetails.homebusiness.address.country) {
                homebusinessEr.address.country = "Required";
              } else {
                homebusinessEr.address.country = undefined;
              }

              if (!values.contactdetails.homebusiness.address.postcode) {
                homebusinessEr.address.postcode = "Required";
              } else {
                homebusinessEr.address.postcode = undefined;
              }

              if (!values.contactdetails.homebusiness.email) {
                homebusinessEr.email = "Required";
              } else {
                homebusinessEr.email = undefined;
              }

              if (
                values.contactdetails.homebusiness.email &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                  values.contactdetails.homebusiness.email
                )
              ) {
                homebusinessEr.email = "Please Provide valid email address";
              }
              if (
                values.contactdetails.homebusiness.phonenumber1 &&
                isNaN(Number(values.contactdetails.homebusiness.phonenumber1))
              ) {
                homebusinessEr.phonenumber1 =
                  "Please Provide valid phone number";
              } else if (
                values.contactdetails.homebusiness.phonenumber1 &&
                ![10, 11].includes(
                  values.contactdetails.homebusiness.phonenumber1.length
                )
              ) {
                homebusinessEr.phonenumber1 =
                  "Phone number must be of 10 or 11 digits";
              } else {
                homebusinessEr.phonenumber1 = undefined;
              }
              if (
                values.contactdetails.homebusiness.phonenumber2 &&
                isNaN(Number(values.contactdetails.homebusiness.phonenumber2))
              ) {
                homebusinessEr.phonenumber2 =
                  "Please Provide valid phone number";
              } else if (
                values.contactdetails.homebusiness.phonenumber2 &&
                ![10, 11].includes(
                  values.contactdetails.homebusiness.phonenumber2.length
                )
              ) {
                homebusinessEr.phonenumber2 =
                  "Phone number must be of 10 or 11 digits";
              } else if (
                !values.contactdetails.homebusiness.phonenumber1 &&
                !values.contactdetails.homebusiness.phonenumber2
              )
                homebusinessEr.phonenumber2 = "Atleast One number is required";
              else homebusinessEr.phonenumber2 = undefined;

              contactdetails.homebusiness = homebusinessEr;
            } else {
              contactdetails.homebusiness = undefined;
            }
            /* Shop Error Message START  */
            if (values.shop === "shop" && page === 1) {
              const shopEr: any = {
                address: {
                  addressLine1: "",
                  country: "United Kingdom",
                  postcode: "",
                },
                email: "",
                phonenumber1: "",
                phonenumber2: "",
              };
              if (!values.contactdetails.shop.address.addressLine1) {
                shopEr.address.addressLine1 = "Required";
              } else {
                shopEr.address.addressLine1 = undefined;
              }

              if (!values.contactdetails.shop.address.country) {
                shopEr.address.country = "Required";
              } else {
                shopEr.address.country = undefined;
              }

              if (!values.contactdetails.shop.address.postcode) {
                shopEr.address.postcode = "Required";
              } else {
                shopEr.address.postcode = undefined;
              }

              if (!values.contactdetails.shop.email) {
                shopEr.email = "Required";
              } else {
                shopEr.email = undefined;
              }

              if (
                values.contactdetails.shop.email &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                  values.contactdetails.shop.email
                )
              ) {
                shopEr.email = "Please Provide valid email address";
              }

              if (
                values.contactdetails.shop.phonenumber1 &&
                isNaN(Number(values.contactdetails.shop.phonenumber1))
              ) {
                shopEr.phonenumber1 = "Please Provide valid phone number";
              } else if (
                values.contactdetails.shop.phonenumber1 &&
                ![10, 11].includes(
                  values.contactdetails.shop.phonenumber1.length
                )
              ) {
                shopEr.phonenumber1 = "Phone number must be of 10 or 11 digits";
              } else {
                shopEr.phonenumber1 = undefined;
              }
              if (
                values.contactdetails.shop.phonenumber2 &&
                isNaN(Number(values.contactdetails.shop.phonenumber2))
              ) {
                shopEr.phonenumber2 = "Please Provide valid phone number";
              } else if (
                values.contactdetails.shop.phonenumber2 &&
                ![10, 11].includes(
                  values.contactdetails.shop.phonenumber2.length
                )
              ) {
                shopEr.phonenumber2 = "Phone number must be of 10 or 11 digits";
              } else if (
                !values.contactdetails.shop.phonenumber1 &&
                !values.contactdetails.shop.phonenumber2
              )
                shopEr.phonenumber2 = "Atleast One number is required";
              else shopEr.phonenumber2 = undefined;

              contactdetails.shop = shopEr;
            } else {
              contactdetails.shop = undefined;
            }
            /* Mobile error message START */
            if (values.mobile === "mobile" && page === 1) {
              const mobileEr: any = {
                address: {
                  addressLine1: "",
                  country: "United Kingdom",
                  postcode: "",
                },
                email: "",
                phonenumber1: "",
                phonenumber2: "",
              };

              if (!values.contactdetails.mobile.address.addressLine1) {
                mobileEr.address.addressLine1 = "Required";
              } else {
                mobileEr.address.addressLine1 = undefined;
              }

              if (!values.contactdetails.mobile.address.country) {
                mobileEr.address.country = "Required";
              } else {
                mobileEr.address.country = undefined;
              }

              if (!values.contactdetails.mobile.address.postcode) {
                mobileEr.address.postcode = "Required";
              } else {
                mobileEr.address.postcode = undefined;
              }

              if (!values.contactdetails.mobile.email) {
                mobileEr.email = "Required";
              } else {
                mobileEr.email = undefined;
              }

              if (
                values.contactdetails.mobile.email &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                  values.contactdetails.mobile.email
                )
              ) {
                mobileEr.email = "Please Provide valid email address";
              }

              if (
                values.contactdetails.mobile.phonenumber1 &&
                isNaN(Number(values.contactdetails.mobile.phonenumber1))
              ) {
                mobileEr.phonenumber1 = "Please Provide valid phone number";
              } else if (
                values.contactdetails.mobile.phonenumber1 &&
                ![10, 11].includes(
                  values.contactdetails.mobile.phonenumber1.length
                )
              ) {
                mobileEr.phonenumber1 =
                  "Phone number must be of 10 or 11 digits";
              } else {
                mobileEr.phonenumber1 = undefined;
              }
              if (
                values.contactdetails.mobile.phonenumber2 &&
                isNaN(Number(values.contactdetails.mobile.phonenumber2))
              ) {
                mobileEr.phonenumber2 = "Please Provide valid phone number";
              } else if (
                values.contactdetails.mobile.phonenumber2 &&
                ![10, 11].includes(
                  values.contactdetails.mobile.phonenumber2.length
                )
              ) {
                mobileEr.phonenumber2 =
                  "Phone number must be of 10 or 11 digits";
              } else if (
                !values.contactdetails.mobile.phonenumber1 &&
                !values.contactdetails.mobile.phonenumber2
              )
                mobileEr.phonenumber2 = "Atleast One number is required";
              else mobileEr.phonenumber2 = undefined;
              contactdetails.mobile = mobileEr;
            } else {
              contactdetails.mobile = undefined;
            }

            errors.contactdetails = contactdetails;

            // Twitter
            if (
              values.socialmediafeed[0].socialMediaType === 0 &&
              twitter?.error
            ) {
              socialmediafeed[0] = { url: twitter.twitterError };
              errors.socialmediafeed = socialmediafeed;
            }

            // Facebook
            if (
              values.socialmediafeed[1].socialMediaType === 1 &&
              facebook?.error
            ) {
              socialmediafeed[1] = { url: facebook.fbError };
              errors.socialmediafeed = socialmediafeed;
            }
            // Instagram
            if (
              values.socialmediafeed[2].socialMediaType === 2 &&
              instagram?.error
            ) {
              socialmediafeed[2] = { url: instagram.instaError };
              errors.socialmediafeed = socialmediafeed;
            }
            // Youtube
            if (
              values.socialmediafeed[3].socialMediaType === 3 &&
              youtube?.error
            ) {
              socialmediafeed[3] = { url: youtube.youtubeError };
              errors.socialmediafeed = socialmediafeed;
            }
            // Pinterest  Currently woorking only for india
            if (
              values.socialmediafeed[4].socialMediaType === 4 &&
              pintrest?.error
            ) {
              socialmediafeed[4] = { url: pintrest.pintrError };
              errors.socialmediafeed = socialmediafeed;
            }
            // Linkedin
            if (
              values.socialmediafeed[5].socialMediaType === 5 &&
              linkedIn?.error
            ) {
              socialmediafeed[5] = { url: linkedIn.linkedInError };
              errors.socialmediafeed = socialmediafeed;
            }
            // flickr.com
            if (
              values.socialmediafeed[6].socialMediaType === 6 &&
              fliker?.error
            ) {
              socialmediafeed[6] = { url: fliker.flikError };
              errors.socialmediafeed = socialmediafeed;
            }
            // https://www.checkatrade.com/
            if (
              values.socialmediafeed[7].socialMediaType === 7 &&
              checkatrade?.error
            ) {
              socialmediafeed[7] = { url: checkatrade.checkardError };
              errors.socialmediafeed = socialmediafeed;
            }

            return errors;
          }}
          initialValues={initialVal}
          render={({ handleSubmit, submitting, values, errors }) => {
            dispatch(businessRegPgVal(values));
            return (
              <form onSubmit={handleSubmit} autoComplete="off">
                {activePage}
                {/* {React.cloneElement(activePage, { valores: values })} */}
                <div className="buttons">
                  <section className="page_button_area">
                    <div className="container">
                      <div className="row">
                        {!isLastPage && (
                          <div
                            className={`col-md-12 ${page === 0 && "mx-auto"}`}
                          >
                            <div
                              className={` page_button_inner pg_next_btn ${
                                page == 3 || page == 4 ? "pg3" : ""
                              }`}
                            >
                              {/*  ${ page === 0 ? "step_form_step_one_btn" : "step_form_step_next_m" } */}
                              <button
                                type="submit"
                                className={`step_form_step_one_btn`}
                              >
                                Next »
                              </button>
                            </div>{" "}
                          </div>
                        )}
                        {isLastPage && (
                          <div className="col-md-12">
                            <div className="text-center">
                              <div className="page_button_inner ">
                                <button
                                  type="submit"
                                  className="step_form_step_one_btn"
                                  disabled={submitting}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </div>{" "}
                            </div>
                          </div>
                        )}
                        {page > 0 && (
                          <div className="col-md-12">
                            <div
                              className="text-center"
                              // className={`page_button_inner ${
                              //   page == 3 || page == 4 ? "pg3" : ""
                              // }`}
                            >
                              <button
                                type="button"
                                onClick={previous}
                                // style={{marginLeft:"46%"}}
                                className="step_form_btn_prev_m"
                              >
                                « Prev{" "}
                              </button>
                            </div>{" "}
                          </div>
                        )}
                        {/* response.data.data */}
                      </div>
                    </div>
                  </section>
                </div>
                {/* <div style={{ display: "flex", backgroundColor: "red" }}>
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
                  <pre style={{ color: "white" }}>
                    {JSON.stringify(errors, undefined, 2)}
                  </pre>
                </div> */}
              </form>
            );
          }}
        />
      </div>

      {loader && <Loader />}
      <GlobalPopup
        onHide={handleModalClose}
        show={hideSuccessModal}
        message={"Business Registered Sucessfully!"}
        showBtn={false}
        headerMessage={"Congratulations!"}
      />
      <TabFooter />
    </Fragment>
  );
};

export default Wizard;
