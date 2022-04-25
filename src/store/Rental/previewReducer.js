  import {
    FETCH_RENTAL_RECOMMENDATION,
    FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
    FETCH_RENTAL_RECOMMENDATION_ERROR,
    PUT_TENANT_RECOMMENDATION,
    PUT_TENANT_RECOMMENDATION_SUCCESSFUL,
    PUT_TENANT_RECOMMENDATION_ERROR,
    PUT_DATA_RECOMMENDATION,
    PUT_DATA_RECOMMENDATION_SUCCESSFUL,
    PUT_DATA_RECOMMENDATION_ERROR,
    DILIGENCE_RECOMMENDATION,
    DILIGENCE_RECOMMENDATION_SUCCESSFUL,
    DILIGENCE_RECOMMENDATION_ERROR
  } from './actionTypes';
  
  const initialState = {
    rentalId: {},
    data: {},
    errordata:null,
    put: {},
    errorput: null,
    dilligence:{},
    errordilligence: null,
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
          rentalIdError: null,
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
            data: {},
            errordata: null,
            loading: true,
          };
          break;

        case PUT_TENANT_RECOMMENDATION_SUCCESSFUL:
          state = {
            ...state,
            data: action.data,
            errordata: null,
            loading: false,
          };

          break;
        case PUT_TENANT_RECOMMENDATION_ERROR:
          state = {
            ...state,
            loading: false,
            errordata: action.error,
          };
          break;
         
          case PUT_DATA_RECOMMENDATION:
            state = {
              ...state,
              put: {},
              errorput: null,
              loading: true,
            };
            break;
          case PUT_DATA_RECOMMENDATION_SUCCESSFUL:
            state = {
              ...state,
              put: action.data,
              errorput: null,
              loading: false,
            };
  
            break;
          case PUT_DATA_RECOMMENDATION_ERROR:
            state = {
              ...state,
              loading: false,
              errorput: action.error,
            };
            break;  
            case DILIGENCE_RECOMMENDATION:
              state = {
                ...state,
                diligence: {},
                errordilligence: null,
                loading: true,
              };
              break;
            case DILIGENCE_RECOMMENDATION_SUCCESSFUL:
              state = {
                ...state,
                diligence: action.data,
                loading: false,
              };
    
              break;
            case DILIGENCE_RECOMMENDATION_ERROR:
              state = {
                ...state,
                loading: false,
                errordilligence: action.error,
              };
              break;    
       default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default RentalRecommendation;