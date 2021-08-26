import React, { Fragment, useEffect, useState } from "react";
// import CheckBox from ''
import { Field } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SelectBusinessType } from "../../../../utils/form";
import HomeBusiness from "./HomeBusiness";
import MobileBusiness from "./MobileBusiness";
import ShopBusiness from "./ShopBusiness";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer";
import { businessRegPgVal } from "../../../../redux/action/businessPagesAction/businessRegPgVal";
import "./BusinessOperationMaster.css";

const BusinessOperationMaster: React.FC = () => {
  const dispatch = useDispatch();
  const { values } = useSelector((state: RootState) => state.businessRegPgVal);
  const [tabIndex, setTabIndex] = useState(0);
  // dispatch(businessRegPgVal(values))

  useEffect(() => {
    if (
      values.contactdetails.homebusiness.address.addressLine1 === "" ||
      values.contactdetails.homebusiness.address.addressLine1 === null ||
      values.contactdetails.homebusiness.address.addressLine1 === undefined
    ) {
      values.home = "";
    }
    dispatch(businessRegPgVal(values));
    return () => {
      values.home = "home";
      dispatch(businessRegPgVal(values));
    };
  }, []);

  return (
    <section className="page_input_area">
      <Container>
        <Row>
          <Col md={12}>
            <div className="page_input_area_inner">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList className="nav nav-tabs" id="myTab">
                  <Tab
                    className="nav-item nav-item1"
                    disabled={values.home === "home" ? true : false}
                  >
                    <span className="nav-link  step2_page_tab step2_page_tab1 contactDet_tab">
                      <Field
                        name="home"
                        type="checkbox"
                        format={(v) => v === "home"}
                        parse={(v) => (v ? "home" : null)}
                        id="page2_checkbox1"
                        className="page2_checkbox2 checkbox-disabled"
                      >
                        {({ input, meta, ...rest }) => {
                          return (
                            <Fragment>
                              <input {...input} {...rest} />
                              {meta.touched && meta.error && (
                                <span className="error">*{meta.error}</span>
                              )}
                            </Fragment>
                          );
                        }}
                      </Field>{" "}
                      Home Business
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={`tooltip-right`}>
                            A business that operates from their own home.
                          </Tooltip>
                        }
                      >
                        <img
                          src="/images/dontknow.png"
                          alt="images"
                          className="contactDet_Dont_know step_two_dont_know_img businessOperationMaster"
                        />
                      </OverlayTrigger>
                    </span>
                  </Tab>
                  <Tab
                    className="nav-item nav-item2"
                    disabled={values.mobile === "mobile" ? false : true}
                  >
                    <span className="nav-link step2_page_tab step2_page_tab3 contactDet_tab">
                      <Field
                        name="mobile"
                        component={SelectBusinessType}
                        type="checkbox"
                        format={(v) => v === "mobile"}
                        parse={(v) => (v ? "mobile" : null)}
                        id="page2_checkbox1"
                        className="page2_checkbox2"
                      />{" "}
                      Mobile
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={`tooltip-right`}>
                            A business that travels to other people
                          </Tooltip>
                        }
                      >
                        <img
                          src="/images/dontknow.png"
                          alt="images"
                          className="contactDet_Dont_know step_two_dont_know_img businessOperationMaster"
                        />
                      </OverlayTrigger>
                    </span>
                  </Tab>
                  <Tab
                    className="nav-item nav-item3"
                    disabled={values.shop === "shop" ? false : true}
                  >
                    <span className="nav-link step2_page_tab step2_page_tab2 contactDet_tab">
                      <Field
                        name="shop"
                        component={SelectBusinessType}
                        type="checkbox"
                        format={(v) => v === "shop"}
                        parse={(v) => (v ? "shop" : null)}
                        id="page2_checkbox1"
                        className="page2_checkbox2"
                      />{" "}
                      Shop
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={`tooltip-right`}>
                            A business that operates from a shop or office space
                          </Tooltip>
                        }
                      >
                        <img
                          src="/images/dontknow.png"
                          alt="images"
                          className="contactDet_Dont_know step_two_dont_know_img businessOperationMaster"
                        />
                      </OverlayTrigger>
                    </span>
                  </Tab>
                </TabList>
                <TabPanel>
                  <HomeBusiness />
                </TabPanel>
                <TabPanel>
                  <MobileBusiness />
                </TabPanel>
                <TabPanel>
                  <ShopBusiness />
                </TabPanel>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>

      <OnChange name="home">
        {(val) => {
          values.services.tabOne.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[0] = null;
            if (val === "home") value.appoinmentvia[0] = "home";
          });
          values.services.tabTwo.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[0] = null;
            if (val === "home") value.appoinmentvia[0] = "home";
          });
          values.services.tabThree.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[0] = null;
            if (val === "home") value.appoinmentvia[0] = "home";
          });

          dispatch(businessRegPgVal(values));
        }}
      </OnChange>
      <OnChange name="mobile">
        {(val) => {
          values.services.tabOne.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[1] = null;
            if (val === "mobile") value.appoinmentvia[1] = "mobile";
          });
          values.services.tabTwo.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[1] = null;
            if (val === "mobile") value.appoinmentvia[1] = "mobile";
          });
          values.services.tabThree.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[1] = null;
            if (val === "mobile") value.appoinmentvia[1] = "mobile";
          });

          dispatch(businessRegPgVal(values));
        }}
      </OnChange>
      <OnChange name="shop">
        {(val) => {
          values.services.tabOne.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[2] = null;
            if (val === "shop") value.appoinmentvia[2] = "shop";
          });
          values.services.tabTwo.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[2] = null;
            if (val === "shop") value.appoinmentvia[2] = "shop";
          });
          values.services.tabThree.subservices.map((value: any) => {
            if (val === null) value.appoinmentvia[2] = null;
            if (val === "shop") value.appoinmentvia[2] = "shop";
          });

          dispatch(businessRegPgVal(values));
        }}
      </OnChange>
    </section>
  );
};

export default BusinessOperationMaster;
