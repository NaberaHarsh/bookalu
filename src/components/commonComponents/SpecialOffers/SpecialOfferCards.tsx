import React, { useState } from "react";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";

interface IProps {
  SpecialOfferData: { [k: string]: any };
  industryFilterdata: { [k: string]: any };
}

const SpecialOfferCards: React.FC<IProps> = ({
  SpecialOfferData,
  industryFilterdata,
}) => {
  const [seachKeyword, setSearchKeyword] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [industryOptions, setIndustryOptions] = useState<any>([]);

  useEffect(() => {
    setIndustryOptions(
      industryFilterdata.map((r: any) => ({ ...r, checked: false }))
    );
  }, []);

  const onToggleHandler = (isOpen, e, metadata) => {
    console.log(isOpen, e, metadata);
    if (metadata.source != "select") {
      setIsOpen(isOpen);
    }
  };

  console.log("industry", industryOptions);

  return (
    <div>
      {/* <!----------- Food Item Area --------> */}

      <section className="fooditem_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pc">
              <div className="fooditem_title">
                <h4 className="fooditem_title_pc">Special Offers</h4>
                <h4 className="fooditem_title_mob">Special Offers</h4>
              </div>
              <div className="fooditem_title_right">
                <div className="fooditem_title_right_item1">
                  <input
                    type="text"
                    placeholder="Search Keyword"
                    value={seachKeyword}
                    onChange={(e: any) => setSearchKeyword(e.target.value)}
                  />
                </div>
                <div className="fooditem_title_right_item2">
                  <Dropdown
                    show={isOpen}
                    className="btn-group"
                    onToggle={(isOpen, e, metadata) =>
                      onToggleHandler(isOpen, e, metadata)
                    }
                  >
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-toggle btn"
                      style={{
                        backgroundColor: "#f3f4f5",
                        borderRadius: "0px",
                        color: "black",
                      }}
                    >
                      Filter by Industry
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <h4 className="dropdown_item_header">Ipsums</h4>
                      {industryOptions.map((ele: any) => (
                        <Dropdown.Item key={ele.id}>
                          <div className="form-check">
                            <input
                              className="form-check-input checkbox"
                              type="checkbox"
                              checked={ele.checked}
                              id="defaultCheck1"
                              onClick={() =>
                                setIndustryOptions(
                                  industryOptions.map((r: any) =>
                                    r.id === ele.id
                                      ? { ...r, checked: !ele.checked }
                                      : r
                                  )
                                )
                              }
                            />
                            <label className="form-check-label checkbox_label">
                              {ele.name}
                            </label>
                          </div>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="fooditem_title_right_item2 fooditem_title_right_item3">
                  <div className="btn-group">
                    <button
                      type="button"
                      className=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by : Mo..
                    </button>
                    <div className="dropdown-menu dropdown_item1 dropdown_item2">
                      <h5>Sort by</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck40"
                        />
                        <label className="form-check-label checkbox_label">
                          A-Z
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck41"
                        />
                        <label className="form-check-label checkbox_label">
                          Distance
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck42"
                        />
                        <label className="form-check-label checkbox_label">
                          Most Popular
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck43"
                        />
                        <label className="form-check-label checkbox_label">
                          Rating
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck44"
                        />
                        <label className="form-check-label checkbox_label">
                          Lowest Price
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck45"
                        />
                        <label className="form-check-label checkbox_label">
                          Highest Price
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck46"
                        />
                        <label className="form-check-label checkbox_label">
                          Lorem Ipsum
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck47"
                        />
                        <label className="form-check-label checkbox_label">
                          Lorem{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck48"
                        />
                        <label className="form-check-label checkbox_label">
                          Amet{" "}
                        </label>
                      </div>

                      <a href="#">Clear filters</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mobile">
              <div className="fooditem_title">
                <h4 className="fooditem_title_pc">Your Ipsums</h4>
                <h4 className="fooditem_title_mob">Ipsums Offers</h4>
              </div>
              <div className="fooditem_title_right">
                <div className="fooditem_title_right_item1">
                  <input
                    type="text"
                    placeholder="Search Keyword"
                    value=""
                    name=""
                  />
                </div>
                <div className="fooditem_title_right_item2">
                  <div className="btn-group">
                    <button
                      type="button"
                      className=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter by
                    </button>
                    <div className="dropdown-menu dropdown_item1 ">
                      <h5>Ipsums</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label className="form-check-label checkbox_label">
                          Ipsums
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        />
                        <label className="form-check-label checkbox_label">
                          Ipsums
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck3"
                        />
                        <label className="form-check-label checkbox_label">
                          Ipsums
                        </label>
                      </div>

                      <a href="#">Clear filters</a>
                    </div>
                  </div>
                </div>

                <div className="fooditem_title_right_item2 fooditem_title_right_item3">
                  <div className="btn-group">
                    <button
                      type="button"
                      className=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div className="dropdown-menu dropdown_item1 dropdown_item2">
                      <h5>Sort by</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck40"
                        />
                        <label className="form-check-label checkbox_label">
                          A-Z
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck41"
                        />
                        <label className="form-check-label checkbox_label">
                          Distance
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck42"
                        />
                        <label className="form-check-label checkbox_label">
                          Most Popular
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck43"
                        />
                        <label className="form-check-label checkbox_label">
                          Rating
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck44"
                        />
                        <label className="form-check-label checkbox_label">
                          Lowest Price
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck45"
                        />
                        <label className="form-check-label checkbox_label">
                          Highest Price
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck46"
                        />
                        <label className="form-check-label checkbox_label">
                          Lorem Ipsum
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck47"
                        />
                        <label className="form-check-label checkbox_label">
                          Lorem{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck48"
                        />
                        <label className="form-check-label checkbox_label">
                          Amet{" "}
                        </label>
                      </div>

                      <a href="#">Clear filters</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fooditem_area fooditem_area2">
        <div className="container">
          <div className="row">
            {SpecialOfferData.map((ele: any) => (
              <div className="col-md-4">
                <div className="fooditem_card fooditem_card4">
                  <div className="fooditem_card_img">
                    <img src={ele.image1} alt="image" />
                    <div className="fooditem_card_img_wrapper">
                      <p>
                        <b>{ele.discount}</b> {ele.category}
                      </p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>
                        {ele.handle}
                        <span style={{ marginTop: "16px" }}>
                          {ele.distance}
                        </span>
                      </p>
                      <h3 style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                        {ele.companyName}
                      </h3>
                      <ul>
                        <li className="card_text_inner_ul_item">
                          <a href="#">Home Business</a>
                        </li>
                        <li className="card_text_inner_ul_item1">
                          <a href="#">Mobile</a>
                        </li>
                        <li className="card_text_inner_ul_item2">
                          <a href="#">Shop</a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="card_text_inner3"
                      style={{ borderTop: "none" }}
                    >
                      <div className="row">
                        <div className="col-md-6 col-xs-6 card_text_inner3_left ">
                          <p>
                            {ele.ratings}
                            <img src="/images/fav_star.png" alt="image" />
                            <span>
                              &#40;&nbsp;{ele.totalRatings}&nbsp;&#41;
                            </span>
                          </p>
                        </div>
                        <div className="col-md-6 col-xs-6">
                          <p style={{ fontSize: "17px", float: "right" }}>
                            <img src="/images/fav_heart.png" alt="image" />{" "}
                            {ele.likes}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        {ele.industries.map((e: any) => (
                          <li style={{ border: "none" }}>
                            <a href="#">{e}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!----------- addbtn_area  --------> */}

      <section className="addbtn_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="addbtn_area_inner">
                <a href="#">
                  <img src="/images/add_btn.png" alt="images" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOfferCards;
