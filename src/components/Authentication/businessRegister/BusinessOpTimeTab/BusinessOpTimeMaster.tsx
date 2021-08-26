import React, { Fragment } from "react";
// import { Tab, Tabs } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Field } from "react-final-form";
import "react-tabs/style/react-tabs.css";
import HomeBusinessTm from "./HomeBusinessTm";
import MobileBusinessTm from "./MobileBusinessTm";
import ShopBusinessTm from "./ShopBusinessTm";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducer";
import { SelectBusinessType } from "../../../../utils/form";

const BusinessOpTimeMaster: React.FC = () => {
  const {
    values: { home, shop, mobile },
  } = useSelector((state: RootState) => state.businessRegPgVal);
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs" id="myTab">
          <Tab
            className="nav-item nav-item1"
            disabled={home === "home" ? false : true}
          >
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id={`tooltip-left`}>
                  Choose a Opening and closing time along with day
                </Tooltip>
              }
            >
              <img
                src="/images/dontknow.png"
                alt="images"
                className="contactDet_Dont_know"
              />
            </OverlayTrigger>

            <span className="nav-link  step2_page_tab step2_page_tab1 contactDet_tab">
              <Field
                name="home"
                type="checkbox"
                format={(v) => v === "home"}
                parse={(v) => (v ? "home" : null)}
                id="page2_checkbox1"
                className="page2_checkbox2"
                disabled={true}
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
            </span>
          </Tab>
          <Tab
            className="nav-item nav-item2"
            disabled={mobile === "mobile" ? false : true}
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
                disabled={true}
              />{" "}
              Mobile
            </span>
          </Tab>
          <Tab
            className="nav-item nav-item3"
            disabled={shop === "shop" ? false : true}
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
                disabled={true}
              />{" "}
              Shop
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <HomeBusinessTm />
        </TabPanel>
        <TabPanel>
          <MobileBusinessTm />
        </TabPanel>
        <TabPanel>
          <ShopBusinessTm />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default BusinessOpTimeMaster;
