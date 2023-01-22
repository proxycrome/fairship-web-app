import {
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESSFUL,
    UPDATE_PROFILE_ERROR
} from './actionTypes'


const initialState = {
    loading : false,
    result : null,
    err : null
}


const updateProfileReducer = (state = initialState, action) => {
  switch(action.type) {
      case UPDATE_PROFILE :
          state = {
              ...state,
            loading: true,
            result: null,
            err: null
          };
       break; 
       
       case UPDATE_PROFILE_SUCCESSFUL:
           state = {
               ...state,
               loading: false,
               result:  action.payload,
           };
           break;

        case UPDATE_PROFILE_ERROR:
            state = {
                ...state,
                loading: false,
                err: action.payload
            } ;
            break;
            
         default:
             state ={
                 ...state
             } ; 
         break; 
  } 
  return state;
}

export default updateProfileReducer;