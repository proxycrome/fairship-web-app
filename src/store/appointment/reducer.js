import {
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENT_SUCCESSFUL,
  FETCH_APPOINTMENT_ERROR,
} from './actionTypes';

const initialState = {
  appointment: null,
  appointmentError: null,
  loading: false,
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

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Appointment;
