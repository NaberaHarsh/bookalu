import React, { useState, useEffect } from "react";
import {
  Row,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  NavItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logoutAction } from "../../../../redux/action/authentication/login/loginAction";
import { RootState } from "../../../../redux/reducer";
import {
  AuthRoutes,
  nonAuthRoutes,
  UserRole,
} from "../../../../RouteHandler/routeEnum";
import "./NavbarHeader.css";
const NavbarHeader: React.FC = () => {
  const loginReducer = useSelector((state: RootState) => state.loginReducer);
  const { isLoginSuccess, data } = loginReducer;
  console.log("data", data);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <div className="site_header pc_header">
        <Container fluid className=" navbar-container">
          <Row>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="nav_mobile" to={nonAuthRoutes.home}>
                <img src="/images/header/left_arrow.png" alt="ime" />
              </Link>
              <Navbar.Brand className="nav_logo_d">
                <Link to={nonAuthRoutes.home}>
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </Navbar.Brand>
              <div className="nav_logo_m">
                <a className="navbar-brand" href="#">
                  <img src="/images/header/mobile.png" alt="logo" />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  className="nav_mobile_r"
                  src="/images/header/3dot.png"
                  alt="ima"
                />
              </button>
              <Navbar.Collapse id="navbarSupportedContent">
                {/* changed class name  mr to ml  */}
                <Nav className="ml-auto headerTop">
                  <Link
                    className="nav-item  manu_item nav-link"
                    to={nonAuthRoutes.home}
                  >
                    <img
                      className="nav_img1"
                      src="/images/header/homebtn.png"
                      alt="ima"
                    />
                    Home
                  </Link>

                  {isLoginSuccess && (
                    <NavDropdown
                      title="Business Page"
                      id="navbarDropdown"
                      className="manu_item1 pr_23"
                    >
                      <NavDropdown.Item
                        className="headerTop"
                        href="#"
                        style={{ marginTop: "-7px", marginBottom: "-5px" }}
                      >
                        <Link
                          className="menu-item"
                          to={AuthRoutes.businessDetails}
                        >
                          Your Pages
                        </Link>
                      </NavDropdown.Item>
                      <Dropdown.Divider />
                      <NavDropdown.Item
                        className="nav-link dropdown-toggle manu_item1 drop_inner_drop your_page_item"
                        to={AuthRoutes.businessDetails}
                        as={Link}
                      >
                        <img src="/images/yourpage/icon_1.png" alt="ima" />
                        @Handle
                      </NavDropdown.Item>

                      <Link
                        className="edit-link nav-link"
                        to={AuthRoutes.businessDetails}
                      >
                        <>
                          <img src="/images/yourpage/icon_2.png" alt="im2" />
                          Edit
                        </>
                      </Link>

                      <NavDropdown.Item
                        className="your_page_item2 nav-link"
                        href="#"
                      >
                        <img src="/images/yourpage/icon_3.png" alt="image" />
                        Calendar Bookings
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="dropdown-item nav-link your_page_item3"
                        href="#"
                      >
                        <img src="/images/yourpage/icon_4.png" alt="image" />
                        Special offers
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        className=" your_page_item5 nav-link"
                        href="#"
                      >
                        <img src="/images/yourpage/icon_5.png" alt="im5" />
                        Promote your Page
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="your_page_item6 nav-link"
                        href="#"
                      >
                        <img src="/images/yourpage/icon_6.png" alt="im6" />
                        Reviews
                      </NavDropdown.Item>
                      <Dropdown.Divider />
                      {!data.roles.includes(UserRole.businessuser) && (
                        <NavDropdown.Item className="your_page_item7 nav-link">
                          <Link to={AuthRoutes.businessRegister}>
                            <img src="/images/yourpage/icon_7.png" alt="im7" />
                            <span>Create a Business Page</span>
                          </Link>
                        </NavDropdown.Item>
                      )}
                    </NavDropdown>
                  )}

                  <NavDropdown
                    title={
                      <>
                        {!isLoginSuccess ? (
                          <>
                            <span className="user_menu_name">
                              {" "}
                              Sign in / Register
                            </span>{" "}
                          </>
                        ) : (
                          <span className="user_menu_name">
                            {data.accessToken.firstName}{" "}
                          </span>
                        )}
                        <img
                          className="nav_img2"
                          src="/images/header/parson.png"
                          alt="imUsr"
                        />
                      </>
                    }
                    id="navbarDropdown"
                    className="manu_item2  bell_icon_dropdown "
                  >
                    {isLoginSuccess ? (
                      <>
                        <p className="username">
                          Hello <b>Laura</b>
                          <a href="#">not you?</a>
                        </p>
                        <Dropdown.Divider />
                        <NavDropdown.Item
                          className="account_item1 nav-link"
                          href="#"
                        >
                          <Link to={AuthRoutes.updateUserDetails}>
                            <img
                              src="/images/account/parson.png"
                              alt="images"
                            />
                            Account
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="account_item1 nav-link"
                          href="#"
                        >
                          <img src="/images/account/icon_3.png" alt="images" />
                          Favourites
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="account_item1 nav-link"
                          href="#"
                        >
                          <img src="/images/account/icon_4.png" alt="images" />
                          Bookings
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="account_item1 nav-link"
                          href="#"
                        >
                          <img src="/images/account/icon_1.png" alt="images" />
                          Support
                        </NavDropdown.Item>
                        <NavDropdown.Item className="account_item1 nav-link">
                          <Link to={nonAuthRoutes.home} onClick={logoutHandler}>
                            <img
                              src="/images/account/icon_2.png"
                              alt="images"
                            />
                            Log Out
                          </Link>
                        </NavDropdown.Item>
                      </>
                    ) : (
                      <>
                        <NavDropdown.Item className="account_item1 nav-link">
                          <Link to={nonAuthRoutes.login}>
                            <img
                              src="/images/account/parson.png"
                              alt="images"
                            />
                            Login
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="account_item1 nav-link">
                          <Link to={nonAuthRoutes.register}>
                            <img
                              src="/images/account/parson.png"
                              alt="images"
                            />
                            Register
                          </Link>
                        </NavDropdown.Item>
                      </>
                    )}
                  </NavDropdown>

                  <NavItem>
                    <NavDropdown
                      className="NotificationMenu"
                      alignRight
                      title={
                        <>
                          {" "}
                          <img
                            src="/images/header/bell.png"
                            className="bell"
                            alt="imabell"
                          />
                          <span className="notificationCount bell">3</span>{" "}
                        </>
                      }
                      id="basic-nav-dropdown"
                    >
                      <p className="notification_item notificationHead">
                        Notification
                      </p>
                      <NavDropdown.Item
                        className="notification_item1 nav-link"
                        href="#"
                      >
                        <b>Laura Taylor </b>has ipsumed an lorem
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item2 nav-link"
                        href="#"
                      >
                        <b>Michelle Wilkinson</b> has dolored an ipsumed dolor
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item3 nav-link"
                        href="#"
                      >
                        <b>Sally Smith</b> has ipsumed an loremdolor
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item4 nav-link"
                        href="#"
                      >
                        <b>Kerry Harrington</b> has left a dolor
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item4 nav-link"
                        href="#"
                      >
                        <b>Lorem Ipsum </b> dolor sit amet consectetur{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item4 nav-link"
                        href="#"
                      >
                        <b>Lorem Ipsum </b> dolor sit amet consectetur{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item4 nav-link"
                        href="#"
                      >
                        <b>Lorem Ipsum </b> dolor sit amet consectetur{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item4 nav-link"
                        href="#"
                      >
                        <b>Lorem Ipsum </b> dolor sit amet consectetur{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="notification_item5 nav-link"
                        href="#"
                      >
                        <b>Lorem Ipsum </b> dolor sit amet consectetur{" "}
                      </NavDropdown.Item>
                      <div className="notification_item_loder">
                        <img src="/images/loder1.gif" alt="loder" />
                      </div>
                      <NavDropdown.Item
                        className="notification_item6 nav-link"
                        href="#"
                      >
                        See All
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      </div>
      {/*---- Tab Header  -----*/}
      <header className="site_header tab_header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mobile">
                <div className="mobile_left">
                  <a href="#">
                    <img src="/images/header/left_arrow.png" alt="image" />
                  </a>
                </div>
                <div className="mobile_middle">
                  <a href="#">
                    <img src="/images/header/mobile.png" alt="images" />
                  </a>
                </div>
                <div className="mobile_right">
                  <a href="#" className="mobile_3dot">
                    <img src="/images/header/3dot.png" alt="images" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarHeader;
