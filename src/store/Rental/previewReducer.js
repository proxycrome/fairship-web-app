  import {
    FETCH_RENTAL_RECOMMENDATION,
    FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
    FETCH_RENTAL_RECOMMENDATION_ERROR,
    PUT_TENANT_RECOMMENDATION,
    PUT_TENANT_RECOMMENDATION_SUCCESSFUL,
    PUT_TENANT_RECOMMENDATION_ERROR,
    PUT_DATA_RECOMMENDATION,
    PUT_DATA_RECOMMENDATION_SUCCESSFUL,
    PUT_DATA_RECOMMENDATION_ERROR
  } from './actionTypes';
  
  const initialState = {
    rentalId: {},
    rentalIdError: null,
    loading: false,
  };
  
  const RentalRecommendation = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RENTAL_RECOMMENDATION:
        state = {
          ...state,
          rentalId: {},
          rentalIdError: null,
          loading: true,
        };
        break;
      case FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL:
        state = {
          ...state,
          rentalId: action.payload,
          loading: false,
        };
        console.log(state.rentalId)
        break;
      case FETCH_RENTAL_RECOMMENDATION_ERROR:
        state = {
          ...state,
          loading: false,
          rentaldError: action.error,
        };
        break;

        case PUT_TENANT_RECOMMENDATION:
          state = {
            ...state,
            rentalId: {},
            rentalIdError: null,
            loading: true,
          };
          break;

        case PUT_TENANT_RECOMMENDATION_SUCCESSFUL:
          state = {
            ...state,
            rentalId: action.data,
            loadingId: false,
          };

          break;
        case PUT_TENANT_RECOMMENDATION_ERROR:
          state = {
            ...state,
            loading: false,
            rentaldError: action.error,
          };
          break;
         
          case PUT_DATA_RECOMMENDATION:
            state = {
              ...state,
              rentalIdError: null,
              loading: true,
            };
            break;
          case PUT_DATA_RECOMMENDATION_SUCCESSFUL:
            state = {
              ...state,
              rentalId: action.data,
              loadingId: false,
            };
  
            break;
          case PUT_DATA_RECOMMENDATION_ERROR:
            state = {
              ...state,
              loading: false,
              rentaldError: action.error,
            };
            break;  
  
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default RentalRecommendation;