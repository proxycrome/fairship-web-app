  import {
    FETCH_RENTAL_RECOMMENDATION,
    FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
    FETCH_RENTAL_RECOMMENDATION_ERROR,
    PUT_TENANT_RECOMMENDATION,
    PUT_TENANT_RECOMMENDATION_SUCCESSFUL,
    PUT_TENANT_RECOMMENDATION_ERROR
  } from './actionTypes';
  
  const initialState1 = {
    rentalId: null,
    rentalIdError: null,
    loading: false,
  };
  
  const RentalRecommendation = (state = initialState1, action) => {
    switch (action.type) {
      case FETCH_RENTAL_RECOMMENDATION:
        state = {
          ...state,
          rentalId: null,
          rentalIdError: null,
          loading: true,
        };
        break;
      case FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL:
        state = {
          ...state,
          rentalId: action.data.rentalId,
          loadingId: false,
        };
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
            rentalId: null,
            rentalIdError: null,
            loading: true,
          };
          break;
        case PUT_TENANT_RECOMMENDATION_SUCCESSFUL:
          state = {
            ...state,
            rentalId: action.data.rentalId,
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
  
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default RentalRecommendation;