import { combineReducers } from 'redux';
import { algReducer } from "./alg";

export const rootReducer = combineReducers({
    alg: algReducer,
});