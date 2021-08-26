export enum AuthRoutes {
  updateUserDetails = "/home/editDetails",
  businessRegister = "/business",
  businessDetailsUpdate = "/update-business-details",
  registerAs = "/register-as",
  businessDetails = "/home/businessdetails",
  updateCompanyInfo = "/home/companyInfo",
  updateSocialmediaHandler = "/home/update_social_mda_handler",
  update_business_details = "/home/business_details",
  updateOpeningDetails = "/home/update_opening_times/:id",
  updateIndustries = "/home/update_industries",
  updateOccupation = "/home/update_occupation",
  updateServices = "/home/services_update",
}

export enum nonAuthRoutes {
  login = "/",
  register = "/register",

  furtherDetails = "/further-details",
  home = "/home",
  verifyEmail = "/verifyemail/:token",
  forgotPassword = "/forgotpassword/:forgotPasswordToken",
  searchedBusinessDetails = "/home/search/companyInfo/:username",
  notFound = "*",
}

export enum UserRole {
  clientuser = "clientuser",
  businessuser = "businessuser",
}
