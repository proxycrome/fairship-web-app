import {
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENT_SUCCESSFUL,
  FETCH_APPOINTMENT_ERROR,
  PUT_ACCEPT_APPOINTMENT,
  PUT_REJECT_APPOINTMENT,
  PUT_ACCEPT_APPOINTMENT_SUCCESS,
  PUT_ACCEPT_APPOINTMENT_ERROR,
  PUT_REJECT_APPOINTMENT_SUCCESS,
  PUT_REJECT_APPOINTMENT_ERROR,
  CLEAR_MESSAGES,
} from './actionTypes';

const initialState = {
  appointment: null,
  appointmentError: null,
  loading: false,
  acceptMessage: null,
  rejectMessage: null,
  acceptError: null,
  rejectError: null
};

const Appointment = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENT:
      state = {
        ...state,
        appointment: null,
        appointmentError: null,
        loading: true,
      };
      break;
    case FETCH_APPOINTMENT_SUCCESSFUL:
      state = {
        ...state,
        appointment: action.payload,
        loading: false,
      };
      break;
    case FETCH_APPOINTMENT_ERROR:
      state = {
        ...state,
        loading: false,
        appointmentError: action.payload,
      };
      break;

    case PUT_ACCEPT_APPOINTMENT:
    case PUT_REJECT_APPOINTMENT:
      state = {
        ...state,
        loading: true,
        acceptMessage: null,
        rejectMessage: null,
        acceptError: null,
        rejectError: null
      }
      break;

    case PUT_ACCEPT_APPOINTMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        acceptMessage: action.payload,
        acceptError: null,
      }
      break;

    case PUT_ACCEPT_APPOINTMENT_ERROR:
      state = {
        ...state,
        loading: false,
        acceptMessage: null,
        acceptError: action.payload,
      }
      break;

    case PUT_REJECT_APPOINTMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        rejectMessage: action.payload,
        rejectError: null,
      }
      break;

    case PUT_REJECT_APPOINTMENT_ERROR:
      state = {
        ...state,
        loading: false,
        rejectMessage: null,
        rejectError: action.payload,
      }
      break;

    case CLEAR_MESSAGES: 
      state = {
        ...state,
        rejectMessage: null,
        rejectError: null,
        acceptError: null,
        acceptMessage: null
      }
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Appointment;
