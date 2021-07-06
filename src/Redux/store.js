//reducer and devtool extension is passed in a store called create store 

import reducers from './Reducers/index'
import { createStore, applyMiddleware,compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {epics} from './Epic/epics'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const store=createStore(reducers,{},composeEnhancers(applyMiddleware(epicMiddleware)))
epicMiddleware.run(epics);
export default store;