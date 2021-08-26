export interface UserDetailsState {
  firstName: string;
  lastName: string;
  mobile: string;
  telephone: string;
  email: string;
  address: string;
  postcode?: string;
  addressLine1?: string;
  addressLine2?: string;
  town?: string;
  county?: string;
  country?: string;
}

export interface PasswordField {
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

export interface Address {
  postcode?: string;
  addressLine1?: string;
  addressLine2?: string;
  town?: string;
  county?: string;
  country?: string;
}
export interface ValidationFlag {
  postCodeFlag?: boolean;
  mobileOrTelephone?: boolean;
}
