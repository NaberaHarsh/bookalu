import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { TextInput, CheckBox } from "../../../../utils/form";
import { Col, Row, Tooltip, OverlayTrigger, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer";

const SocialMediahandler: React.FC = () => {
  const {
    values: { socialmediafeed },
  } = useSelector((state: RootState) => state.businessRegPgVal);
  return (
    <>
      <section className="page6_input_area page7_input_area">
        <Container>
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
                                    fields.value[index].socialMediaType === null
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
                      1 social feed of your choice will be pulled to your
                      consecter page and show the last XX posts 1 social feed of
                      your choice will be pulled to your consecter page and show
                      the last XX posts 1 social feed of your choice will be
                      pulled to your consecter page and show the last XX posts
                    </Tooltip>
                  }
                >
                  <img
                    src="images/dontknow.png"
                    alt="dontknow"
                    className="ml-3"
                  />
                </OverlayTrigger>
                <ul>
                  {/* Twitter  */}
                  <li className="page6_input_inner_right_item socialIcons">
                    <label className="cusrorP">
                      <Field
                        name={`socialmediafeed[${0}].isselected`}
                        component={CheckBox}
                        type="checkbox"
                        disabled={
                          socialmediafeed[0].socialMediaType === 0 &&
                          socialmediafeed[0].url !== ""
                            ? false
                            : true
                        }
                      />
                      <span>
                        <img src="images/twitter.png" alt="twitter" />
                      </span>
                    </label>
                  </li>
                  {/* Facebook */}
                  <li className="page6_input_inner_right_item2 socialIcons">
                    <label className="cusrorP">
                      <Field
                        name={`socialmediafeed[${1}].isselected`}
                        component={CheckBox}
                        type="checkbox"
                        disabled={
                          socialmediafeed[1].socialMediaType === 1 &&
                          socialmediafeed[1].url !== ""
                            ? false
                            : true
                        }
                      />
                      <span>
                        <img src="images/facebook.png" alt="facebook" />
                      </span>
                    </label>

                    {/* <span className="page6_input_inner_right_item2 socialIcons_inner2">
                      add your facebook url www.facebook.com/
                    </span> */}
                  </li>
                  {/* Instagram */}
                  <li className="page6_input_inner_right_item3 socialIcons">
                    <label className="cusrorP">
                      <Field
                        name={`socialmediafeed[${2}].isselected`}
                        component={CheckBox}
                        type="checkbox"
                        disabled={
                          socialmediafeed[2].socialMediaType === 2 &&
                          socialmediafeed[2].url !== ""
                            ? false
                            : true
                        }
                      />
                      <span>
                        <img src="images/instagram.png" alt="instagram" />
                      </span>
                    </label>
                  </li>
                  {/* paintrist */}
                  <li className="page6_input_inner_right_item4 socialIcons">
                    <label className="cusrorP">
                      <Field
                        name={`socialmediafeed[${4}].isselected`}
                        component={CheckBox}
                        type="checkbox"
                        disabled={
                          socialmediafeed[4].socialMediaType === 4 &&
                          socialmediafeed[4].url !== ""
                            ? false
                            : true
                        }
                      />
                      <span>
                        <img src="images/pinterest.png" alt="pinterest" />
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SocialMediahandler;
