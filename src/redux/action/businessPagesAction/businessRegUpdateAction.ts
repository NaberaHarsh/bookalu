import {
  BusinessRegType,
  BusinessUpdateType,
  getBusinessDetails,
  GetCompanyInfo,
  UpdateCompanyInfo,
  GetContactDetails,
  UpdateContactDetails,
  GetCompanyInfoInterface,
  UpdateCompanyInfoInterface,
  GetSocialMediaFeeds,
  UpdateSocialMediaFeeds,
  GetSocialMediaFeedsInterface,
  UpdateSocialMediaFeedsInterface,
  UpdateContactDetailsInterface,
  UpdateOpeningTimesInterface,
  GetOpeningTimesInterface,
  GetOpeningTimes,
  UpdateOpeningTimes,
  GetOccupationInterface,
  UpdateOccupationInterface,
  GetOccupation,
  UpdateOccupation,
  GetIndustires,
  UpdateIndustriesInterface,
  UpdateIndustries,
  GetServices,
  UpdateServicesInterface,
  UpdateServices,
  DeleteServicesInterface,
  DeleteService,
  DeleteServiceTab,
  UpdateServiceTabs,
  BusinessPgDetailsType,
  GetBusinessPgDetails,
} from "./businessTypes";
import { Val as Payload } from "../../../components/Authentication/businessRegister/wizardInterface";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import instance from "../../../RouteHandler/axiosHandler";
import UserService from "../../../RouteHandler/axiosHandler/user.service";
import { COMMON_MESSAGE } from "../../../utils/constants/errorMessages";
// import { get_axios_call } from "../../../RouteHandler/AxiosAPI_call_boiler";
// import Axios from "axios";

/*  */

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

type BusinessPgDetailsThunk = ActionCreator<
  ThunkAction<void, GetBusinessPgDetails, null, Action<any>>
>;

export const getBusinessPgDetails: BusinessPgDetailsThunk = (
  payload: GetBusinessPgDetails
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: BusinessPgDetailsType.FETCH_REQUEST });
    
console.log("payload",payload)
    try {
      const response = await UserService.getRequest(
        `businessAccount/${payload && payload.username ? payload.username : ""}`
      );
      // console.log(JSON.stringify(response.data, undefined, 2));
      console.log(response.data);
      dispatch({
        type: BusinessPgDetailsType.FETCH_SUCCESS,
        data: response.data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : COMMON_MESSAGE;
      toast.error(message);
      dispatch({
        type: BusinessPgDetailsType.FETCH_ERROR,
        data: error.response,
      });
    }
  };
};

/* get company info for update  */

export type getCompanyInfoThunk = ActionCreator<
  ThunkAction<void, GetCompanyInfoInterface, null, Action<string>>
>;

export const getCompanyInfo: getCompanyInfoThunk = (
  payload: getCompanyInfoThunk
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GetCompanyInfo.FETCH_REQUEST });
    UserService.getRequest("BusinessAccount/CompanyInformation").then(
      (response) => {
        dispatch({
          type: GetCompanyInfo.FETCH_SUCCESS,
          data: response.data,
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
          type: GetCompanyInfo.FETCH_ERROR,
          data: error.response,
        });

        return Promise.reject();
      }
    );
  };
};

/* Update company Info also have update occupation and update Industries as well  */

export type updateCompanyInfoThunk = ActionCreator<
  ThunkAction<void, UpdateCompanyInfoInterface, null, Action<string>>
>;

export const updateCompanyInfo: updateCompanyInfoThunk = (
  payload: updateCompanyInfoThunk
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateCompanyInfo.FETCH_REQUEST });
    /* Need to pass the OBJ here ..  */

    UserService.patchRequest(
      "BusinessAccount/CompanyInformation",
      payload
    ).then(
      (response) => {
        toast.success(response.data.message);
        dispatch({
          type: UpdateCompanyInfo.FETCH_SUCCESS,
          data: response.data,
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
          type: UpdateCompanyInfo.FETCH_ERROR,
          data: error.response,
        });
        return Promise.reject();
      }
    );
  };
};

export type getSocialMediaHandlerThunk = ActionCreator<
  ThunkAction<void, GetSocialMediaFeedsInterface, null, Action<string>>
>;

