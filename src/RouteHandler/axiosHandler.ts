import axios from 'axios';
import store from '../redux/store';
import { API_BASE_URL } from '../utils/baseUrl';

// if(store.getState().loginReducer.data.isLoginSuccess) axios.defaults.headers.common['authToken'] =store.getState().loginReducer.data.idToken;

const instance = axios.create({
    baseURL: API_BASE_URL
  });
  
  // Alter defaults after instance has been created
  if(store.getState().loginReducer.data) instance.defaults.headers.common['authToken'] = store.getState().loginReducer.data.idToken;
  
  // export function setUser(token) {
  //   if (token) {
  //     axios.defaults.headers.common['authToken'] = ``;
  //    } else {
  //     delete axios.defaults.headers.common['Authorization'];
  //    }
  // }

  export default instance