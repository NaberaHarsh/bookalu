import { HttpStatusCode } from "./HttpStatusCode";
import { IDictionary } from "./IDictionary";
import { businessPage } from "./response/businessPageResponse";
import { industries } from "./response/industriesResponse";
import { occupations } from "./response/occupationResponse";

interface IMockAPICall {
    httpStatus: HttpStatusCode;
    method: 'onGet' | 'onPost';
    params: any;
    response: any;
}


export const aProgram:IDictionary<IMockAPICall> = {
   
    '/Occupation': {
        httpStatus: HttpStatusCode.Ok,
        method: 'onGet',
        params: null,
        response: occupations,
    },
    '/Industry': {
        httpStatus: HttpStatusCode.Ok,
        method: 'onGet',
        params: null,
        response: industries,
    },
    'BusinessAccount/businessdetails':{
        httpStatus:HttpStatusCode.Ok,
        method:'onGet',
        params:null,
        response:businessPage
    }
    //#endregion

    //#region Modules
    // '/v1/program-content/modules/--aModule--': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onGet',
    //     params: null,
    //     response: aModule,
    // },
    // //#endregion

    // //#region Experts
    // '/v1/program-content/experts/--anExpert--': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onGet',
    //     params: null,
    //     response: anExpert,
    // },
    // '/v1/program-content/experts/--anotherExpert--': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onGet',
    //     params: null,
    //     response: anotherExpert,
    // },
    //#endregion

    // //#region Sources
    // '/v1/program-content/sources/--aSource--': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onGet',
    //     params: null,
    //     response: aSource,
    // },
    // //#endregion

    // //#region Billing-management
    // '/v1/payment-management/payments/create-checkout-session': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onPost',
    //     params: null,
    //     response: aCheckoutSession,
    // },
    // '/v1/payment-management/payments/customer-portal': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onPost',
    //     params: null,
    //     response: aCustomerPortal,
    // },
    // '/v1/payment-management/billings/--aBillingId--': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onGet',
    //     params: null,
    //     response: aBilling,
    // },
};