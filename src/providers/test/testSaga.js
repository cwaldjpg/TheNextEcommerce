import { takeEvery } from 'redux-saga/effects'

function* testSaga() {
  try {
    
  } catch (err) {
    console.log(err)
  }
}

export function* watchTestSaga() {
  yield takeEvery(testSaga())
}