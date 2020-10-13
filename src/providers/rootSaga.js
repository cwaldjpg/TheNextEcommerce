import { call, all } from 'redux-saga/effects'

import { watchTestSaga } from './test/testSaga'

export default function* rootSaga() {
  yield all([call(watchTestSaga)])
}