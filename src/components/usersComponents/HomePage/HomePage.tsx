import React from 'react'

const HomePage:React.FC = () =>  {
    return (
       
        <div>
  {/*Header Area Start */}
  
  <header className="site_header pc_header">
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="nav_mobile" href="#"><img src="images/header/left_arrow.png" alt="image" /></a>
          <div className="nav_logo_d"><a className="navbar-brand" href="#"><img src="images/logo.png" alt="logo" /></a></div>
          <div className="nav_logo_m"><a className="navbar-brand" href="#"><img src="images/header/mobile.png" alt="logo" /></a></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img className="nav_mobile_r" src="images/header/3dot.png" alt="image" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link manu_item" href="#"><img className="nav_img1" src="images/header/homebtn.png" alt="image" />Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle manu_item1" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Business Page
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle manu_item2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sign in / Register <img className="nav_img2" src="images/header/parson.png" alt="image" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link manu_item3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/header/bell.png" alt="image" /><span>3</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  {/*---- Tab Header  -----*/}
  <header className="site_header tab_header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mobile">
            <div className="mobile_left">
              <a href="#"><img src="images/header/left_arrow.png" alt="image" /></a>
            </div>
            <div className="mobile_middle">
              <a href="#"><img src="images/header/mobile.png" alt="images" /></a>
            </div>
            <div className="mobile_right">
              <a href="#"><img src="images/header/3dot.png" alt="images" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*--- Bannar Area-----*/}
  <section className="bannar_area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bannar_inner1">
            <div className="inner1_item">
              <input type="text" placeholder="Search company name or keywords" />
            </div>
            <div className="inner1_item inner1_item1">
              <label>Location :</label>
              <input type="text" placeholder="20 Nameof road" />
              <a href="#">Change</a>
            </div>
            <div className="inner1_item inner1_item2">
              <select>
                <option>Any Date</option>
                <option>Any Date1</option>
                <option>Any Date2</option>
              </select>
            </div>
            <div className="inner1_item inner1_item2 inner1_item3">
              <select>
                <option>Any Time</option>
                <option>Any Time1</option>
                <option>Any Time1</option>
              </select>
            </div>
          </div>
          <div className="bannar_inner2">
            <div className="inner2_item" id="inner2_item">
              <select>
                <option>Select an Industry</option>
                <option>Select an Ipsum1</option>
                <option>Select an Ipsum2</option>
              </select>
            </div>
            <div className="inner2_item inner2_item1">
              <input type="checkbox" id="inner2_item1Check" />
              <label htmlFor="inner2_item1Check">Home Business</label>
            </div>
            <div className="inner2_item inner2_item2">
              <input type="checkbox" id="inner2_item1Check1" />
              <label htmlFor="inner2_item1Check1">Mobile</label>
            </div>
            <div className="inner2_item inner2_item3">
              <input type="checkbox" id="inner2_item1Check2" />
              <label htmlFor="inner2_item1Check2">Shop</label>
            </div>
            <div className="inner2_item inner2_item4">
              <input type="checkbox" id="inner2_item1Check3" />
              <label htmlFor="inner2_item1Check3">Available Now</label>
            </div>
            <div className="inner2_item inner2_item5">
              <button type="button" className="btn btn-default">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*--------- Add Area ------*/}
  <section className="add_area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="add_area_inner">
            {/* images/header/left_arrow.png */}
            <img className="add1_img1" src="images/home/add_top.png" alt="images" />
            <img className="add1_img2" src="images/add_1.png" alt="images" />
            <img className="add1_img3" src="images/add_1_2.png" alt="images" />
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
            <div id="owl-demo" className="owl-carousel owl-theme carousel_main">
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
                </div>
                <div className="carousel_item_inner_text">
                  <p>Type 1</p>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
                </div>
                <div className="carousel_item_inner_text">
                  <p>Type 2</p>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
                </div>
                <div className="carousel_item_inner_text">
                  <p>Type 3</p>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
                </div>
                <div className="carousel_item_inner_text">
                  <p>Type 4</p>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
                </div>
                <div className="carousel_item_inner_text">
                  <p>Type 5</p>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
                </div>
                <div className="carousel_item_inner_text">
                  <p>Type 6</p>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="carousel_item_inner">
                  <img src="images/home/iamge_icon.png" alt="image" />
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
              <h3>Your Favourites <a href="#">See all</a></h3>
              <div className="customNavigation customNavigation_item">
                <a className="btn prev prev_brn" />
                <a className="btn next next_btn" />
              </div>
            </div>
            <div id="owl-demo" className="owl-carousel owl-theme carousel_main">
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Lorem ipsum dolor sit amet cons...</h3>
                      <ul>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Amet</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag 2</a></li>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag type 1a</a></li>
                        <li><a href="#">Tag type 2b</a></li>
                        <li><a href="#">Tag type...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Lorem ipsum dolor sit amet cons...</h3>
                      <ul>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Amet</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag 2</a></li>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag type 1a</a></li>
                        <li><a href="#">Tag type 2b</a></li>
                        <li><a href="#">Tag type...</a></li>
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
            <div id="owl-demo" className="owl-carousel owl-theme carousel_main">
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Lorem ipsum dolor sit amet cons...</h3>
                      <ul>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Amet</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag 2</a></li>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag type 1a</a></li>
                        <li><a href="#">Tag type 2b</a></li>
                        <li><a href="#">Tag type...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Lorem ipsum dolor sit amet cons...</h3>
                      <ul>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Amet</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag 2</a></li>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag type 1a</a></li>
                        <li><a href="#">Tag type 2b</a></li>
                        <li><a href="#">Tag type...</a></li>
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
              <h3>Special Offers <a href="#">See all</a></h3>
              <div className="customNavigation customNavigation_item">
                <a className="btn prev prev_brn" />
                <a className="btn next next_btn" />
              </div>
            </div>
            <div id="owl-demo" className="owl-carousel owl-theme carousel_main">
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/home/item_1.png" alt="image" />
                    <div className="fooditem_card_img_wrapper">
                      <p><b>20% OFF</b> Lorem in July 2020</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/home/item_2.png" alt="image" />
                    <div className="fooditem_card_img_wrapper">
                      <p><b>20% OFF</b> Lorem in July 2020</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/home/item_3.png" alt="image" />
                    <div className="fooditem_card_img_wrapper">
                      <p><b>20% OFF</b> Lorem in July 2020</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
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
            <div id="owl-demo" className="owl-carousel owl-theme carousel_main">
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                    <div className="new_area_img_wrapper">
                      <p>New</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                    <div className="new_area_img_wrapper">
                      <p>New</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile&nbsp;</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                    <div className="new_area_img_wrapper">
                      <p>New</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Companys name character limit...</h3>
                      <ul>
                        <li><a href="#">Home Business</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Shop</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Industry 1</a></li>
                        <li><a href="#">Industry 2</a></li>
                        <li><a href="#">Occupation 1</a></li>
                        <li><a href="#">Occupation 2</a></li>
                        <li><a href="#">Occup...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                    <div className="new_area_img_wrapper">
                      <p>New</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Lorem ipsum dolor sit amet cons...</h3>
                      <ul>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Amet</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag 2</a></li>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag type 1a</a></li>
                        <li><a href="#">Tag type 2b</a></li>
                        <li><a href="#">Tag type...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel_item">
                <div className="fooditem_card">
                  <div className="fooditem_card_img">
                    <img src="images/fav_iamge.png" alt="image" />
                    <div className="new_area_img_wrapper">
                      <p>New</p>
                    </div>
                  </div>
                  <div className="fooditem_card_text">
                    <div className="card_text_inner">
                      <p>@Handle<span>1.3 miles</span></p>
                      <h3>Lorem ipsum dolor sit amet cons...</h3>
                      <ul>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Amet</a></li>
                      </ul>
                    </div>
                    <div className="card_text_inner2">
                      <p><img src="images/icon.png" alt="image" />25% off when you dolor 5 Ipsumsdo</p>
                    </div>
                    <div className="card_text_inner3">
                      <div className="card_text_inner3_left">
                        <p>4.5<img src="images/fav_star.png" alt="image" /><span>(&nbsp;678&nbsp;)</span></p>
                      </div>
                      <div className="card_text_inner3_right">
                        <p><img src="images/fav_heart.png" alt="image" /> 2.376K</p>
                      </div>
                    </div>
                    <div className="card_text_inner4">
                      <ul>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag 2</a></li>
                        <li><a href="#">Tag 1</a></li>
                        <li><a href="#">Tag type 1a</a></li>
                        <li><a href="#">Tag type 2b</a></li>
                        <li><a href="#">Tag type...</a></li>
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
            <img className="add2_img1" src="images/home/add_botom.png" alt="image" />
            <img className="add2_img2" src="images/home/add_botom2.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*--- Footer Area-----*/}
  {/*--- PC Footer -----*/}
  <section className="pc_footer">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="pc_footer_left">
            <p>© Copyright Bookalu Ltd 2021 </p>
            <ul>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-7">
          <div className="pc_footer_right">
            <ul>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Advertise with us</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a id="pc_footer_right_last" href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*--- Tab Footer -----*/}
  <section className="tab_display" id="tab_display">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="tab_display_inner">
            <ul className="tab_display_innerlist">
              <li><a href="#" className="tab_display_innerlist1"><img src="images/footer/icon_1.png" alt="icon" /></a></li>
              <li><a href="#" className="tab_display_innerlist2"><img src="images/footer/icon_2.png" alt="icon" /></a></li>
              <li><a href="#" className="tab_display_innerlist3"><img src="images/footer/icon_3.png" alt="icon" /></a></li>
              <li><a href="#" className="tab_display_innerlist4"><img src="images/footer/icon_4.png" alt="icon" /></a></li>
              <li><a href="#" className="tab_display_innerlist5"><img src="images/footer/icon_5.png" alt="icon" /></a></li>
              <li><a className="active tab_display_innerlist6" href="#"><img src="images/footer/icon_8.png" alt="icon" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>


        </div>
    )
}

export default HomePage
