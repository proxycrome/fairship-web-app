import {
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENT_SUCCESSFUL,
  FETCH_APPOINTMENT_ERROR,
  PUT_ACCEPT_APPOINTMENT,
  PUT_ACCEPT_APPOINTMENT_SUCCESS,
  PUT_ACCEPT_APPOINTMENT_ERROR,
  PUT_REJECT_APPOINTMENT,
  PUT_REJECT_APPOINTMENT_SUCCESS,
  PUT_REJECT_APPOINTMENT_ERROR,
  CLEAR_MESSAGES,
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

export const putAcceptAppointment = (payload) => {
  return {
    type: PUT_ACCEPT_APPOINTMENT,
    payload
  }
}

export const putAcceptAppointmentSuccess = (data) => {
  return {
    type: PUT_ACCEPT_APPOINTMENT_SUCCESS,
    payload: data
  }
}

export const putAcceptAppointmentError = (error) => {
  return {
    type: PUT_ACCEPT_APPOINTMENT_ERROR,
    payload: error
  }
}

export const putRejectAppointment = (payload) => {
  return {
    type: PUT_REJECT_APPOINTMENT,
    payload
  }
}

export const putRejectAppointmentSuccess = (data) => {
  return {
    type: PUT_REJECT_APPOINTMENT_SUCCESS,
    payload: data
  }
}

export const putRejectAppointmentError = (error) => {
  return {
    type: PUT_REJECT_APPOINTMENT_ERROR,
    payload: error
  }
}

export const clearAcceptAppointmentMessage = () => {
  return {
    type: CLEAR_MESSAGES,
  }
}