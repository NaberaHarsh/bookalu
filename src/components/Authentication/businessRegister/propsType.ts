
export type FormValues = {
    tab1: any;
    tab2: any;
    tab3: any;
    home: any;
    mobile: any;
    shop: any;
    companyinfo: {
      logoid?: any;
      logo: string;
  
      coverphotoid?: any;
      coverphoto: string;
      companyname: string;
      username: string;
      bio: string;
    };
  
    industries: string[];
    occupation: [];
    contactdetails: {
      homebusiness: {
        address: {
          addressLine1: string;
          addressLine2: string;
          town: string;
          county: string;
          country: string;
          postcode: string;
        };
        phonenumber1: string;
        phonenumber2: string;
  
        email: string;
      };
      mobile: {
        address: {
          addressLine1: string;
          addressLine2: string;
          town: string;
          county: string;
          country: string;
          postcode: string;
        };
        phonenumber1: string;
        phonenumber2: string;
  
        email: string;
      };
      shop: {
        address: {
          addressLine1: string;
          addressLine2: string;
          town: string;
          county: string;
          country: string;
          postcode: string;
        };
        phonenumber1: string;
        phonenumber2: string;
  
        email: string;
      };
    };
    openingtimes: {
      homebusiness: any;
      mobile: any;
      shop: any;
    };
  
    rushitestservices: any;
    services: any;
    socialmediafeed: any;
  };