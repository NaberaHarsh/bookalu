import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import jwt_decode from "jwt-decode";
import rootReducer from "./reducer/index";

// Here the variable name are same as that of reducer file of redux
let userDetailsReducer: any;
let loginReducer:any;

const userAuthToken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token") || "")
  : null;

if (userAuthToken && userAuthToken.accessToken !== "") {
  userAuthToken.accessToken = jwt_decode(userAuthToken.accessToken);
  loginReducer = {
    data: userAuthToken,
    loading: false,
    error: false,
    isLoginSuccess: true,
  };
  
}

const initialState = {
  userDetailsReducer,
  loginReducer,
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
