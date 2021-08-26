import React, { useEffect, useState, useRef, Fragment } from "react";
import {
  TextInput,
  TextAreaInput,
  SingleImgUpload,
  CoverImgUpload,
} from "../../../../utils/form";
import Loader from "../../../../utils/Loader/Loader";
import { Form, Field } from "react-final-form";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from "react-bootstrap";
import {
  characterCount250,
  composeValidators,
  isUserNameExists,
  minimum5char,
  requiredCompanyInfo,
} from "../../../Authentication/businessRegister/validation";
import {
  getCompanyInfo,
  updateCompanyInfo,
} from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer";

import { API_BASE_URL } from "../../../../utils/baseUrl";
import { imgUpload } from "../../../../redux/action/globalActions/ImageUploadActions/ImgUploadActions";
import {
  HistoryProp,
  LocationPorp,
} from "../../../../utils/interfaces/common_props";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";
import "./UpdateCommen.css";

interface StateProps extends HistoryProp, LocationPorp {}

const UpdateCompanyInfo: React.FC<StateProps> = (props: StateProps) => {
  const renderState = useRef(true);
  const formUpdated = useRef(true);

  const dispatch = useDispatch();
  const getCompanyInfoReducer = useSelector(
    (state: RootState) => state.getCompanyinfoReducer
  );
  const updateCompanyInfoReducer = useSelector(
    (state: RootState) => state.updateCompanyinfoReducer
  );
  const imgUploaded = useSelector((state: RootState) => state.imgUpload);
  const { data, loading } = imgUploaded;

  const [loader, setLoader] = useState(false);
  const [imgLoader, setImgLoader]: any = useState(false);
  /* 
  {
    proImg: false,
    covImg: false,
  }
  */
  const [companyInfo, setCompanyInfo] = useState({
    bio: "",
    companyname: "",
    coverphotoid: null,
    logoid: null,
    username: "",
  });

  const goBack = () => props.history.goBack();

  /* Get compnay Info API call  */
  useEffect(() => {
    dispatch(getCompanyInfo());
  }, []);

  /* Update company info. initial state  */
  useEffect(() => {
    const { data, loading, error } = getCompanyInfoReducer;
    if (loading) setLoader(true);
    if (error && !loading) setLoader(false);
    // Set intial State of form
    if (data && !loading && !error) {
      setLoader(false);
      setCompanyInfo({
        ...companyInfo,
        bio: data.data.bio,
        companyname: data.data.companyname,
        coverphotoid: data.data.coverphotoid,
        logoid: data.data.logoid,
        username: data.data.username,
      });
    }
  }, [getCompanyInfoReducer]);

  useEffect(() => {
    if (renderState.current) renderState.current = false;
    else {
      const { error, calledFrom } = imgUploaded;
      if (imgUploaded.loading) setImgLoader(true);
      if (!imgUploaded.loading && error) setImgLoader(false);
      if (!loading && !error && data) {
        if (calledFrom === "updateBusinessProfile") {
          setImgLoader(false);
          setCompanyInfo({
            ...companyInfo,
            logoid: data[0],
          });
        }
        if (calledFrom === "businessCoverUpdate") {
          setImgLoader(false);
          setCompanyInfo({
            ...companyInfo,
            coverphotoid: data[0],
          });
        }
      }
    }
  }, [imgUploaded]);

  useEffect(() => {
    if (formUpdated.current) formUpdated.current = false;
    else {
      const { data, loading, error } = updateCompanyInfoReducer;

      if (loading) {
        console.log("Loader start");
        setLoader(true);
      }
      if (!loading && !error && data) {
        setLoader(false);
        goBack();
      }
    }
  }, [updateCompanyInfoReducer]);

  //   Handle Image Upload
  // const handleImgUpload = (val: any, update: any, calledFrom: string) =>
  //   dispatch(imgUpload({ files: [val], calledFrom }));
  const handleImgUpload = (value: any) => {
    console.log(value);
  };

  /* Dispatch update compnay info to update the the details  */
  const handleCompanyInfoUpdate = (val: any) =>
    dispatch(updateCompanyInfo(val));

  return (
    <>
      <NavbarHeader />
      {getCompanyInfoReducer.loading ? (
        <Loader />
      ) : getCompanyInfoReducer.error && !getCompanyInfoReducer.loading ? (
        <section className="page_text_area mT_120">
          <div className="container">
            <div className="row">
              <div className="page_text_title">
                <h1>Something went Wrong please try again...</h1>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="page_text_area mT_120">
            <div className="container">
              <div className="row">
                <div className="page_text_title">
                  <h1>Update company information</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="page_input_area">
            <Container>
              <Form
                initialValues={companyInfo}
                onSubmit={handleCompanyInfoUpdate}
                render={({ handleSubmit, submitting, pristine }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <div className="page_input_inner">
                            {/* Image section START  */}
                            {/* --  Profile Image Select -- */}
                            <div className="input_inner_item">
                              <Field
                                name="companyinfo.logo"
                                type="file"
                                id="myfile"
                              >
                                {({ input, ...rest }) => {
                                  return (
                                    <Fragment>
                                      <p>
                                        Add a logo
                                        <OverlayTrigger
                                          placement="right"
                                          overlay={
                                            <Tooltip id={`tooltip-right`}>
                                              Choose a profile image for
                                              business profile
                                            </Tooltip>
                                          }
                                        >
                                          <img
                                            src="/images/dontknow.png"
                                            alt="images"
                                            className="ml-3"
                                          />
                                        </OverlayTrigger>
                                      </p>
                                      <label
                                        htmlFor="myfile"
                                        className="input_inner_item_label"
                                      >
                                        Choose an image
                                      </label>
                                      <input
                                        type={input.type}
                                        name={input.name}
                                        onChange={(val) => {
                                          if (
                                            val.target.files?.length &&
                                            val.target.files?.length !== 0
                                          ) {
                                            handleImgUpload(val);
                                          }
                                        }}
                                        disabled={loading}
                                        {...rest}
                                        accept="image/*"
                                      />

                                      {/* {calledFrom === "businessProfile" && loading ? (
        <Spinner
          className="businessProfileImg"
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) :
       ( */}
                                      <img
                                        className="businessProfileImg"
                                        src={`${
                                          // values.companyinfo.logoid
                                          // ? `${API_BASE_URL}/File/${values.companyinfo.logoid}`:
                                          "/images/image_upload.png"
                                        } `}
                                        alt="logo"
                                      />
                                      {/* ) */}
                                    </Fragment>
                                  );
                                }}
                              </Field>
                            </div>

                            {/* -- Cover Image Upload --  */}
                            <div className="input_inner_item2">
                              <Field
                                name="companyinfo.coverphoto"
                                type="file"
                                id="myfile2"
                              >
                                {({ input, ...rest }) => {
                                  return (
                                    <Fragment>
                                      <p>
                                        Add a cover photo
                                        <OverlayTrigger
                                          placement="right"
                                          overlay={
                                            <Tooltip id={`tooltip-right`}>
                                              Choose a profile image for
                                              business profile
                                            </Tooltip>
                                          }
                                        >
                                          <img
                                            src="/images/dontknow.png"
                                            alt="images"
                                            className="ml-3"
                                          />
                                        </OverlayTrigger>
                                      </p>
                                      <label
                                        htmlFor="myfile"
                                        className="input_inner_item2_label"
                                      >
                                        Choose an image
                                      </label>
                                      <input
                                        type={input.type}
                                        name={input.name}
                                        {...rest}
                                        accept="image/*"
                                        // onChange={(val) => {
                                        //   if (val.target.files?.length && val.target.files?.length !== 0) {
                                        //     handleImgUpload(val);
                                        //   }
                                        // }}
                                      />
                                    </Fragment>
                                  );
                                }}
                              </Field>
                            </div>
                            {/* Image Section END   */}

                            <div className="input_inner_item3">
                              <div className="input_inner_item3_form">
                                <Field
                                  name="companyname"
                                  type="text"
                                  placeholder="Company Name"
                                  component={TextInput}
                                  validate={requiredCompanyInfo}
                                />

                                <Field
                                  name="username"
                                  type="text"
                                  placeholder="Create a @Username"
                                  // component={TextInput}
                                  validate={composeValidators(
                                    requiredCompanyInfo,
                                    minimum5char,
                                    isUserNameExists
                                  )}
                                >
                                  {({ input, meta, ...rest }) => {
                                    return (
                                      <div className="BusinessUserName">
                                        <input {...input} {...rest} />
                                        {meta.touched && meta.error && (
                                          <span className="error">
                                            *{meta.error}
                                          </span>
                                        )}
                                        {meta.validating && (
                                          <Spinner
                                            animation="border"
                                            role="status"
                                          >
                                            <span className="sr-only">
                                              Loading...
                                            </span>
                                          </Spinner>
                                        )}
                                      </div>
                                    );
                                  }}
                                </Field>
                                <label>Must contain atleast 5 characters</label>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="page_input_inner_right">
                            <label className="page_input_inner_right_lab1">
                              *250 character limit
                            </label>

                            <Field
                              name="bio"
                              placeholder="Bio"
                              className="page_input_inner_right_text"
                              component={TextAreaInput}
                              validate={composeValidators(
                                requiredCompanyInfo,
                                characterCount250
                              )}
                            />
                            <label className="page_input_inner_right_lab2">
                              *250 character limit
                            </label>
                          </div>
                        </Col>
                      </Row>

                      <section
                        className="page_button_area "
                        style={{ paddingTop: "48px" }}
                      >
                        <div className="container">
                          <Row>
                            {/* <div className="col-md-6">
                              <div className = " page_button_inner pg_next_btn ">
                              <button
                                className="updatebtn page_button_inner pg_next_btn ml95"
                                type="submit"
                              >
                                Update company info
                              </button>
                              </div>

                            </div>
                            <div className="col-md-6">
                             <div className = "prev_button_step">
                              <button
                                className="updatebtn page_button_inner ml11"
                                type="button"
                                onClick={goBack}
                              >
                                Go Back ?
                              </button>
                              </div>
                            </div> */}

                            <div className="flex_items">
                              <div className="col-md-6">
                                <div className="next_button">
                                  <button
                                    className="updatebtn page_button_inner pg_next_btn ml150"
                                    type="submit"
                                  >
                                    Update Industries
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="prev_button">
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
              />
            </Container>
          </section>
          {loader && <Loader />}
        </>
      )}

      <TabFooter />
    </>
  );
};

export default UpdateCompanyInfo;
