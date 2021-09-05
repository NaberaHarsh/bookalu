import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SpecialOfferCards from "./SpecialOfferCards";
import { SpecialOfferData, industryFilterdata } from "./specialOfferData";
import TabFooter from "../Header-Footer/Footer/TabFooter";
import NavbarHeader from "../Header-Footer/Header/NavbarHeader";
import "./specialOffer.css";

const SpecialOffer = () => {
  return (
    <div>
      <NavbarHeader />

      <SearchBar />

      <section className="add_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="add_area_inner">
                <img
                  className="add1_img1"
                  src="/images/home/add_top.png"
                  alt="images"
                />
                <img
                  className="add1_img2"
                  src="/images/add_1.png"
                  alt="images"
                />
                <img
                  className="add1_img3"
                  src="/images/add_1_2.png"
                  alt="images"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SpecialOfferCards
        SpecialOfferData={SpecialOfferData}
        industryFilterdata={industryFilterdata}
      />
      <TabFooter />
    </div>
  );
};

export default SpecialOffer;
