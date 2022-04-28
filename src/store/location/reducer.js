import {
  FETCH_COUNTRY,
  FETCH_COUNTRY_ERROR,
  FETCH_COUNTRY_SUCCESS,
  FETCH_LGA,
  FETCH_LGA_ERROR,
  FETCH_LGA_SUCCESS,
  FETCH_STATE,
  FETCH_STATE_ERROR,
  FETCH_STATE_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  countries: null,
  states: null,
  lgas: null,
  countriesError: null,
  statesError: null,
  lgasError: null,
};

const Location = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COUNTRY:
      state = {
        ...state,
        loading: true,
        countries: null,
        countriesError: null,
      };
      break;

    case FETCH_COUNTRY_SUCCESS:
      state = {
        ...state,
        loading: false,
        countries: payload,
        countriesError: null,
      };
      break;

    case FETCH_COUNTRY_ERROR:
      state = {
        ...state,
        loading: false,
        countries: null,
        countriesError: payload,
      };
      break;

    case FETCH_STATE:
      state = {
        ...state,
        loading: true,
        states: null,
        statesError: null,
      };
      break;

    case FETCH_STATE_SUCCESS:
      state = {
        ...state,
        loading: false,
        states: payload,
        statesError: null,
      };
      break;

    case FETCH_STATE_ERROR:
      state = {
        ...state,
        loading: false,
        states: null,
        statesError: payload,
      };
      break;

    case FETCH_LGA:
      state = {
        ...state,
        loading: true,
        lgas: null,
        lgasError: null,
      };
      break;

    case FETCH_LGA_SUCCESS:
      state = {
        ...state,
        loading: false,
        lgas: payload,
        lgasError: null,
      };
      break;

    case FETCH_LGA_ERROR:
      state = {
        ...state,
        loading: false,
        lgas: null,
        lgasError: payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Location;
