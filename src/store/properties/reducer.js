import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES_ERROR,
  CREATE_PROPERTIES,
  CREATE_PROPERTIES_SUCCESSFUL,
  CREATE_PROPERTIES_ERROR,
} from './actionTypes';

const initialState = {
  properties: null,
  agents: null,
  propertiesError: null,
  loading: false,
};

const Properties = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      state = {
        ...state,
        properties: null,
        propertiesError: null,
        loading: true,
      };
      break;
    case FETCH_PROPERTIES_SUCCESSFUL:
      state = {
        ...state,
        properties: action.payload,
        loading: false,
      };
      break;
    case CREATE_PROPERTIES:
      state = {
        ...state,
        properties: null,
        propertiesError: null,
        loading: true,
      };
      break;
    case CREATE_PROPERTIES_SUCCESSFUL:
      state = {
        ...state,
        properties: action.payload,
        loading: false,
      };
      break;
    case CREATE_PROPERTIES_ERROR:
    case FETCH_PROPERTIES_ERROR:
      state = {
        ...state,
        loading: false,
        propertiesError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Properties;
