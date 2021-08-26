import axios from "axios";
import { authHeader } from "./auth-header";

import { API_BASE_URL, NEW_API_BASE_URL } from "../../utils/baseUrl";

class UserService {
  getRequest(base_url: string) {
    return axios.get(`${NEW_API_BASE_URL}/${base_url}`, { headers: authHeader() });
  }

  patchRequest(base_url: string, body: any) {
    return axios.patch(`${NEW_API_BASE_URL}/${base_url}`, body, {
      headers: authHeader(),
    });
  }
  postRequest(base_url: string, body: any) {
    return axios.post(`${NEW_API_BASE_URL}/${base_url}`, body, {
      headers: authHeader(),
    });
  }
  putRequest(base_url: string, body: any) {
    return axios.put(`${API_BASE_URL}/${base_url}`, body, {
      headers: authHeader(),
    });
  }

  deleteRequest(base_url: string) {
    return axios.delete(`${API_BASE_URL}/${base_url}`, {
      headers: authHeader(),
    });
  }

  getRequestUnProtected(base_url: string) {
    return axios.get(`${API_BASE_URL}/${base_url}`);
  }

  postRequestUnProtected(base_url: string, body: any) {
    return axios.post(`${API_BASE_URL}/${base_url}`, body);
  }
}

export default new UserService();
