// import { delay } from "redux-saga";
import { put, takeEvery, delay } from "redux-saga/effects";

function* blacklistUserAsync() {
  yield delay(4000);
  yield put({ type: "BLACKLIST_USER_ASYNC" });
}

export function* watchBlacklistUser(id, data) {
  yield takeEvery("BLACKLIST_USER", blacklistUserAsync);
}
