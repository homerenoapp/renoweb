import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from './ducks';
import createSagaMiddleware from 'redux-saga';
import { default as rootSaga } from './middleware/RootSaga';

export var dispatch;
export var getState;

export default function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  dispatch = store.dispatch;
  getState = store.getState();
  return store;
}
