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
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_ERROR,
  GET_PROPERTY_SUBCATEGORY,
  GET_PROPERTY_SUBCATEGORY_SUCCESS,
  GET_PROPERTY_SUBCATEGORY_ERROR,
  PUT_UNIT_PROPERTY,
  CLEAR_MESSAGES,
} from './actionTypes';

const initialState = {
  properties: null,
  property: null,
  agents: null,
  message: null,
  createdProperty: [],
  propertiesError: null,
  createUnit: false,
  loading: false,
  propertyTypes: null,
  PropertyTypeError: null,
  propertySubcategories: null,
  subcategoryError: null,
};

const Properties = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      state = {
        ...state,
        properties: null,
        createUnit: false,
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
        createdProperty: [...state.createdProperty, action.payload],
        property: action.payload,
        message: 'Property Created Successfully',
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

    case GET_PROPERTY_TYPES:
      state = {
        ...state,
        loading: true,
        propertyTypes: null,
        PropertyTypeError: null
      };
    break;

    case GET_PROPERTY_TYPES_SUCCESS:
      state = {
        ...state,
        loading: false,
        propertyTypes: action.payload,
        PropertyTypeError: null
      };
    break;

    case GET_PROPERTY_TYPES_ERROR:
      state = {
        ...state,
        loading: false,
        propertyTypes: null,
        PropertyTypeError: action.payload
      };
    break;

    case GET_PROPERTY_SUBCATEGORY:
      state = {
        ...state,
        loading: true,
        propertySubcategories: null,
        subcategoryError: null
      }
    break;

    case GET_PROPERTY_SUBCATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        propertySubcategories: action.payload,
        subcategoryError: null
      }
    break;

    case GET_PROPERTY_SUBCATEGORY_ERROR:
      state = {
        ...state,
        loading: false,
        propertySubcategories: null,
        subcategoryError: action.payload
      }
    break;

    case PUT_UNIT_PROPERTY:
      state = {
        ...state,
        loading: true,
        message: null,
        propertiesError: null,
      }
      break;

    case CLEAR_MESSAGES:
      state = {
        ...state,
        message: null,
        propertiesError: null,
      }

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Properties;
