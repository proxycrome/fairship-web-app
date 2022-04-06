import {
    FETCH_RENTAL,
    FETCH_RENTAL_SUCCESSFUL,
    FETCH_RENTAL_ERROR,
    FETCH_RENTAL2,
    FETCH_RENTAL_SUCCESSFUL2,
    FETCH_RENTAL_ERROR2,
    FETCH_RENTAL3,
    FETCH_RENTAL_SUCCESSFUL3,
    FETCH_RENTAL_ERROR3
  } from './actionTypes';
  
  const initialState = {
    rental: null,
    rental2: null,
    rental3: null,
    rentalError: null,
    rentalError2: null,
    rentalError3: null,
    loading: false,
  };
  
  const Rental = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RENTAL:
        state = {
          ...state,
          rental: null,
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
        console.log(state.rental)
        break;
      case FETCH_RENTAL_ERROR:
        state = {
          ...state,
          loading: false,
          rentalError: action.payload,
        };
        break;
        case FETCH_RENTAL2:
          state = {
            ...state,
            rental2: null,
            rentalError2: null,
            loading: true,
          };          
          break;
        case FETCH_RENTAL_SUCCESSFUL2 :
          state = {
            ...state,
            rental2: action.payload,
            loading: false,
          };
          break;
         case FETCH_RENTAL_ERROR2:
          state = {
            ...state,
            loading: false,
            rentalError2: action.payload,
          };
          break;  
          case FETCH_RENTAL3:
            state = {
              ...state,
              rental3: null,
              rentalError3: null,
              loading: true,
            };
            break;
          case FETCH_RENTAL_SUCCESSFUL3:
            state = {
              ...state,
              rental3: action.payload,
              loading: false,
            };
            console.log(state.rental3)
            break;
          case FETCH_RENTAL_ERROR3:
            state = {
              ...state,
              loading: false,
              rentalError3: action.payload,
            };
            break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default Rental;



  