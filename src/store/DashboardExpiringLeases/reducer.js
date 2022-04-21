import {
 FETCH_EXPIRING,
 FETCH_EXPIRING_SUCCESSFUL,
 FETCH_EXPIRING_ERROR,
 FETCH_EXPIRING_SIXTY,
 FETCH_EXPIRING_SUCCESSFUL_SIXTY,
 FETCH_EXPIRING_ERROR_SIXTY,
 FETCH_EXPIRING_ONETWENTY,
 FETCH_EXPIRING_SUCCESSFUL_ONETWENTY,
 FETCH_EXPIRING_ERROR_ONETWENTY
} from './actionTypes'

const initialState = {
    rent: null,
    error: null,
    sixty: null,
    errorsixty: null,
    twenty: null,
    errortwenty: null,
    loading: false
}

const fetchReducerExpiring = (state = initialState, action) => {
   switch(action.type) {
       case FETCH_EXPIRING:
           state = {
               ...state,
              rent: null,
              loading: true
           }
        case FETCH_EXPIRING_SUCCESSFUL : 
            state = {
                ...state,
                rent: action.payload,
                loading: false
            }
        case FETCH_EXPIRING_ERROR : 
             state = {
                 ...state,
                 error: action.payload,
                 loading: false
             } 
        case FETCH_EXPIRING_SIXTY:
                state = {
                    ...state,
                   sixty: null,
                   loading: true
                }
     
        case FETCH_EXPIRING_SUCCESSFUL_SIXTY : 
                 state = {
                     ...state,
                     sixty: action.payload,
                     loading: false
                 }
        case FETCH_EXPIRING_ERROR_SIXTY : 
                  state = {
                      ...state,
                      errorsixty: action.payload,
                      loading: false
                  }  
        case FETCH_EXPIRING_ONETWENTY:
            state = {
                ...state,
               twenty: null,
               loading: true
            }
        case FETCH_EXPIRING_SUCCESSFUL_ONETWENTY : 
             state = {
                 ...state,
                 twenty: action.payload,
                 loading: false
             }
        case FETCH_EXPIRING_ERROR_ONETWENTY : 
              state = {
                  ...state,
                  errortwenty: action.payload,
                  loading: false
              }  
        default:  
      state = {
          ...state
      }   
   }
       return state;
}

export default fetchReducerExpiring;