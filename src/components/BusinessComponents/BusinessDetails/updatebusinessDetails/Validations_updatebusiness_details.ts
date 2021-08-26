
  export const homebusinessVal = (values: any) => {
    let updatedVar: any = { homebusiness: [] };
    let userErrorObj: any = { homebusiness: [] };
    let errorState = false;
    let defineErrorLoc: any = [];
    let dayCount = 0;
    values.openingtimes.homebusiness.map((val: any, index: number) => {
      if (val.day === index) {
        // If either starttime || endtime is not provided throw error else no error
        if (val.starttime == null || val.endtime == null) {
          updatedVar.homebusiness[index] = {
            day: undefined,
            starttime: "Required",
            endtime: "Required",
          };
        } else {
          updatedVar.homebusiness[index] = {
            day: undefined,
            starttime: undefined,
            endtime: undefined,
          };
        }
      } else if (val.day === null) {
        updatedVar.homebusiness[index] = {
          day: "Required",
          starttime: "Required",
          endtime: "Required",
        };
      }
    });

    updatedVar.homebusiness.map((val: any, ind: number) => {
      if (val.day === "Required") {
        defineErrorLoc[ind] = {
          dayNotGiven: true,
          startEndTime: true,
          index: ind,
        };
        dayCount += 1;
      }

      if (val.day === undefined) {
        if (val.starttime === "Required" || val.endtime === "Required") {
          defineErrorLoc[ind] = {
            dayNotGiven: false,
            startEndTime: true,
            index: ind,
          };
        }
      }
    });

    if (dayCount === 7) {
      errorState = true;
      userErrorObj.homebusiness[6] = {
        day: "Required",
        starttime: "Required",
        endtime: "Required",
      };
    }
    if (dayCount < 7) {
      errorState = true;
      defineErrorLoc.map((val: any, num: number) => {
        if (!val.dayNotGiven) {
          userErrorObj.homebusiness[val.index] =
            updatedVar.homebusiness[val.index];
        } else {
          userErrorObj.homebusiness[val.index] = {
            day: undefined,
            starttime: undefined,
            endtime: undefined,
          };
        }
      });
    }

    return {
      error: errorState,
      errorObj: userErrorObj,
    };
  };

  // Shop Business Error Handling
 export  const shopbusinessVal = (values: any) => {
    let updatedVar: any = { shop: [] };
    let userErrorObj: any = { shop: [] };
    let errorState = false;
    let defineErrorLoc: any = [];
    let dayCount = 0;
    values.openingtimes.shop.map((val: any, index: number) => {
      if (val.day === index) {
        // If either starttime || endtime is not provided throw error else no error
        if (val.starttime == null || val.endtime == null) {
          updatedVar.shop[index] = {
            day: undefined,
            starttime: "Required",
            endtime: "Required",
          };
        } else {
          updatedVar.shop[index] = {
            day: undefined,
            starttime: undefined,
            endtime: undefined,
          };
        }
      } else if (val.day === null) {
        updatedVar.shop[index] = {
          day: "Required",
          starttime: "Required",
          endtime: "Required",
        };
      }
    });

    updatedVar.shop.map((val: any, ind: number) => {
      if (val.day === "Required") {
        defineErrorLoc[ind] = {
          dayNotGiven: true,
          startEndTime: true,
          index: ind,
        };
        dayCount += 1;
      }

      if (val.day === undefined) {
        if (val.starttime === "Required" || val.endtime === "Required") {
          defineErrorLoc[ind] = {
            dayNotGiven: false,
            startEndTime: true,
            index: ind,
          };
        }
      }
    });

    if (dayCount === 7) {
      errorState = true;
      userErrorObj.shop[6] = {
        day: "Required",
        starttime: "Required",
        endtime: "Required",
      };
    }
    if (dayCount < 7) {
      errorState = true;
      defineErrorLoc.map((val: any, num: number) => {
        if (!val.dayNotGiven) {
          userErrorObj.shop[val.index] = updatedVar.shop[val.index];
        } else {
          userErrorObj.shop[val.index] = {
            day: undefined,
            starttime: undefined,
            endtime: undefined,
          };
        }
      });
    }

    return {
      error: errorState,
      errorObj: userErrorObj,
    };
  };

  // Mobile Business Error Handling
  export const mobilebusinessVal = (values: any) => {
    let updatedVar: any = { mobile: [] };
    let userErrorObj: any = { mobile: [] };
    let errorState = false;
    let defineErrorLoc: any = [];
    let dayCount = 0;
    values.openingtimes.mobile.map((val: any, index: number) => {
      if (val.day === index) {
        // If either starttime || endtime is not provided throw error else no error
        if (val.starttime == null || val.endtime == null) {
          updatedVar.mobile[index] = {
            day: undefined,
            starttime: "Required",
            endtime: "Required",
          };
        } else {
          updatedVar.mobile[index] = {
            day: undefined,
            starttime: undefined,
            endtime: undefined,
          };
        }
      } else if (val.day === null) {
        updatedVar.mobile[index] = {
          day: "Required",
          starttime: "Required",
          endtime: "Required",
        };
      }
    });

    updatedVar.mobile.map((val: any, ind: number) => {
      if (val.day === "Required") {
        defineErrorLoc[ind] = {
          dayNotGiven: true,
          startEndTime: true,
          index: ind,
        };
        dayCount += 1;
      }

      if (val.day === undefined) {
        if (val.starttime === "Required" || val.endtime === "Required") {
          defineErrorLoc[ind] = {
            dayNotGiven: false,
            startEndTime: true,
            index: ind,
          };
        }
      }
    });

    if (dayCount === 7) {
      errorState = true;
      userErrorObj.mobile[6] = {
        day: "Required",
        starttime: "Required",
        endtime: "Required",
      };
    }
    if (dayCount < 7) {
      errorState = true;
      defineErrorLoc.map((val: any, num: number) => {
        if (!val.dayNotGiven) {
          userErrorObj.mobile[val.index] = updatedVar.mobile[val.index];
        } else {
          userErrorObj.mobile[val.index] = {
            day: undefined,
            starttime: undefined,
            endtime: undefined,
          };
        }
      });
    }

    return {
      error: errorState,
      errorObj: userErrorObj,
    };
  };






  export const contactDetailsValidation = (values:any, errorFor:string) => {
    const contactdetails: any = {
        address:{
            addressLine1:null,
            country:null,
            postcode:null,
        },
        email:null,
        phonenumber1:null,
        phonenumber2:null
      };
      console.log(values, errorFor);
    if (!values.address.addressLine1)
        contactdetails.address = { addressLine1: "Required" }
      if (!values.address.country)
        contactdetails.address = { country: "Required" }

      if (!values.address.postcode)
        contactdetails.address = { postcode: "Required" };

      if (!values.email)
        contactdetails.email= "Required";

      if (!values.phonenumber1)
        contactdetails.phonenumber1 =  "Required";

      if (!values.phonenumber2)
        contactdetails.phonenumber2 = "Required";

      return {
          errors:contactdetails,
          errorFor
      }
  }

  export const initialValStrut = {
    address: {
      addressLine1: "",
      addressLine2: "",
      country: "",
      county: "",
      postcode: "",
      town: "",
    },
    email: "",
    phonenumber1: "",
    phonenumber2: "",
  };

  /* 
     if (tabVal.homebusiness) {
                                let homebusiness = contactDetailsValidation(
                                  values.contactdetails.homebusiness,
                                  "homebusiness"
                                );
                                contactdetails.homebusiness =
                                  homebusiness.errors;
                              }

                              if (tabVal.shop) {
                                let shop = contactDetailsValidation(
                                  values.contactdetails.shop,
                                  "shop"
                                );
                                contactdetails.shop = shop.errors;
                              }
                              if (tabVal.mobile) {
                                let mobile = contactDetailsValidation(
                                  values.contactdetails.mobile,
                                  "mobile"
                                );
                                contactdetails.mobile = mobile.errors;
                              }
  
  */