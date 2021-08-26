import React, { useState, useEffect, useRef } from "react";
import { Field, Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { TextInput, CheckBox } from "../../../../utils/form";
import Loader from "../../../../utils/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer";
import { getSocialMediaFeeds } from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { updateSocialMediaHandler } from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import {
  HistoryProp,
  LocationPorp,
} from "../../../../utils/interfaces/common_props";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";

interface StateProps extends HistoryProp, LocationPorp {}

const UpdateSocialMediaHandler: React.FC<StateProps> = (props: StateProps) => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  const goBack = () => props.history.goBack();

  const getSocialMediaFeedsReducer = useSelector(
    (state: RootState) => state.getSocialMediaFeedsReducer
  );

  const updateSocialMediaHandlerReducer = useSelector(
    (state: RootState) => state.updateSocialMediaHandlerReducer
  );

  const [initialVal, setInitialVal] = useState({
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
  });

  const [loader, setLoader] = useState(false);

  /* Get social media feeds API call  */
  useEffect(() => {
    dispatch(getSocialMediaFeeds());
  }, []);

  /* get social media feeds */
  useEffect(() => {
    const { loading, data, error } = getSocialMediaFeedsReducer;
    if (loading) setLoader(true);
    if (!loading && data && !error) {
      let copy = initialVal;
      /* Update the initial state as per received state from API  */
      data.data.map((val: any, ind: number) => {
        copy.socialmediafeed[val.socialMediaType].socialMediaType =
          val.socialMediaType;
        copy.socialmediafeed[val.socialMediaType].url = val.url;
        copy.socialmediafeed[val.socialMediaType].isselected = val.isselected;
      });

      setInitialVal(copy);
      setLoader(false);
    }
  }, [getSocialMediaFeedsReducer]);

  /* Updated social media feeds response  */
  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
    else {
      const { loading, error, data } = updateSocialMediaHandlerReducer;

      if (loading) setLoader(true);
      if (!loading && !error && data) {
        setLoader(false);
        goBack();
      }
    }
  }, [updateSocialMediaHandlerReducer]);

  /* Update the other checkbox state  */
  const updatePullFeeds = (updateFeedsFor: any, values: any) => {
    // prettier-ignore
    values.socialmediafeed[updateFeedsFor.socialMediaType].isselected = !updateFeedsFor.isselected;
    values.socialmediafeed.map((val: any, index: number) => {
      if (index !== updateFeedsFor.socialMediaType) {
        val.isselected = false;
      }
    });
    setInitialVal({ ...values });
  };

  /* Submit social media feeds  */
  const handleSocialMediaUpdate = (val: any) => {
    dispatch(updateSocialMediaHandler(val));
  };

  return (
    <>
      <NavbarHeader />
      <section className="page_text_area step6_page_text_area mt-4">
        <div className="container">
          <div className="row">
            <div className="page_text_title">
              <h1>Update Social media handler</h1>
              <p className="step4_page_text_area_p step7_page_text_area_p">
                Check the boxes below for the social media links you would like
                displayed on your page and select 1 feed to pull through to show
                your latest posts.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page6_input_area page7_input_area">
        <Container>
          <Form
            initialValues={initialVal}
            onSubmit={handleSocialMediaUpdate}
            mutators={{ ...arrayMutators }}
            validate={(values) => {
              let errors: any = {};
              let socialmediafeed: any = [];
              // Twitter
              if (
                values.socialmediafeed[0].socialMediaType === 0 &&
                !/(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?@?([^\/\?\s]*)/i.test(
                  values.socialmediafeed[0].url
                )
              ) {
                socialmediafeed[0] = {
                  url: "Please Provide a valid Twitter URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }

              // Facebook
              if (
                values.socialmediafeed[1].socialMediaType === 1 &&
                !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?/i.test(
                  values.socialmediafeed[1].url
                )
              ) {
                socialmediafeed[1] = {
                  url: "Please Provide a valid Facebook URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              // Instagram
              if (
                values.socialmediafeed[2].socialMediaType === 2 &&
                !/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/i.test(
                  values.socialmediafeed[2].url
                )
              ) {
                socialmediafeed[2] = {
                  url: "Please Provide a valid Instagram URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              // Youtube
              if (
                values.socialmediafeed[3].socialMediaType === 3 &&
                !/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/i.test(
                  values.socialmediafeed[3].url
                )
              ) {
                socialmediafeed[3] = {
                  url: "Please Provide a valid Youtube URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              // Pinterest  Currently woorking only for india
              if (
                values.socialmediafeed[4].socialMediaType === 4 &&
                !/(ftp|http|https):\/\/?(?:www\.)?in.pinterest.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
                  values.socialmediafeed[4].url
                )
              ) {
                socialmediafeed[4] = {
                  url: "Please Provide a valid Pintrest  URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              // Linkedin
              if (
                values.socialmediafeed[5].socialMediaType === 5 &&
                !/(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
                  values.socialmediafeed[5].url
                )
              ) {
                socialmediafeed[5] = {
                  url: "Please Provide a valid LinkedIn URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              // flickr.com
              if (
                values.socialmediafeed[6].socialMediaType === 6 &&
                !/(ftp|http|https):\/\/?(?:www\.)?flickr.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
                  values.socialmediafeed[6].url
                )
              ) {
                socialmediafeed[6] = {
                  url: "Please Provide a valid Flickr URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              // https://www.checkatrade.com/
              if (
                values.socialmediafeed[7].socialMediaType === 7 &&
                !/(ftp|http|https):\/\/?(?:www\.)?checkatrade.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
                  values.socialmediafeed[7].url
                )
              ) {
                socialmediafeed[7] = {
                  url: "Please Provide a valid checkatrade URL",
                };
                errors.socialmediafeed = socialmediafeed;
              }
              return errors;
            }}
            render={({
              handleSubmit,
              submitting,
              values,
              errors,
              pristine,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={7}>
                      <div className="page6_input_inner_left">
                        <FieldArray name={`socialmediafeed`}>
                          {({ fields }) => {
                            return (
                              <>
                                {fields.map((name, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="page6_input_inner_left_item socialMdIcon"
                                    >
                                      <div className="input_sec1">
                                        {/* <input type="checkbox" id="inner2_item1Check2" /> */}
                                        <Field
                                          name={`${name}.socialMediaType`}
                                          type="checkbox"
                                          format={(v) => v === index}
                                          parse={(v) => (v ? index : null)}
                                          component={CheckBox}
                                        />
                                        <label htmlFor="inner2_item1Check2">
                                          {fields.value[index].type}
                                        </label>
                                      </div>
                                      <div className="input_sec2">
                                        <Field
                                          name={`${name}.url`}
                                          placeholder="www./url"
                                          component={TextInput}
                                          disabled={
                                            fields.value[index]
                                              .socialMediaType === null
                                              ? true
                                              : false
                                          }
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            );
                          }}
                        </FieldArray>
                      </div>
                    </Col>

                    <Col md={5}>
                      <div className="page6_input_inner_right">
                        <p>Choose 1 social feed to pull through</p>

                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id={`tooltip-right`}>
                              1 social feed of your choice will be pulled to
                              your consecter page and show the last XX posts 1
                              social feed of your choice will be pulled to your
                              consecter page and show the last XX posts 1 social
                              feed of your choice will be pulled to your
                              consecter page and show the last XX posts
                            </Tooltip>
                          }
                        >
                          <img
                            src="/images/dontknow.png"
                            alt="images"
                            className="ml-3"
                          />
                        </OverlayTrigger>
                        <ul>
                          {/* Twitter  */}
                          <li className="page6_input_inner_right_item socialIcons">
                            <label>
                              <Field
                                name={`socialmediafeed[${0}].isselected`}
                                component={CheckBox}
                                type="checkbox"
                                onClick={() =>
                                  updatePullFeeds(
                                    values.socialmediafeed[0],
                                    values
                                  )
                                }
                                disabled={
                                  /* prettier-ignore */

                                  values.socialmediafeed[0].socialMediaType == 0 && values.socialmediafeed[0].url !== ""
                                    ? false
                                    : true
                                }
                              />
                              <span>
                                <img src="/images/twitter.png" alt="imag" />
                              </span>
                            </label>
                          </li>
                          {/* Facebook */}
                          <li className="page6_input_inner_right_item2 socialIcons">
                            <label>
                              <Field
                                name={`socialmediafeed[${1}].isselected`}
                                component={CheckBox}
                                type="checkbox"
                                onClick={() =>
                                  updatePullFeeds(
                                    values.socialmediafeed[1],
                                    values
                                  )
                                }
                                disabled={
                                  /* prettier-ignore */
                                  values.socialmediafeed[1].socialMediaType == 1 &&
                                  values.socialmediafeed[1].url !== ""
                                    ? false
                                    : true
                                }
                              />
                              <span>
                                <img src="/images/facebook.png" alt="imae" />
                              </span>
                            </label>
                          </li>
                          {/* Instagram */}
                          <li className="page6_input_inner_right_item3 socialIcons">
                            <label>
                              <Field
                                name={`socialmediafeed[${2}].isselected`}
                                component={CheckBox}
                                type="checkbox"
                                onClick={() =>
                                  updatePullFeeds(
                                    values.socialmediafeed[2],
                                    values
                                  )
                                }
                                disabled={
                                  /* prettier-ignore */
                                  values.socialmediafeed[2].socialMediaType ==2 &&
                                  values.socialmediafeed[2].url !== ""
                                    ? false
                                    : true
                                }
                              />
                              <span>
                                <img src="/images/instagram.png" alt="imae" />
                              </span>
                            </label>
                          </li>
                          {/* paintrist */}
                          <li className="page6_input_inner_right_item4 socialIcons">
                            <label>
                              <Field
                                name={`socialmediafeed[${4}].isselected`}
                                component={CheckBox}
                                type="checkbox"
                                onClick={() =>
                                  updatePullFeeds(
                                    values.socialmediafeed[4],
                                    values
                                  )
                                }
                                disabled={
                                  /* prettier-ignore */
                                  values.socialmediafeed[4].socialMediaType == 4 &&
                                  values.socialmediafeed[4].url !== ""
                                    ? false
                                    : true
                                }
                              />
                              <span>
                                <img src="/images/pinterest.png" alt="imae" />
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col md={12} sm={12} className="mt-5 offset-2">
                      <div className="udateBusiness_btn_div dFlex">
                        <button className="updatebtn mr-3" type="submit">
                          Update social media handler
                        </button>
                        <button
                          className="updatebtn"
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
          />
        </Container>
      </section>
      {loader && <Loader />}
      <TabFooter />
    </>
  );
};

export default UpdateSocialMediaHandler;
