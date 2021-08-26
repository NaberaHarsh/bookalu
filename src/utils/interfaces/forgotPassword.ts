export interface formData {
    password: string;
    confirmPassword: string;
  }
  

  export interface ForgotPasswordPorps {
    show: boolean;
    onHide: () => void;
  }
  
  export interface ForgotPasswordEmailSubmit {
    email: string;
  }
  