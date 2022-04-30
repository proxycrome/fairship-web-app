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
  UPDATE_UNIT,
  UPDATE_UNIT_SUCCESSFUL,
  UPDATE_UNIT_ERROR,
  DELETE_PROPERTY,
  DUPLICATE_UNIT_PROPERTY,
  DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_ERROR,
  DUPLICATE_UNIT_PROPERTY_ERROR,
  DUPLICATE_UNIT_PROPERTY_SUCCESS,
} from './actionTypes';

const initialState = {
  properties: null,
  property: null,
  agents: null,
  message: null,
  editMessage: null,
  createdProperty: [],
  propertiesError: null,
  createUnit: false,
  loading: false,
  typeLoading: false,
  propertyTypes: null,
  PropertyTypeError: null,
  propertySubcategories: null,
  subcategoryError: null,
  unitMessage: null, 
  deleteMessage: null,
  duppleData: null,
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
    case UPDATE_UNIT:
    case DELETE_PROPERTY:
    case DUPLICATE_UNIT_PROPERTY:
      state = {
        ...state,
        propertiesError: null,
        loading: true,
        message: null,
        editMessage: null,
        deleteMessage: null,
        duppleMessage: null,
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
    case UPDATE_UNIT_ERROR:
    case FETCH_PROPERTIES_ERROR:
    case FETCH_EACH_PROPERTIES_ERROR:
    case DELETE_PROPERTY_ERROR:
    case DUPLICATE_UNIT_PROPERTY_ERROR:
      state = {
        ...state,
        loading: false,
        property: null,
        unitMessage: null,
        deleteMessage: null,
        duppleData: null,
        propertiesError: action.payload.message,
      };
      break;

      case UPDATE_UNIT_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          unitMessage: action.payload,
          PropertyTypeError: null,
          editMessage: "Unit Updated Successfully"
        };
        break;

    case GET_PROPERTY_TYPES:
      state = {
        ...state,
        typeLoading: true,
        propertyTypes: null,
        PropertyTypeError: null,
      };
      break;

    case GET_PROPERTY_TYPES_SUCCESS:
      state = {
        ...state,
        typeLoading: false,
        propertyTypes: action.payload,
        PropertyTypeError: null,
      };
      break;

    case GET_PROPERTY_TYPES_ERROR:
      state = {
        ...state,
        typeLoading: false,
        propertyTypes: null,
        PropertyTypeError: action.payload,
      };
      break;

    case GET_PROPERTY_SUBCATEGORY:
      state = {
        ...state,
        typeLoading: true,
        propertySubcategories: null,
        subcategoryError: null,
      };
      break;

    case GET_PROPERTY_SUBCATEGORY_SUCCESS:
      state = {
        ...state,
        typeLoading: false,
        propertySubcategories: action.payload,
        subcategoryError: null,
      };
      break;

    case GET_PROPERTY_SUBCATEGORY_ERROR:
      state = {
        ...state,
        typeLoading: false,
        propertySubcategories: null,
        subcategoryError: action.payload,
      };
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
        editMessage: null,
        deleteMessage: null,
        duppleMessage: null,
      }
      break;

    case DELETE_PROPERTY_SUCCESS:
      state = {
        ...state,
        loading: false,
        deleteMessage: action.payload.message,
        propertiesError: null
      }
      break;

    case DUPLICATE_UNIT_PROPERTY_SUCCESS:
      state = {
        ...state,
        loading: false,
        duppleData: action.payload.message,
        propertiesError: null,
        message: 'Property Created Successfully',
        createdProperty: [...state.createdProperty, action.payload],
        createUnit: true,
      }
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Properties;
