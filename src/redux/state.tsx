import {Action, applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunkMiddlewear, { ThunkAction } from 'redux-thunk';
import { reducer } from './reducer';


export type InferActionsTypes<T> = T extends {[key: string]: (...arg: any[]) => infer U} ? U : never;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
type ReducerType = typeof reducer;
export type AppStateType = ReturnType<ReducerType>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducer, composeEnhancers(applyMiddleware(thunkMiddlewear)));
export default store;