export const getSocialMediaFeeds: getSocialMediaHandlerThunk = (
  payload: GetSocialMediaFeedsInterface
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GetSocialMediaFeeds.FETCH_REQUEST });

    UserService.getRequest("BusinessAccount/Socialmediafeed").then(
      (response) => {
        dispatch({
          type: GetSocialMediaFeeds.FETCH_SUCCESS,
          data: response.data,
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
          type: GetSocialMediaFeeds.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

export type updateSocialMediaHandlerThunk = ActionCreator<
  ThunkAction<void, UpdateSocialMediaFeedsInterface, null, Action<string>>
>;

export const updateSocialMediaHandler: updateSocialMediaHandlerThunk = (
  payload: UpdateSocialMediaFeedsInterface
) => {
  const obj: any = [];
  payload.socialmediafeed.map((val: any, ind: number) => {
    if (val.socialMediaType !== null) {
      obj.push({
        url: val.url,
        isselected: val.isselected,
        socialMediaType: val.socialMediaType,
      });
    }
  });

  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateSocialMediaFeeds.FETCH_REQUEST });

    UserService.patchRequest("BusinessAccount/Socialmediafeed", obj).then(
      (response) => {
        toast.success(response.data.message);
        dispatch({
          type: UpdateSocialMediaFeeds.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: UpdateSocialMediaFeeds.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

/* Update contact detetails AND OPENING TIMES API   */
export const getContactDetails: AppThunk = (payload: Payload) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GetContactDetails.FETCH_REQUEST });
    // /api/BusinessAccount/ContactDetailsOpeningTime
    UserService.getRequest("BusinessAccount/ContactDetailsOpeningTime").then(
      (response) => {
        dispatch({
          type: GetContactDetails.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: GetContactDetails.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

/* Update contact detetails AND OPENING TIMES API   */

type updateContactDetailsThunk = ActionCreator<
  ThunkAction<void, UpdateContactDetailsInterface, null, Action<string>>
>;
export const updateContactDetails: updateContactDetailsThunk = (
  payload: UpdateContactDetailsInterface
) => {
  console.log(payload);
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
  let homebusiness: any = [];
  let shop: any = [];
  let mobile: any = [];
  if (payload.data.selectedTab.home === "home") {
    obj.contactdetails.homebusiness = payload.data.contactdetails.homebusiness;
    payload.data.openingtimes.homebusiness.map((val: any, ind: number) => {
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
  }
  if (payload.data.selectedTab.shop === "shop") {
    obj.contactdetails.shop = payload.data.contactdetails.shop;
    payload.data.openingtimes.shop.map((val: any, ind: number) => {
      // console.log(;
      if (Number.isInteger(val.day)) {
        shop.push({
          day: val.day,
          starttime: val.starttime,
          endtime: val.endtime,
        });
      }
    });
    obj.openingtimes.shop = shop;
  }
  if (payload.data.selectedTab.mobile === "mobile") {
    obj.contactdetails.mobile = payload.data.contactdetails.mobile;
    payload.data.openingtimes.mobile.map((val: any, ind: number) => {
      // console.log(;
      if (Number.isInteger(val.day)) {
        mobile.push({
          day: val.day,
          starttime: val.starttime,
          endtime: val.endtime,
        });
      }
    });
    obj.openingtimes.mobile = mobile;
  }

  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateContactDetails.FETCH_REQUEST });
    UserService.putRequest(
      "BusinessAccount/ContactDetailsOpeningTime",
      obj
    ).then(
      (response) => {
        console.log(response.data.message);
        toast.success(response.data.message);
        dispatch({
          type: UpdateContactDetails.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: UpdateContactDetails.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

/* get and update Update Occupation  */

type getOccupationThunk = ActionCreator<
  ThunkAction<void, null, null, Action<string>>
>;
export const getOccupation: getOccupationThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GetOccupation.FETCH_REQUEST });

    UserService.getRequest("BusinessAccount/Occupations").then(
      (response) => {
        dispatch({
          type: GetOccupation.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: GetOccupation.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

type updateOccupationThunk = ActionCreator<
  ThunkAction<void, UpdateOccupationInterface, null, Action<string>>
>;
export const updateOccupation: updateOccupationThunk = (
  payload: UpdateOccupationInterface
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateOccupation.FETCH_REQUEST });

    UserService.patchRequest("BusinessAccount/Occupations", payload).then(
      (response) => {
        toast.success(response.data.message);
        dispatch({
          type: UpdateOccupation.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: UpdateOccupation.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

/* get and update Update Industries  */

type getIndustriesThunk = ActionCreator<
  ThunkAction<void, {}, null, Action<string>>
>;
export const getIndustries: getIndustriesThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GetIndustires.FETCH_REQUEST });

    UserService.getRequest("businessAccount/industries").then(
      (response) => {
        dispatch({
          type: GetIndustires.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: GetIndustires.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

type updateIndustriesThunk = ActionCreator<
  ThunkAction<void, UpdateIndustriesInterface, null, Action<string>>
>;
export const updateIndustries: updateIndustriesThunk = (
  payload: UpdateIndustriesInterface
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateIndustries.FETCH_REQUEST });

    UserService.patchRequest("businessAccount/industries", payload).then(
      (response) => {
        toast.success(response.data.message);
        dispatch({
          type: UpdateIndustries.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: UpdateIndustries.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

/* get and update SERVICES  */

type getServicesThunk = ActionCreator<
  ThunkAction<void, {}, null, Action<string>>
>;
export const getServices: getServicesThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GetServices.FETCH_REQUEST });

    UserService.getRequest("BusinessAccount/ServiceDetail").then(
      (response) => {
        dispatch({
          type: GetServices.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: GetServices.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

type updateServicesThunk = ActionCreator<
  ThunkAction<void, UpdateServicesInterface, null, Action<string>>
>;
export const updateServices: updateServicesThunk = (
  payload: UpdateServicesInterface
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateServices.FETCH_REQUEST });

    UserService.patchRequest("BusinessAccount/ServiceDetail", payload).then(
      (response) => {
        dispatch({
          type: UpdateServices.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: UpdateServices.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

type deleteServiceThunk = ActionCreator<
  ThunkAction<void, DeleteServicesInterface, null, Action<string>>
>;
export const deleteServiceAction: deleteServiceThunk = (
  payload: DeleteServicesInterface
) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: DeleteService.FETCH_REQUEST });
    // /api/BusinessAccount/DeleteService

    UserService.deleteRequest(
      `BusinessAccount/DeleteService/?ServiceItemId=${encodeURIComponent(
        payload.id
      )}`
    ).then(
      (response) => {
        dispatch({
          type: DeleteService.FETCH_SUCCESS,
          data: response.data,
        });
      },
      (error) => {
        dispatch({
          type: DeleteService.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};

type deleteServiceTabThunk = ActionCreator<
  ThunkAction<void, DeleteServicesInterface, null, Action<string>>
>;
export const deleteServiceTabAction: deleteServiceTabThunk = (
  payload: DeleteServicesInterface
) => {
  console.log(payload);
  return (dispatch: Dispatch) => {
    dispatch({ type: DeleteServiceTab.FETCH_REQUEST });

    UserService.deleteRequest(
      `BusinessAccount/DeleteTab/?MainServiceId=${encodeURIComponent(
        payload.id
      )}`
    ).then(
      (response) => {
        dispatch({
          type: DeleteServiceTab.FETCH_SUCCESS,
          data: response.data,
        });
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
          type: DeleteServiceTab.FETCH_ERROR,
          data: error.response,
        });
      }
    );
  };
};
type updateServiceTabsThunk = ActionCreator<
  ThunkAction<void, UpdateServicesInterface, null, Action<string>>
>;
export const updateServiceTabsAction: updateServiceTabsThunk = (
  payload: UpdateServicesInterface
) => {
  console.log(payload.data);

  let services: any = {
    tabOne: {
      heading: "",
      subservices: [],
    },
    tabTwo: {
      heading: "",
      subservices: [],
    },
    tabThree: {
      heading: "",
      subservices: [],
    },
  };

  if (payload.data.selectedTabs.tabOne) {
    services.tabOne.heading = payload.data.services.tabOne.heading;
    services.tabOne.id = payload.data.services.tabOne.id
      ? payload.data.services.tabOne.id
      : "";
    payload.data.services.tabOne.subservices.map((val: any, ind: number) => {
      let convertToMinutes = new Date(val.timereqquired).getTime();

      services.tabOne.subservices.push({
        appoinmentvia: val.appoinmentvia,
        haslinebreak: val.haslinebreak,
        name: val.name,
        price: val.price,
        timereqquired: convertToMinutes,
        SequenceKey: ind,
        tabItemId: val.tabItemId,
        appoinmentviastring: val.appoinmentviastring,
        id: val.id,
      });
    });
  }
  if (payload.data.selectedTabs.tabTwo) {
    services.tabTwo.heading = payload.data.services.tabTwo.heading;
    services.tabTwo.id = payload.data.services.tabTwo.id
      ? payload.data.services.tabTwo.id
      : "";
    payload.data.services.tabTwo.subservices.map((val: any, ind: number) => {
      let convertToMinutes = new Date(val.timereqquired).getTime();

      services.tabTwo.subservices.push({
        appoinmentvia: val.appoinmentvia,
        haslinebreak: val.haslinebreak,
        name: val.name,
        price: val.price,
        timereqquired: convertToMinutes,
        SequenceKey: ind,
        tabItemId: val.tabItemId,
        appoinmentviastring: val.appoinmentviastring,
        id: val.id,
      });
    });
  } else {
    services.tabTwo = null;
  }
  if (payload.data.selectedTabs.tabThree) {
    services.tabThree.heading = payload.data.services.tabThree.heading;
    services.tabThree.id = payload.data.services.tabThree.id
      ? payload.data.services.tabThree.id
      : "";
    payload.data.services.tabThree.subservices.map((val: any, ind: number) => {
      let convertToMinutes = new Date(val.timereqquired).getTime();

      services.tabThree.subservices.push({
        appoinmentvia: val.appoinmentvia,
        haslinebreak: val.haslinebreak,
        name: val.name,
        price: val.price,
        timereqquired: convertToMinutes,
        SequenceKey: ind,
        tabItemId: val.tabItemId,
        appoinmentviastring: val.appoinmentviastring,
        id: val.id,
      });
    });
  } else {
    services.tabThree = null;
  }

  return (dispatch: Dispatch) => {
    dispatch({ type: UpdateServiceTabs.FETCH_REQUEST });
    // /api/BusinessAccount/
    instance
      .put("/BusinessAccount/AddUpdateTab", services)
      .then((res) => {
        toast.success(res.data.message);
        dispatch({
          type: UpdateServiceTabs.FETCH_SUCCESS,
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: UpdateServiceTabs.FETCH_ERROR,
          data: err.response,
        });
      });
  };
};
