import React from "react";

const ReviewsTab: React.FC = () => {
  return (
    <section className="reviews_area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="reviews_top">
              <div className="reviews_top_left">
                <div className="reviews_top_left_inner">
                  <p>Reviews</p>
                </div>
                <div className="reviews_top_left_inner1">
                  <p>
                    4.5
                    <img src="images/star.png" alt="images" />(<span>678</span>)
                  </p>
                </div>
              </div>
              <div className="reviews_top_right">
                <div className="reviews_top_right1">
                  <div className="btn-group">
                    <button
                      type="button"
                      className=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Star Rating
                    </button>
                    <div className="dropdown-menu dropdown_item1 ">
                      <h5>Star Rating</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck1"
                        >
                          1 Star
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck2"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck2"
                        >
                          2 Star
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck3"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck3"
                        >
                          3 Star
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck4"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck4"
                        >
                          4 Star
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck5"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck5"
                        >
                          5 Star
                        </label>
                      </div>
                      <a href="#">Clear filters</a>
                    </div>
                  </div>
                </div>
                <div className="reviews_top_right1 reviews_top_right2">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="reviews_top_right1_pc"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by : Mo..
                    </button>
                    <button
                      type="button"
                      className="reviews_top_right1_tab"
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
                          id="defaultCheck6"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck6"
                        >
                          Most Recent
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck7"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck7"
                        >
                          lowest Score
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input checkbox"
                          type="checkbox"
                          id="defaultCheck8"
                        />
                        <label
                          className="form-check-label checkbox_label"
                          htmlFor="defaultCheck8"
                        >
                          Highest Score
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
        <div className="row">
          <div className="col-md-12">
            <div className="reviews_search">
              <div className="reviews_search_inner">
                <p>
                  keyword searched{" "}
                  <a href="#">
                    <img src="images/crose_black.png" alt="image" />
                  </a>
                </p>
                <a className="reviews_search_inner_edit" href="#">
                  edit
                </a>
              </div>
              <div className="reviews_search_inner2">
                <input type="text" placeholder="Keywords" />
              </div>
            </div>
          </div>
        </div>
        <div className="post_area_main">
          <div className="post_area_main_inner">
            <div className="row">
              <div className="col-md-12">
                <div className="post_area">
                  <div className="post_area_top">
                    <div className="post_area_top_left">
                      <p>Customers Name</p>
                    </div>
                    <div className="post_area_top_right">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star_hulf.png" alt="star_icon" />
                          </a>
                        </li>
                      </ul>
                      <p>3 month ago</p>
                    </div>
                  </div>
                  <div className="post_area_mid">
                    <b>Reviews comment title</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad... minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat...
                    </p>
                    <a href="#">Show all</a>
                  </div>
                  <div className="post_area_bottom">
                    <input type="search" placeholder="Reply" />
                    <a href="#">Post</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="post_area post_area1">
                  <div className="post_area_top">
                    <div className="post_area_top_left">
                      <p>Customers Name</p>
                    </div>
                    <div className="post_area_top_right">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star_hulf.png" alt="star_icon" />
                          </a>
                        </li>
                      </ul>
                      <p>3 month ago</p>
                    </div>
                  </div>
                  <div className="post_area_mid">
                    <b>Reviews comment title</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad... minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat...
                    </p>
                    <a href="#">Show all</a>
                  </div>
                  <div className="post_area_bottom">
                    <input type="search" placeholder="Reply" />
                    <a href="#">Post</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="post_area post_area1">
                  <div className="post_area_top">
                    <div className="post_area_top_left">
                      <p>Customers Name</p>
                    </div>
                    <div className="post_area_top_right">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star_hulf.png" alt="star_icon" />
                          </a>
                        </li>
                      </ul>
                      <p>3 month ago</p>
                    </div>
                  </div>
                  <div className="post_area_mid">
                    <b>Reviews comment title</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad... minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat...
                    </p>
                    <a href="#">Show all</a>
                  </div>
                  <div className="post_area_bottom">
                    <input type="search" placeholder="Reply" />
                    <a href="#">Post</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="post_area post_area1">
                  <div className="post_area_top">
                    <div className="post_area_top_left">
                      <p>Customers Name</p>
                    </div>
                    <div className="post_area_top_right">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star_hulf.png" alt="star_icon" />
                          </a>
                        </li>
                      </ul>
                      <p>3 month ago</p>
                    </div>
                  </div>
                  <div className="post_area_mid">
                    <b>Reviews comment title</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad... minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat...
                    </p>
                    <a href="#">Show all</a>
                  </div>
                  <div className="post_area_bottom">
                    <input type="search" placeholder="Reply" />
                    <a href="#">Post</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="post_area post_area1">
                  <div className="post_area_top">
                    <div className="post_area_top_left">
                      <p>Customer Name</p>
                    </div>
                    <div className="post_area_top_right">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star.png" alt="star_icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star_hulf.png" alt="star_icon" />
                          </a>
                        </li>
                      </ul>
                      <p>3 month ago</p>
                    </div>
                  </div>
                  <div className="post_area_mid">
                    <b>Reviews comment title</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad... minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat...
                    </p>
                    <a href="#">Show all</a>
                  </div>
                  <div className="post_area_bottom">
                    <input type="search" placeholder="Reply" />
                    <a href="#">Post</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsTab;
