import axios from "axios";
import { API_BASE_URL , NEW_API_BASE_URL} from "../../utils/baseUrl";
import { loginMockResponse } from "../mock/login";
import { aProgram } from "../mock/ProgramsMock";
import { authHeader } from "./auth-header";
var MockAdapter = require("axios-mock-adapter");

if (process.env.REACT_APP_MOCK === "true") var mock = new MockAdapter(axios);

// function seconds_with_leading_zeros()
// {
//   return /\((.*)\)/.exec(new Date().toString())[1];
// }

class AuthService {
  login(body: any, base_url: string) {
    /* prettier-ignore */
    if (process.env.REACT_APP_MOCK === "true") {
      mock.onPost(`${NEW_API_BASE_URL}/${base_url}`, body).reply(200, {
        data: loginMockResponse,
      });
    }

    return axios.post(`${NEW_API_BASE_URL}/${base_url}`, body).then((response) => {
      console.log(response);
      if (response.data.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(response.data.data));
      }

      return response.data;
    });
  }

  register(body: any, base_url: string) {
    // body.defaultTimeZone = /\((.*)\)/.exec(new Date().toString())[1];
    body.defaultTimeZone = "India Standard Time";
    // India Standard Time
    return axios.post(`${NEW_API_BASE_URL}/${base_url}`, body);
  }

  updateTokenRequest(body: any, base_url: string) {
    const header = authHeader();
    header["content-type"] = "application/x-www-form-urlencoded";
    return axios
      .post(`${NEW_API_BASE_URL}/${base_url}`, body, { headers: header })
      .then((response) => {
        if (response.data.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  /* TESTING  MOCK DATA */
  // getRequestMock(base_url: string) {
  //   mock.onGet(`${API_BASE_URL}/${base_url}`).reply(200, {
  //     users: aProgram,
  //   });
  //   return axios.get(`${API_BASE_URL}/${base_url}`);
  // }
}

// if (process.env.REACT_APP_MOCK) {
//   const mock = new MockAdapter(axios);
//   console.log(mock);
//   for (const [key, { method, response }] of Object.entries(ProgramContentMock)) {
//       mock[method](key).reply(200, response);
//   }

//   mock.onAny().passThrough();
// }

export default new AuthService();
