import React, { useEffect, useState } from "react";
// Child Components
import UpdateDetails from "./UpdateDetails";
import UpdatePasswordComponent from "./UpdatePasswordComponent";
import EnterPassword from "./EnterPassword";
import "./EditPersonalDetails.css";
import { ToastContainer } from "react-toastify";
import NavbarHeader from "../Header-Footer/Header/NavbarHeader";
import TabFooter from "../Header-Footer/Footer/TabFooter";
import Loader from "../../../utils/Loader/Loader";

const EditPersonalDetails: React.FC = () => {
  // const [loader, setLoader] = useState(true);

  return (
    <>
      <div>
        {/*Header Area Start */}
        <NavbarHeader />
        {/*---- Tab Header  -----*/}

        {/*--- Page Top Area-----*/}
        <section className="site_top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site_top_inner font600">
                  <h6>Your Account Details</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scrollPersonalDetail">
          {/*--- enter_pass_area -----*/}
          <EnterPassword />
          {/*--- Edit_Details_area -----*/}
          <section className="details_area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="details_area_title">
                    <p>Edit Details</p>
                  </div>
                </div>
              </div>
              {/* <form>
                <div className="row">
                  <div className="col-md-6"></div>
                </div>
              </form> */}

              <div className="row">
                <div className="col-md-6">
                  <UpdatePasswordComponent />
                </div>

                <div className="col-md-6">
                  <UpdateDetails />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*--- Footer Area-----*/}
        {/*--- PC Footer -----*/}

        {/*--- Tab Footer -----*/}
        <TabFooter />
        <ToastContainer />
        {/* {loader && <Loader />} */}
      </div>
    </>
  );
};

export default EditPersonalDetails;
