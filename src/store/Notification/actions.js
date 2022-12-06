import {
  GET_ALL_NOTIFICATIONS,
  GET_ALL_NOTIFICATIONS_ERROR,
  GET_ALL_NOTIFICATIONS_SUCCESS,
} from "./actionTypes";

export const getAllNotifications = () => {
  return {
    type: GET_ALL_NOTIFICATIONS,
  };
};

export const getAllNotificationsSuccess = (data) => {
  return {
    type: GET_ALL_NOTIFICATIONS_SUCCESS,
    payload: data,
  };
};

export const getAllNotificationsError = (error) => {
  return {
    type: GET_ALL_NOTIFICATIONS_ERROR,
    payload: error,
  };
};
