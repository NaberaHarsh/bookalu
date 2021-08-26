import { BusinessRegType } from "./businessTypes";
import { Val as Payload } from "../../../components/Authentication/businessRegister/wizardInterface";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import UserService from "../../../RouteHandler/axiosHandler/user.service";
export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const businessFormSubmitAction: AppThunk = (payload: Payload) => {
  console.log('payload', payload);
  const obj: any = {
    contactdetails: {
      shop: null,
      mobile: null,
      homebusiness: null,
    },
    openingtimes: {
      shop: null,
      mobile: null,
      homebusiness: null,
    },
  };
  obj['companyinfo'] = {
    logoId: payload.companyinfo.logoid,
    coverphotoId: payload.companyinfo.coverphotoid,
    companyName: payload.companyinfo.companyname,
    username: payload.companyinfo.username,
    bio: payload.companyinfo.bio,
  };
  let industries: any = [];
  let occupation: any = [];
  // let openingTimes:any = {}
  let homebusiness: any = [];
  let shop: any = [];
  let mobile: any = [];
  let socialmediafeed: any = [];

  payload.industries.map((val: any, ind: number) => {
    industries.push(val.id);
  });

  payload.occupation.map((val: any, ind: number) => {
    occupation.push(val.id);
  });

  obj.industries = industries;
  obj.occupation = occupation;
  // obj.services = payload.services;

  let services: any = {
    tabOne: {
      heading: "",
      subservices: [],
      // deletedSubservices: [],
    },
    tabTwo: {
      heading: "",
      subservices: [],
      // deletedSubservices: [],
    },
    tabThree: {
      heading: "",
      subservices: [],
      // deletedSubservices: [],
    },
    // deletedServices: [],
  };

  const HoursToMinConverter = (time: string) => {
    let updatToMin = time.split(":");
    let convertToMinutes = Number(updatToMin[0]) + Number(updatToMin[1]);
    return convertToMinutes;
  };

  if (payload.tab1 === "tab1") {
    services.tabOne.heading = payload.services.tabOne.heading;
    payload.services.tabOne.subservices.map((val: any, ind: number) => {
      let appoinmentviaData:boolean[] =  [];
      val.appoinmentvia.map((e:any)=> typeof e === "string" ? appoinmentviaData.push(false)  : appoinmentviaData.push(e)  )
    
      services.tabOne.subservices.push({
        appoinmentvia: appoinmentviaData,
                // appoinmentvia: [true,true,true],

        haslinebreak: val.haslinebreak,
        name: val.name,
        price: val.price,
        timereqquired: HoursToMinConverter(val.timereqquired),
        sequenceKey: ind,
      });
    });
  } else {
    services.tabOne = null;
  }

  if (payload.tab2 === "tab2") {
    services.tabTwo.heading = payload.services.tabTwo.heading;
    payload.services.tabTwo.subservices.map((val: any, ind: number) => {
      // let convertToMinutes = new Date(val.timereqquired).getTime();
let appoinmentviaData:boolean[] =  [];
val.appoinmentvia.map((e:any)=> typeof e === "string" ? appoinmentviaData.push(false)  : appoinmentviaData.push(e)  )
      services.tabTwo.subservices.push({
        appoinmentvia: appoinmentviaData,
                // appoinmentvia: [true,true,true],

        haslinebreak: val.haslinebreak,
        name: val.name,
        price: val.price,
        timereqquired: HoursToMinConverter(val.timereqquired),
        sequenceKey: ind,
      });
    });
  } else {
    services.tabTwo = null;
  }

  if (payload.tab3 === "tab3") {
    services.tabThree.heading = payload.services.tabThree.heading;

    payload.services.tabThree.subservices.map((val: any, ind: number) => {
      // let convertToMinutes = new Date(val.timereqquired).getTime();
      let appoinmentviaData:boolean[] =  [];
      val.appoinmentvia.map((e:any)=> typeof e === "string" ? appoinmentviaData.push(false)  : appoinmentviaData.push(e)  )
      services.tabThree.subservices.push({
        appoinmentvia: appoinmentviaData,
                // appoinmentvia: [true,true,true],

        haslinebreak: val.haslinebreak,
        name: val.name,
        price: val.price,
        timereqquired: HoursToMinConverter(val.timereqquired),
        sequenceKey: ind,
      });
    });
  } else {
    services.tabThree = null;
  }

  obj.services = services;

  /* contactdetails formatter  */
  if (payload.home) {
    obj.contactdetails.homebusiness = {
      address: {
        addressLine1: payload.contactdetails.homebusiness.address.addressLine1,
        addressLine2: payload.contactdetails.homebusiness.address.addressLine2,
        town: payload.contactdetails.homebusiness.address.town,
        county: payload.contactdetails.homebusiness.address.county,
        country: payload.contactdetails.homebusiness.address.country,
        postcode: payload.contactdetails.homebusiness.address.postcode,
      },
      phonenumber1: payload.contactdetails.homebusiness.phonenumber1,
      phonenumber2: payload.contactdetails.homebusiness.phonenumber2,
      email: payload.contactdetails.homebusiness.email,
    };

    payload.openingtimes.homebusiness.map((val: any, ind: number) => {
      // console.log(;
      if (Number.isInteger(val.day)) {
        homebusiness.push({
          day: val.day,
          starttime: val.starttime,
          endtime: val.endtime,
        });
      }
    });
    obj.openingtimes.homebusiness = homebusiness;
  } else {
    obj.contactdetails.homebusiness = null;
    obj.openingtimes.homebusiness = null;
  }

  if (payload.shop) {
    obj.contactdetails.shop = {
      address: {
        addressLine1: payload.contactdetails.shop.address.addressLine1,
        addressLine2: payload.contactdetails.shop.address.addressLine2,
        town: payload.contactdetails.shop.address.town,
        county: payload.contactdetails.shop.address.county,
        country: payload.contactdetails.shop.address.country,
        postcode: payload.contactdetails.shop.address.postcode,
      },
      phonenumber1: payload.contactdetails.shop.phonenumber1,
      phonenumber2: payload.contactdetails.shop.phonenumber2,
      email: payload.contactdetails.shop.email,
    };

    payload.openingtimes.shop.map((val: any, ind: number) => {
      if (Number.isInteger(val.day)) {
        shop.push({
          day: val.day,
          starttime: val.starttime,
          endtime: val.endtime,
        });
      }
    });

    obj.openingtimes.shop = shop;
  } else {
    obj.contactdetails.shop = null;
    obj.openingtimes.shop = null;
  }

  if (payload.mobile) {
    obj.contactdetails.mobile = {
      address: {
        addressLine1: payload.contactdetails.mobile.address.addressLine1,
        addressLine2: payload.contactdetails.mobile.address.addressLine2,
        town: payload.contactdetails.mobile.address.town,
        county: payload.contactdetails.mobile.address.county,
        country: payload.contactdetails.mobile.address.country,
        postcode: payload.contactdetails.mobile.address.postcode,
      },
      phonenumber1: payload.contactdetails.mobile.phonenumber1,
      phonenumber2: payload.contactdetails.mobile.phonenumber2,
      email: payload.contactdetails.mobile.email,
    };

    payload.openingtimes.mobile.map((val: any, ind: number) => {
      if (Number.isInteger(val.day)) {
        mobile.push({
          day: val.day,
          starttime: val.starttime,
          endtime: val.endtime,
        });
      }
    });
    obj.openingtimes.mobile = mobile;
  } else {
    obj.contactdetails.mobile = null;
    obj.openingtimes.mobile = null;
  }

  payload.socialmediafeed.map((val: any, ind: number) => {
    if (Number.isInteger(val.socialMediaType)) {
      socialmediafeed.push({
        url: val.url,
        isselected: val.isselected,
        socialMediaType: val.socialMediaType,
      });
    }
  });

  obj.socialmediafeed = socialmediafeed;

  console.log(JSON.stringify(obj, undefined, 2));

  return (dispatch: Dispatch) => {
    dispatch({
      type: BusinessRegType.FETCH_REQUEST,
    });
    console.log(obj)
    UserService.postRequest("businessAccount", obj).then(
      (data) => {
        dispatch({
          type: BusinessRegType.FETCH_SUCCESS,
          data: data.data,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        dispatch({
          type: BusinessRegType.FETCH_ERROR,
          data: error.response,
        });

        return Promise.reject();
      }
    );
  };
};
