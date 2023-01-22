import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { getAllNotificationsService } from "../../services/notificationService";
import {
  getAllNotificationsError,
  getAllNotificationsSuccess,
} from "./actions";
import { GET_ALL_NOTIFICATIONS } from "./actionTypes";

function* getAllNotifications() {
  try {
    const response = yield call(getAllNotificationsService);
    yield put(getAllNotificationsSuccess(response.data));
  } catch (error) {
    yield put(getAllNotificationsError(error?.response?.data));
  }
}

export function* watchGetAllNotifications() {
  yield takeEvery(GET_ALL_NOTIFICATIONS, getAllNotifications);
}


function* NotificationSaga() {
    yield all([
      fork(watchGetAllNotifications),
    ]);
  }
  
  export default NotificationSaga;