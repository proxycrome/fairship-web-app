import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES_ERROR,
  FETCH_EACH_PROPERTIES,
  FETCH_EACH_PROPERTIES_SUCCESSFUL,
  FETCH_EACH_PROPERTIES_ERROR,
  CREATE_PROPERTIES,
  CREATE_PROPERTIES_SUCCESSFUL,
  CREATE_PROPERTIES_ERROR,
} from './actionTypes';

const initialState = {
  properties: null,
  property: null,
  agents: null,
  message: null,
  propertiesError: null,
  createUnit: false,
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
    case FETCH_EACH_PROPERTIES:
      state = {
        ...state,
        property: null,
        propertiesError: null,
        loading: true,
      };
      break;
    case FETCH_EACH_PROPERTIES_SUCCESSFUL:
      state = {
        ...state,
        property: action.payload,
        loading: false,
      };
      break;
    case CREATE_PROPERTIES:
      state = {
        ...state,
        propertiesError: null,
        loading: true,
        message: null,
      };
      break;
    case CREATE_PROPERTIES_SUCCESSFUL:
      state = {
        ...state,
        property: action.payload,
        message: 'Property Created Successufully',
        loading: false,
        createUnit: true,
      };
      break;
    case CREATE_PROPERTIES_ERROR:
    case FETCH_PROPERTIES_ERROR:
    case FETCH_EACH_PROPERTIES_ERROR:
      state = {
        ...state,
        loading: false,
        property: null,
        propertiesError: action.payload.message,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Properties;
