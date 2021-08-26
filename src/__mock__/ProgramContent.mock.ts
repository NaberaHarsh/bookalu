import { IDictionary } from './models/IDictionary';
import {HttpStatusCode} from "./models/HttpStatusCode";
import {userdetails} from './APIResponse/updateuserdetails'

interface IMockAPICall {
    httpStatus: HttpStatusCode;
    method: 'onGet' | 'onPost';
    params: any;
    response: any;
}

// TODO: render les `keys` dynamique avec l'import du bon mock.
export const ProgramContentMock: IDictionary<IMockAPICall> = {
    //#region Modules
    'UserAccount': {
        httpStatus: HttpStatusCode.Ok,
        method: 'onGet',
        params: null,
        response: userdetails,
    },
    // '/v1/program-content/programs/--aProgram--': {
    //     httpStatus: HttpStatusCode.Ok,
    //     method: 'onGet',
    //     params: null,
    //     response: aProgram,
    // },
    // //#endregion

    // //#region Modules
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
    // //#endregion

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
    // //#endregion
};
