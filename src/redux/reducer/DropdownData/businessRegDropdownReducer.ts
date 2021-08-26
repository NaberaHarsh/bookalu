import { Reducer } from "redux";
import {IndustriesResponse, OccupationResponse, IndustriesType, OccupationType, createOccupationResponse, OccupationCreateType} from '../../action/DropdownData/dropdownTypes';


 const occupationInitialState: OccupationResponse = {
    loading: true,
    data: [],
    error: true,
  };

   const industriesInitialState: IndustriesResponse = {
    loading: true,
    data: [],
    error: true,
  };

const createOccupation:createOccupationResponse = {
  loading: true,
  data: [],
  error: true,
}
  
  export const occupationDropdownReducer : Reducer<OccupationResponse> = (
    state = occupationInitialState,
    action
  ) => {
    switch (action.type) {
      case OccupationType.FETCH_REQUEST: {
        return { ...state, loading: true };
      }
      case OccupationType.FETCH_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: action.data,
          error: false,
        };
      }
      case OccupationType.FETCH_ERROR: {
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: true,
        };
      }
      default: {
        return state;
      }
    }
  };

  export const industriesDropdownReducer : Reducer<IndustriesResponse> = (
    state = industriesInitialState,
    action
  ) => {
    switch (action.type) {
      case IndustriesType.FETCH_REQUEST: {
        return { ...state, loading: true };
      }
      case IndustriesType.FETCH_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: action.data.map((ele:any)=> ({ ...ele , name: ele.industryName  }) ),
          error: false,
        };
      }
      case IndustriesType.FETCH_ERROR: {
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: true,
        };
      }
      default: {
        return state;
      }
    }
  };


  export const createOccupationReducer : Reducer<createOccupationResponse> = (state =  createOccupation, action) => {
    switch (action.type) {
      case OccupationCreateType.FETCH_REQUEST: {
        return { ...state, loading: true };
      }
      case OccupationCreateType.FETCH_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: action.data,
          error: false,
        };
      }
      case OccupationCreateType.FETCH_ERROR: {
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: true,
        };
      }
      default: {
        return state;
      }
    }
  }