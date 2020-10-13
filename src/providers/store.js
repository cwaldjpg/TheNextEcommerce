import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga)
  return store
}

export default createWrapper(makeStore, {debug: true})