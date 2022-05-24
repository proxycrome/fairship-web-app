import {
  FETCH_INSPECTIONS,
  FETCH_INSPECTIONS_SUCCESSFUL,
  FETCH_INSPECTIONS_ERROR,
  FETCH_EACH_INSPECTION,
  FETCH_EACH_INSPECTION_SUCCESSFUL,
  FETCH_EACH_INSPECTION_ERROR,
  POST_INSPECTION,
  POST_INSPECTION_SUCCESSFUL,
  POST_INSPECTION_FAILURE,
} from './actionTypes';

const initialState = {
  inspections: null,
  inspection: null,
  inspectionsError: null,
  loading: false,
  message: null,
  inspectionData: null,
};

const Inspections = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSPECTIONS:
    case POST_INSPECTION:
      state = {
        ...state,
        inspections: null,
        inspection: null,
        inspectionsError: null,
        message: null,
        loading: true,
      };
      break;
    case FETCH_INSPECTIONS_SUCCESSFUL:
      state = {
        ...state,
        inspections: action.payload,
        loading: false,
      };
      break;
    case FETCH_INSPECTIONS_ERROR:
      state = {
        ...state,
        loading: false,
        inspectionsError: action.payload,
      };
      break;
    case FETCH_EACH_INSPECTION:
      state = {
        ...state,
        inspection: null,
        inspectionsError: null,
        message: null,
        loading: true,
      };
      break;
    case FETCH_EACH_INSPECTION_SUCCESSFUL:
      state = {
        ...state,
        inspection: action.payload,
        loading: false,
      };
      break;
    case FETCH_EACH_INSPECTION_ERROR:
      state = {
        ...state,
        loading: false,
        message: null,
        inspectionsError: action.payload,
      };
      break;
    case POST_INSPECTION_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        inspection: action.payload,
        message: 'Inspection created Successfully',
        inspectionsError: null,
      };
      break;
    case POST_INSPECTION_FAILURE:
      state = {
        ...state,
        loading: false,
        inspectionData: null,
        inspectionsError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Inspections;
