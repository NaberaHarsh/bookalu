import React from "react";
import {
  TextInput,
  TextAreaInput,
  OccupationSelect,
  IndustriesSelect,
  SingleImgUpload,
  CoverImgUpload,
} from "../../../utils/form";
import BusinessServicesTabs from "./businessServicesTab/BusinessServicesTabs";
import SocialMediahandler from "./socialMediaHandler/SocialMediahandler";
import BusinessOperationMaster from "./businessContactDetails/BusinessOperationMaster";
import Wizard from "./Wizard";
import { WizardPage } from "./WizardPage";
import { Field } from "react-final-form";
import {
  Row,
  Col,
  Container,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./BusinessRegister.css";
import BusinessOpTimeMaster from "./BusinessOpTimeTab/BusinessOpTimeMaster";
import {
  composeValidators,
  characterCount250,
  minimum5char,
  requiredCompanyInfo,
  isUserNameExists,
  requiredAtleastOne,
  noMoreThan5,
  noMoreThan10,
} from "./validation";
import { relative } from "path";

const BusinessRegister: React.FC = () => {
  const onSubmit = (values: any) => {
    // console.log(JSON.stringify(values, undefined, 2));
  };

  return (
    <div>
      <Wizard handleFormSubmit={onSubmit}>
        <WizardPage>
          <section className="page_text_area">
            <div className="container">
              <div className="row">
                <div className="page_text_title">
                  <h1>Create a business page</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="page_input_area">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="page_input_inner">
                    <div className="input_inner_item">
                      {/* Profile Image Select */}
                      <Field
                        name="companyinfo.logo"
                        type="file"
                        id="myfile"
                        typeOfFile="logo"
                        component={SingleImgUpload}
                      />
                    </div>

                    <div className="input_inner_item2 input_inner_item_cover_img">
                      <Field
                        name="companyinfo.coverphoto"
                        type="file"
                        id="myfile2"
                        typeOfFile="cover"
                        component={CoverImgUpload}
                      />
                    </div>

                    <div className="input_inner_item3">
                      <div className="input_inner_item3_form">
                        <Field
                          name="companyinfo.companyname"
                          type="text"
                          placeholder="Company Name"
                          component={TextInput}
                          validate={requiredCompanyInfo}
                        />

                        <Field
                          name="companyinfo.username"
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
                                  <span className="error">*{meta.error}</span>
                                )}
                                {meta.validating && (
                                  <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
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
                      name="companyinfo.bio"
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
            </Container>
          </section>
        </WizardPage>

        <WizardPage>
          <section className="page_text_area step2_page_text_area">
            <div className="container">
              <div className="row">
                <div className="page_text_title">
                  <h1>Create a business page </h1>
                  <p>
                    Tick the check boxes below to select where your business
                    operates from, you may operate from more than one location,
                    for example you may work from home and offer mobile
                    appointments.
                    <br /> Then enter the address and contact details for each
                    tab you require below.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <BusinessOperationMaster />
        </WizardPage>
        <WizardPage>
          {/*--- page_text_area End-----*/}
          <section className="page_text_area step3_page_text_area">
            <div className="container">
              <div className="row">
                <div className="page_text_title">
                  <div className="page_text_title_custom">
                    <OverlayTrigger
                      placement="left"
                      overlay={
                        <Tooltip id={`tooltip-left`}>
                          1. Tick the check box for each location tab you
                          require to add times to:
                          <br />
                          2. Tick the check boxes for the days you will be
                          operating and set your opening and closing times for
                          each day.
                        </Tooltip>
                      }
                    >
                      <img
                        className="tooltip_class"
                        src="/images/dontknow.png"
                        alt="images"
                      />
                    </OverlayTrigger>

                    <h1>Create a business page </h1>
                  </div>
                  <p>
                    Enter your days of operation, along with your opening and
                    closing times below.
                    <br />
                    You may operate from more than one location, for example you
                    work from home and also offer mobile appointments, in this
                    situation times may to overlap.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/*--- page_text_area End-----*/}
          <section className="page_input_area">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="page_input_area_inner">
                    <BusinessOpTimeMaster />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </WizardPage>
        <WizardPage>
          {/*--- page_text_area End-----*/}

          <div>
            <section className="page_text_area step4_page_text_area">
              <Container>
                <Row>
                  <div className="page_text_title">
                    <h1>Create a business page </h1>
                    <p className="step4_page_text_area_p">
                      Please choose up to 5 industries that best describe your
                      type of business.
                      <br />
                      For example if you are a plumber you may choose “Trade”
                      and “Maintenance”.
                    </p>
                  </div>
                </Row>
              </Container>
            </section>
            {/*--- page_text_area End-----*/}
            <section className="page_input_area">
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="page_input_area_inner page4_input_area_inner">
                      <Field
                        name="industries"
                        placeholder="Choose upto 5 industries"
                        component={IndustriesSelect}
                        validate={composeValidators(
                          requiredAtleastOne,
                          noMoreThan5
                        )}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </WizardPage>
        <WizardPage>
          <div>
            {/*--- page_text_area End-----*/}
            <section className="page_text_area step5_page_text_area">
              <div className="container">
                <div className="row">
                  <div className="page_text_title">
                    <div className="page_text_title_custom">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id={`tooltip-left`}>
                            You may add a maximum of 10 occupations
                          </Tooltip>
                        }
                      >
                        <img
                          src="/images/dontknow.png"
                          alt="images"
                          className="tooltip_class"
                        />
                      </OverlayTrigger>
                      <h1>Create a business page </h1>
                    </div>
                    <p className="step4_page_text_area_p step5_page_text_area_p">
                      Please type your occupations below and select them from
                      the list.
                      <br />
                      If it doesn’t show in the list below use the plus button
                      to add a new occupation.
                      <br />
                      Your business may have more than one. For example
                      beautician, makeup artist, masseuse.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/*--- page_text_area End-----*/}

            <section className="page_input_area">
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="page_input_area_inner page4_input_area_inner">
                      <Field
                        name="occupation"
                        placeholder="Choose upto 10 occupations"
                        component={OccupationSelect}
                        validate={composeValidators(
                          requiredAtleastOne,
                          noMoreThan10
                        )}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
              {/* <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <OverlayTrigger
                      placement="left"
                      overlay={
                        <Tooltip id={`tooltip-left`}>
                          You may add a maximum of 10 occupations
                        </Tooltip>
                      }
                    >
                      <img
                        src="/images/dontknow.png"
                        alt="images"
                        className="contactDet_Dont_know"
                      />
                    </OverlayTrigger>
                    <div className="page_input_area_inner page5_input_area_inner">
                      <Field
                        name="occupation"
                        placeholder="Choose upto 10 occupations"
                        component={OccupationSelect}
                        validate={requiredAtleastOne}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </section>

            {/*--- page_button_area End-----*/}
          </div>
        </WizardPage>
        <WizardPage>
          <div>
            <div>
              <section className="page_text_area step6_page_text_area">
                <div className="container">
                  <div className="row">
                    <div className="page_text_title">
                      <h1>Create a business page</h1>
                      <p className="step4_page_text_area_p step5_page_text_area_p step6_page_text_area_p">
                        Please input the services you offer below along with
                        their prices and timeframe.
                        <br />
                        You can select how you wish clients to contact you for
                        different services and whether or not
                        <br />
                        services are available for online bookings or calls
                        only.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="step6_page_text_area2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="step6_page_text_area2_inner">
                        <h5>Services tabs </h5>
                        <p>
                          You can add up to 3 tabs to help seperate the services
                          you provide. For example you may provide Hair, Beauty
                          and Wellness services.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/*--- page_text_area End-----*/}

            <section className="page_input_area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="page_input_area_inner page6_input_area_inner">
                      <BusinessServicesTabs />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </WizardPage>

        <WizardPage>
          <div>
            {/*--- page_text_area End-----*/}
            <section className="page_text_area step6_page_text_area">
              <div className="container">
                <div className="row">
                  <div className="page_text_title">
                    <h1>Create a business page</h1>
                    <p className="step4_page_text_area_p step7_page_text_area_p">
                      Check the boxes below for the social media links you would
                      like displayed on your page and select 1 feed to pull
                      through to show your latest posts.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/*--- page_text_area End-----*/}
            <SocialMediahandler />

            {/*--- page_button_area End-----*/}
          </div>
        </WizardPage>
      </Wizard>
    </div>
  );
};

export default BusinessRegister;
