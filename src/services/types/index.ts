import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import 'redux-thunk/extend-redux';
import {store} from "../store/store";
import {TAuthActions} from "../actions/alg";

type TApplicationActions = TAuthActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = Promise<any> | void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
    >;
