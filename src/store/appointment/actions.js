import {
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENT_SUCCESSFUL,
  FETCH_APPOINTMENT_ERROR,
} from './actionTypes.js';

// Fetch appointment
export const fetchAppointment = () => {
  return {
    type: FETCH_APPOINTMENT,
  };
};

export const fetchAppointmentSuccessful = (message) => {
  return {
    type: FETCH_APPOINTMENT_SUCCESSFUL,
    payload: message,
  };
};

export const fetchAppointmentError = (error) => {
  return {
    type: FETCH_APPOINTMENT_ERROR,
    payload: error,
  };
};
