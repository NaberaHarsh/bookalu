import { combineReducers } from "redux";
import { userRegister, userRegisterReducer } from "./userReducer/userRegister";
import { loginReducer } from "./userReducer/loginReducer";
import { userDetailsReducer } from "./userReducer/userDetailsReducer";
import { checkMailReducer } from "./userReducer/checkMailReducer";
import { verifyPasswordReducer } from "./verifyPassword/verifyPasswordReducer";
import { getPersonalDetailsReducer } from "./updateUserInfoReducer/getPersonalDetailsReducer";
import { updatePersonalDetailsReducer } from "./updateUserInfoReducer/updatePseronalDetailsReducer";
import { updatePasswordReducer } from "./updatePassword/updatePasswordReducer";
import { forgotPasswordEmailReducer } from "./forgotPassword/forgotPasswordEmailReducer";
import { verifyEmailReducer } from "./verifyEmail/verifyEmailReducer";
import { newPasswordReducer } from "./forgotPassword/newPasswordReducer";
import { searchReducer } from "./searchAddressReducer/searchReducer";
import { searchSelectedRducer } from "./searchAddressReducer/addressSelectedReducer";
import { manualAddressReducer } from "./searchAddressReducer/manualAddressReducer";
import { addressLine1Reducer } from "./searchAddressReducer/addresslineReducer/addressLine1Reducers";
import { addressLine2Reducer } from "./searchAddressReducer/addresslineReducer/addressLine2Reducers";
import { ResendVerificationLinkReducer } from "./ResendVerifyLink/ResendVerificationLinkReducer";
import { businessRegPgValReducer } from "./businessRegister/businessRegPgValReducer";
import { typeaheadReducer } from "./typeahead/typeaheadReducer";
import { imgUploadReducer } from "./globalReducers/imgUploadReducers/imgUploadReducer";
import { coverImgUploadReducer } from "./globalReducers/imgUploadReducers/coverImgUploadReducer";
import { industriesReducer } from "./globalReducers/IndustriesReducer/industriesReducer";
import { businessFormSubmitReducer } from "./businessRegister/businessFormSubmitReducer";
import { refreshTokenReducer } from "./userReducer/refreshTokenReducer";

import {
  createOccupationReducer,
  industriesDropdownReducer,
  occupationDropdownReducer,
} from "./DropdownData/businessRegDropdownReducer";
import {
  DeleteServiceReducer,
  DeleteServiceTabReducer,
  getBusinessPgDetailsReducer,
  // addServiceReducer,
  getCompanyinfoReducer,
  getContactDetailsReducer,
  getIndustriesReducer,
  getOccupationReducer,
  getServicesReducer,
  // getOpeningTimesReducer,
  getSocialMediaFeedsReducer,
  getUpdateBusinessReducer,
  updateCompanyinfoReducer,
  updateContactDetailsReducer,
  updateIndustriesReducer,
  updateOccupationReducer,
  updateServicesReducer,
  updateServiceTabReducer,
  // updateOpeningTimesReducer,
  updateSocialMediaHandlerReducer,
} from "./businessRegister/businessUpdateReducer";

const rootReducer = combineReducers({
  userRegisterResponse: userRegister,
  loginReducer: loginReducer,
  userDetailsReducer: userDetailsReducer,
  userRegisterReducer: userRegisterReducer,
  checkMailReducer: checkMailReducer,
  verifyPasswordReducer: verifyPasswordReducer,
  getPersonalDetailsReducer: getPersonalDetailsReducer,
  updatePersonalDetailsReducer: updatePersonalDetailsReducer,
  updatePasswordReducer: updatePasswordReducer,
  // Forgot password reducers
  forgotPasswordEmailReducer: forgotPasswordEmailReducer,
  newPasswordReducer: newPasswordReducer,
  // Verify email address reducer
  verifyEmailReducer: verifyEmailReducer,
  searchReducer: searchReducer,
  manualAddressReducer,
  searchSelectedRducer,
  addressLine1Reducer,
  addressLine2Reducer,
  ResendVerificationLinkReducer,
  businessRegPgVal: businessRegPgValReducer,
  typeaheadReducer: typeaheadReducer,
  imgUpload: imgUploadReducer,
  coverImgUpload: coverImgUploadReducer,
  industriesReducer: industriesReducer,
  businessFormSubmitReducer: businessFormSubmitReducer,
  industriesDropdownReducer: industriesDropdownReducer,
  occupationDropdownReducer: occupationDropdownReducer,
  createOccupationReducer: createOccupationReducer,
  /* Get complete business details reducer -- CURRENTLY NOT WORKING */
  getUpdateBusinessReducer: getUpdateBusinessReducer,
  getBusinessPgDetailsReducer: getBusinessPgDetailsReducer,
  /* Updating company info get and update reducer  */
  getCompanyinfoReducer: getCompanyinfoReducer,
  updateCompanyinfoReducer: updateCompanyinfoReducer,
  /* Social media feeds get and update */
  getSocialMediaFeedsReducer: getSocialMediaFeedsReducer,
  updateSocialMediaHandlerReducer: updateSocialMediaHandlerReducer,
  /* Get and update contact details  */
  getContactDetailsReducer: getContactDetailsReducer,
  updateContactDetailsReducer: updateContactDetailsReducer,
  /* Get and Update Opening Times  */
  // getOpeningTimesReducer:getOpeningTimesReducer,
  // updateOpeningTimesReducer:updateOpeningTimesReducer,
  getIndustriesReducer: getIndustriesReducer,
  updateIndustriesReducer: updateIndustriesReducer,
  /* Occupation */
  updateOccupationReducer: updateOccupationReducer,
  getOccupationReducer: getOccupationReducer,
  // Services reducer
  getServicesReducer: getServicesReducer,
  updateServicesReducer: updateServicesReducer,
  DeleteServiceReducer: DeleteServiceReducer,
  DeleteServiceTabReducer: DeleteServiceTabReducer,
  updateServiceTabReducer: updateServiceTabReducer,
  refreshTokenReducer: refreshTokenReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
