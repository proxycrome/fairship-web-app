import {
    FETCH_RENTAL,
    FETCH_RENTAL_SUCCESSFUL,
    FETCH_RENTAL_ERROR,
  } from './actionTypes';
  
  const initialState = {
    rental: [],
    rentalError: null,
    loading: false,
  };
  
  const Rental = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RENTAL:
        state = {
          ...state,
          rental: [],
          rentalError: null,
          loading: true,
        };
        break;
      case FETCH_RENTAL_SUCCESSFUL:
        state = {
          ...state,
          rental: action.payload,
          loading: false,
        };
        break;
      case FETCH_RENTAL_ERROR:
        state = {
          ...state,
          loading: false,
          rentalError: action.payload,
        };
        break;
  
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default Rental;



  