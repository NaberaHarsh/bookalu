import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/loginComponent/Login";
import Register from "./components/Authentication/RegisterComponent/Register";
import RegisterAs from "./components/Authentication/RegisterAsComponent/RegisterAs";
import RegisterFurtherDetails from "./components/Authentication/RegisterAsComponent/RegisterFurtherDetails";
import EditPersonalDetails from "./components/commonComponents/editDetails/EditPersonalDetails";
import VerifyEmail from "./components/commonComponents/verifyEmail/VerifyEmail";
import PageNotFound from "./components/commonComponents/PageNotFound/PageNotFound";
import ForgotPasswordChange from "./components/commonComponents/forgotPassword/ForgotPasswordChange";
import BusinessRegister from "./components/Authentication/businessRegister/BusinessRegister";
import HomePage from "./components/commonComponents/HomePage/HomePage";
import ProtectedRoute from "./RouteHandler/ProtectedRoute";
import { AuthRoutes, nonAuthRoutes, UserRole } from "./RouteHandler/routeEnum";
// import BusinessDetails from "./components/BusinessComponents/BusinessDetails/BusinessDetails";
import { BusinessPgMaster } from "./components/BusinessComponents/BusinessDetails/BusinessPgMaster";
import UpdateCompanyInfo from "./components/BusinessComponents/BusinessDetails/updatebusinessDetails/UpdateCompanyInfo";
import UpdateSocialMediaHandler from "./components/BusinessComponents/BusinessDetails/updatebusinessDetails/UpdateSocialMediaHandler";
import UpdateBusinessDetails from "./components/BusinessComponents/BusinessDetails/updatebusinessDetails/UpdateBusinessDetails";
import UpdateIndustries from "./components/BusinessComponents/BusinessDetails/updatebusinessDetails/UpdateIndustries";
import UpdateOccupation from "./components/BusinessComponents/BusinessDetails/updatebusinessDetails/UpdateOccupation";
import "./App.css";
import UpdateServices from "./components/BusinessComponents/BusinessDetails/updatebusinessDetails/UpdateServices";
import { ToastContainer } from "react-toastify";
// import NavbarHeader from "./components/commonComponents/Header-Footer/Header/NavbarHeader";
// import TabFooter from "./components/commonComponents/Header-Footer/Footer/TabFooter";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/reducer";
// import AuthenticationHeader from "./components/Authentication/AuthCommonUI/AuthenticationHeader";
const App: React.FC = () => {
  // const { isLoginSuccess } = useSelector(
  //   (state: RootState) => state.loginReducer
  // );

  console.log(typeof process.env.REACT_APP_MOCK);

  // useEffect(() => {
  //   const test = async () => {
  //     try {
  //       const mockData = await AuthService.getRequestMock(
  //         "v1/program-content/programs/--aProgram--"
  //       );
  //       console.log(mockData);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };
  //   test();
  // }, []);

  return (
    <div>
      <BrowserRouter>
        {/* {isLoginSuccess ? <NavbarHeader /> : <AuthenticationHeader />} */}

        <Switch>
          <Route exact path={nonAuthRoutes.login} component={Login} />
          <Route exact path={nonAuthRoutes.register} component={Register} />
          <ProtectedRoute
            exact
            path={AuthRoutes.registerAs}
            Component={RegisterAs}
            requiredRoles={[
              String(UserRole.businessuser),
              String(UserRole.clientuser),
            ]}
          />
          <Route
            path={nonAuthRoutes.furtherDetails}
            component={RegisterFurtherDetails}
          />

          <Route exact path={nonAuthRoutes.home} component={HomePage} />
          <ProtectedRoute
            path={AuthRoutes.updateUserDetails}
            Component={EditPersonalDetails}
            requiredRoles={[
              String(UserRole.businessuser),
              String(UserRole.clientuser),
            ]}
          />
          <Route path={nonAuthRoutes.verifyEmail} component={VerifyEmail} />
          <Route
            path={nonAuthRoutes.forgotPassword}
            component={ForgotPasswordChange}
          />
          <ProtectedRoute
            path={AuthRoutes.businessRegister}
            Component={BusinessRegister}
            requiredRoles={[
              // String(UserRole.businessuser),
              String(UserRole.clientuser),
            ]}
          />
          {/* Business pages (Protected) */}
          <ProtectedRoute
            path={AuthRoutes.businessDetailsUpdate}
            Component={BusinessRegister}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />
          <ProtectedRoute
            path={AuthRoutes.businessDetails}
            Component={BusinessPgMaster}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />

          <ProtectedRoute
            path={AuthRoutes.updateCompanyInfo}
            Component={UpdateCompanyInfo}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />

          <ProtectedRoute
            path={AuthRoutes.updateSocialmediaHandler}
            Component={UpdateSocialMediaHandler}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />

          <ProtectedRoute
            path={AuthRoutes.updateIndustries}
            Component={UpdateIndustries}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />

          <ProtectedRoute
            path={AuthRoutes.updateOccupation}
            Component={UpdateOccupation}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />

          <ProtectedRoute
            path={AuthRoutes.update_business_details}
            Component={UpdateBusinessDetails}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />
          {/* Update services */}
          <ProtectedRoute
            path={AuthRoutes.updateServices}
            Component={UpdateServices}
            requiredRoles={[
              String(UserRole.businessuser),
              // String(UserRole.clientuser),
            ]}
          />

          {/* - Searched Business Details page -  */}
          <Route
            path="/home/search/companyInfo/:username"
            component={BusinessPgMaster}
          />

          {/* UpdateSocialMediaHandler */}

          <Route path={nonAuthRoutes.notFound} component={PageNotFound} />
        </Switch>
        {/* {isLoginSuccess && <TabFooter />} */}
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
