import {
  GET_ALL_NOTIFICATIONS,
  GET_ALL_NOTIFICATIONS_ERROR,
  GET_ALL_NOTIFICATIONS_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  notifications: null,
  notificationsError: null,
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATIONS:
      state = {
        ...state,
        loading: true,
      };
      break;

    case GET_ALL_NOTIFICATIONS_SUCCESS:
      state = {
        ...state,
        loading: false,
        notifications: action.payload,
        notificationsError: null,
      };
      break;

    case GET_ALL_NOTIFICATIONS_ERROR:
      state = {
        ...state,
        loading: false,
        notifications: null,
        notificationsError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default notification;