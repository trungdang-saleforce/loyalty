/*
*
@author tri.tran on 1/29/19
*
*/
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import {createLogger} from 'redux-logger'
import reducers from '../reducers'
import {reactNavigationMiddleware} from './ReactNavigationRedux'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
let store = null

//config Redux store with reducers and apply middleware (reactNavigationMiddleware for React Navigation, sagaMiddleware
// for saga, and logger for redux logger in DEV environment)
export default function configStore() {
    if (__DEV__)
        store = createStore(reducers, applyMiddleware(reactNavigationMiddleware, sagaMiddleware, logger))
    else
        store = createStore(reducers, applyMiddleware(reactNavigationMiddleware, sagaMiddleware))
    sagaMiddleware.run(sagas)
    return store
}