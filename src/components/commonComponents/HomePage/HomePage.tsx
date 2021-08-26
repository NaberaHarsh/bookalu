import React from "react";
import { useDispatch } from "react-redux";
import TabFooter from "../Header-Footer/Footer/TabFooter";
import NavbarHeader from "../Header-Footer/Header/NavbarHeader";
import SearchBar from "../SearchBar/SearchBar";

const HomePage: React.FC = () => {
  return (
    <>
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
      {/*--------- top_gallery area  -----*/}
      <div className="cursol_area top_gallery_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cursol_area_inner">
                <div className="cursol_area_inner_title">
                  <h3>Top Industries</h3>
                  <div className="customNavigation customNavigation_item">
                    <a className="btn prev prev_brn" />
                    <a className="btn next next_btn" />
                  </div>
                </div>
                <div
                  id="owl-demo"
                  className="owl-carousel owl-theme carousel_main"
                >
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 1</p>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 2</p>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 3</p>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 4</p>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 5</p>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 6</p>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="carousel_item_inner">
                      <img src="/images/home/iamge_icon.png" alt="image" />
                    </div>
                    <div className="carousel_item_inner_text">
                      <p>Type 7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------- Favourites_area -------*/}
      <div className="cursol_area favourites_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cursol_area_inner">
                <div className="cursol_area_inner_title favourites_area_inner_title">
                  <h3>
                    Your Favourites <a href="#">See all</a>
                  </h3>
                  <div className="customNavigation customNavigation_item">
                    <a className="btn prev prev_brn" />
                    <a className="btn next next_btn" />
                  </div>
                </div>
                <div
                  id="owl-demo"
                  className="owl-carousel owl-theme carousel_main"
                >
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Lorem ipsum dolor sit amet cons...</h3>
                          <ul>
                            <li>
                              <a href="#">Lorem Ipsum</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Amet</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag 2</a>
                            </li>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag type 1a</a>
                            </li>
                            <li>
                              <a href="#">Tag type 2b</a>
                            </li>
                            <li>
                              <a href="#">Tag type...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Lorem ipsum dolor sit amet cons...</h3>
                          <ul>
                            <li>
                              <a href="#">Lorem Ipsum</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Amet</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag 2</a>
                            </li>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag type 1a</a>
                            </li>
                            <li>
                              <a href="#">Tag type 2b</a>
                            </li>
                            <li>
                              <a href="#">Tag type...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------- Favourites_area -------*/}
      <div className="cursol_area toprated_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cursol_area_inner">
                <div className="cursol_area_inner_title toprated_area_inner_title">
                  <h3>Top Rated</h3>
                  <div className="customNavigation customNavigation_item">
                    <a className="btn prev prev_brn" />
                    <a className="btn next next_btn" />
                  </div>
                </div>
                <div
                  id="owl-demo"
                  className="owl-carousel owl-theme carousel_main"
                >
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Lorem ipsum dolor sit amet cons...</h3>
                          <ul>
                            <li>
                              <a href="#">Lorem Ipsum</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Amet</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag 2</a>
                            </li>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag type 1a</a>
                            </li>
                            <li>
                              <a href="#">Tag type 2b</a>
                            </li>
                            <li>
                              <a href="#">Tag type...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Lorem ipsum dolor sit amet cons...</h3>
                          <ul>
                            <li>
                              <a href="#">Lorem Ipsum</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Amet</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag 2</a>
                            </li>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag type 1a</a>
                            </li>
                            <li>
                              <a href="#">Tag type 2b</a>
                            </li>
                            <li>
                              <a href="#">Tag type...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------- special_area -------*/}
      <div className="cursol_area special_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cursol_area_inner">
                <div className="cursol_area_inner_title special_area_inner_title">
                  <h3>
                    Special Offers <a href="#">See all</a>
                  </h3>
                  <div className="customNavigation customNavigation_item">
                    <a className="btn prev prev_brn" />
                    <a className="btn next next_btn" />
                  </div>
                </div>
                <div
                  id="owl-demo"
                  className="owl-carousel owl-theme carousel_main"
                >
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/home/item_1.png" alt="image" />
                        <div className="fooditem_card_img_wrapper">
                          <p>
                            <b>20% OFF</b> Lorem in July 2020
                          </p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/home/item_2.png" alt="image" />
                        <div className="fooditem_card_img_wrapper">
                          <p>
                            <b>20% OFF</b> Lorem in July 2020
                          </p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/home/item_3.png" alt="image" />
                        <div className="fooditem_card_img_wrapper">
                          <p>
                            <b>20% OFF</b> Lorem in July 2020
                          </p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------- New_area -------*/}
      <div className="cursol_area new_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cursol_area_inner">
                <div className="cursol_area_inner_title new_area_inner_title">
                  <h3>New in your area</h3>
                  <div className="customNavigation customNavigation_item">
                    <a className="btn prev prev_brn" />
                    <a className="btn next next_btn" />
                  </div>
                </div>
                <div
                  id="owl-demo"
                  className="owl-carousel owl-theme carousel_main"
                >
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                        <div className="new_area_img_wrapper">
                          <p>New</p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                        <div className="new_area_img_wrapper">
                          <p>New</p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile&nbsp;</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                        <div className="new_area_img_wrapper">
                          <p>New</p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Companys name character limit...</h3>
                          <ul>
                            <li>
                              <a href="#">Home Business</a>
                            </li>
                            <li>
                              <a href="#">Mobile</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Industry 1</a>
                            </li>
                            <li>
                              <a href="#">Industry 2</a>
                            </li>
                            <li>
                              <a href="#">Occupation 1</a>
                            </li>
                            <li>
                              <a href="#">Occupation 2</a>
                            </li>
                            <li>
                              <a href="#">Occup...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                        <div className="new_area_img_wrapper">
                          <p>New</p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Lorem ipsum dolor sit amet cons...</h3>
                          <ul>
                            <li>
                              <a href="#">Lorem Ipsum</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Amet</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag 2</a>
                            </li>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag type 1a</a>
                            </li>
                            <li>
                              <a href="#">Tag type 2b</a>
                            </li>
                            <li>
                              <a href="#">Tag type...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel_item">
                    <div className="fooditem_card">
                      <div className="fooditem_card_img">
                        <img src="/images/fav_iamge.png" alt="image" />
                        <div className="new_area_img_wrapper">
                          <p>New</p>
                        </div>
                      </div>
                      <div className="fooditem_card_text">
                        <div className="card_text_inner">
                          <p>
                            @Handle<span>1.3 miles</span>
                          </p>
                          <h3>Lorem ipsum dolor sit amet cons...</h3>
                          <ul>
                            <li>
                              <a href="#">Lorem Ipsum</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Amet</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card_text_inner2">
                          <p>
                            <img src="/images/icon.png" alt="image" />
                            25% off when you dolor 5 Ipsumsdo
                          </p>
                        </div>
                        <div className="card_text_inner3">
                          <div className="card_text_inner3_left">
                            <p>
                              4.5
                              <img src="/images/fav_star.png" alt="image" />
                              <span>(&nbsp;678&nbsp;)</span>
                            </p>
                          </div>
                          <div className="card_text_inner3_right">
                            <p>
                              <img src="/images/fav_heart.png" alt="image" />{" "}
                              2.376K
                            </p>
                          </div>
                        </div>
                        <div className="card_text_inner4">
                          <ul>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag 2</a>
                            </li>
                            <li>
                              <a href="#">Tag 1</a>
                            </li>
                            <li>
                              <a href="#">Tag type 1a</a>
                            </li>
                            <li>
                              <a href="#">Tag type 2b</a>
                            </li>
                            <li>
                              <a href="#">Tag type...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------- Add2 Area ------*/}
      <section className="add2_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="add2_area_inner">
                <img
                  className="add2_img1"
                  src="images/home/add_botom.png"
                  alt="image"
                />
                <img
                  className="add2_img2"
                  src="images/home/add_botom2.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--- Footer Area-----*/}
      {/*--- PC Footer -----*/}
      <TabFooter />
    </>
  );
};

export default HomePage;
