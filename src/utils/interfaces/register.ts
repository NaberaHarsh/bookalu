export interface SubmittingData {
  firstName?: string;
  lastName?: string;
  number?: string;
  mobile?: string;
  telephone?: string;
  address?: string;
  addressLine1?: string;
  addressLine2?: string;
  town?: string;
  county?: string;
  country?: string;
  postcode?: string;
  checkbox?: boolean;
}

export interface address {
  addressLine1?: string;
  addressLine2?: string;
  town?: string;
  county?: string;
  country?: string;
  postcode?: string;
  search?: string;
}

export interface ValidationFlag {
  postCodeFlag?: boolean;
  mobileOrTelephone?: boolean;
}

export interface EmailVerificationMessage {
  message: string;
  state: boolean;
}
