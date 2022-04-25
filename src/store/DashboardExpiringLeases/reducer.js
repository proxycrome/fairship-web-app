import {
 FETCH_EXPIRING,
 FETCH_EXPIRING_SUCCESSFUL,
 FETCH_EXPIRING_ERROR,
 FETCH_EXPIRING_SIXTY,
 FETCH_EXPIRING_SUCCESSFUL_SIXTY,
 FETCH_EXPIRING_ERROR_SIXTY,
 FETCH_EXPIRING_ONETWENTY,
 FETCH_EXPIRING_SUCCESSFUL_ONETWENTY,
 FETCH_EXPIRING_ERROR_ONETWENTY,
 FETCH_EXPIRING_ZERO,
 FETCH_EXPIRING_SUCCESSFUL_ZERO,
 FETCH_EXPIRING_ERROR_ZERO,
 FETCH_ALL_RENTAL,
 FETCH_ALL_RENTAL_SUCCESSFUL,
 FETCH_ALL_RENTAL_ERROR
} from './actionTypes'

const initialState = {
    rent: null,
    error: null,
    sixty: null,
    errorsixty: null,
    twenty: null,
    errortwenty: null,
    zero: null,
    errorzero: null,
    allrent: null,
    errorrent: null,
    loading: false
}

const fetchReducerExpiring = (state = initialState, action) => {
   switch(action.type) {
       case FETCH_EXPIRING:
           state = {
               ...state,
              rent: null,
              error: null,
              loading: true
           }
           break;
        case FETCH_EXPIRING_SUCCESSFUL : 
            state = {
                ...state,
                rent: action.payload,
                loading: false,
                error: null
            }
            break;
        case FETCH_EXPIRING_ERROR : 
             state = {
                 ...state,
                 error: action.payload,
                 loading: false
             }
             break; 
        case FETCH_EXPIRING_SIXTY:
                state = {
                    ...state,
                   sixty: null,
                   errorsixty: null,
                   loading: true
                }
                break;
        case FETCH_EXPIRING_SUCCESSFUL_SIXTY : 
                 state = {
                     ...state,
                     sixty: action.payload,
                     loading: false,
                     errorsixty: null
                 }
                 break;
        case FETCH_EXPIRING_ERROR_SIXTY : 
                  state = {
                      ...state,
                      errorsixty: action.payload,
                      loading: false
                  }  

                  break;
        case FETCH_EXPIRING_ONETWENTY:
            state = {
                ...state,
               twenty: null,
               errortwenty: null,
               loading: true
            }
            break;
        case FETCH_EXPIRING_SUCCESSFUL_ONETWENTY : 
             state = {
                 ...state,
                 twenty: action.payload,
                 loading: false,
                 errortwenty: null
             }
             break;
        case FETCH_EXPIRING_ERROR_ONETWENTY : 
              state = {
                  ...state,
                  errortwenty: action.payload,
                  loading: false
              } 
              break;
        case FETCH_EXPIRING_ZERO:
                state = {
                    ...state,
                   zero: null,
                   errorzero: null,
                   loading: true
                }
                break;
        case FETCH_EXPIRING_SUCCESSFUL_ZERO : 
                 state = {
                     ...state,
                     zero: action.payload,
                     loading: false,
                     errorzero: null
                 }
                 break;
        case FETCH_EXPIRING_ERROR_ZERO : 
                  state = {
                      ...state,
                      errorzero: action.payload,
                      loading: false
                  } 
                  break; 
         case FETCH_ALL_RENTAL:
                    state = {
                        ...state,
                       allrent: null,
                       errorrent: null,
                       loading: true
                    }
                    break;
        case FETCH_ALL_RENTAL_SUCCESSFUL : 
                     state = {
                         ...state,
                         allrent: action.payload,
                         loading: false,
                         errorrent: null
                     }
                     break;
        case FETCH_ALL_RENTAL_ERROR : 
                      state = {
                          ...state,
                          errorrent: action.payload,
                          loading: false
                      } 
        break;                  
        default:  
      state = {
          ...state
      } 
      break;  
   }
       return state;
}

export default fetchReducerExpiring;