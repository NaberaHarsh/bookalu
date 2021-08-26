import React, { Fragment } from "react";
import { Field } from "react-final-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BusinessServiceOne from "./BusinessServiceOne";
import BusinessServiceTwo from "./BusinessServiceTwo";
import BusinessServiceThree from "./BusinessServiceThree";
import { SelectBusinessType } from "../../../../utils/form";

const BusinessServicesTabs = () => {
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs" id="myTab step6_myTab">
          <Tab
            className="nav-item step6_nav_item1"
            // disabled={home === "home" ? false : true}
          >
            <span className="nav-link  step6_nav_link step6_nav_link1 ">
              <Field
                name="tab1"
                type="checkbox"
                format={(v) => v === "tab1"}
                parse={(v) => (v ? "tab1" : null)}
                id="page6_checkbox1"
                className="page2_checkbox2"
              >
                {({ input, meta, ...rest }) => {
                  return (
                    <Fragment>
                      <input {...input} {...rest} disabled={true} />
                      {meta.touched && meta.error && (
                        <span className="error">*{meta.error}</span>
                      )}
                    </Fragment>
                  );
                }}
              </Field>{" "}
              Tab 1
            </span>
          </Tab>
          <Tab
            className="nav-item step6_nav_item1"
            // disabled={mobile === "mobile" ? false : true}
          >
            <span className="nav-link step6_nav_link step6_nav_link1">
              <Field
                name="tab2"
                component={SelectBusinessType}
                type="checkbox"
                format={(v) => v === "tab2"}
                parse={(v) => (v ? "tab2" : null)}
                id="page6_checkbox1"
                className="page2_checkbox2"
              />{" "}
              Tab 2
            </span>
          </Tab>
          <Tab
            className="nav-item step6_nav_item1"
            // disabled={shop === "shop" ? false : true}
          >
            <span className="nav-link step6_nav_link step6_nav_link3 step6_nav_link1">
              <Field
                name="tab3"
                component={SelectBusinessType}
                type="checkbox"
                format={(v) => v === "tab3"}
                parse={(v) => (v ? "tab3" : null)}
                id="page6_checkbox1"
                className="page2_checkbox2"
              />{" "}
              Tab 3
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <BusinessServiceOne />
        </TabPanel>
        <TabPanel>
          <BusinessServiceTwo />
        </TabPanel>
        <TabPanel>
          <BusinessServiceThree />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default BusinessServicesTabs;
