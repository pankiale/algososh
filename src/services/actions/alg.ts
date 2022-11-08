import {AppDispatch, AppThunk} from "../types";
import {TText} from "../types/data";
import {ElementStates} from "../types/element-states";

export const ALG_HAS_STARTED: "ALG_HAS_STARTED" = "ALG_HAS_STARTED";
export const ALG_HAS_STOPPED: "ALG_HAS_STOPPED" = "ALG_HAS_STOPPED";
export const GET_DATA_FOR_SORT: "GET_DATA_FOR_SORT" = "GET_DATA_FOR_SORT";
export const MOVE_ELEMENT: "MOVE_ELEMENT" = "MOVE_ELEMENT";
export const PAGE_LEFT: "PAGE_LEFT" = "PAGE_LEFT";
export const ADD_NUMBER: 'ADD_NUMBER' = 'ADD_NUMBER';
export const CLEAR_ARRAY: 'CLEAR_ARRAY' = 'CLEAR_ARRAY';

export interface IAlgHasStartedAction {
    readonly type: typeof ALG_HAS_STARTED;
}

export interface IAlgHasStoppedAction {
    readonly type: typeof ALG_HAS_STOPPED;
}

export interface IGetDataForSortAction {
    readonly type: typeof GET_DATA_FOR_SORT;
    text: TText[];
}

export interface IMoveElementAction {
    readonly type: typeof MOVE_ELEMENT;
    index: number;
    letter: string;
    status: ElementStates;
}

export interface IPageLeft {
    readonly type: typeof PAGE_LEFT;
}

export interface IAddNumberAction {
    readonly type: typeof ADD_NUMBER;
    number: number;
}

export interface IClearArrayAction {
    readonly type: typeof CLEAR_ARRAY;
    array: string;
}

export const algHasStartedAction = (): IAlgHasStartedAction => ({
    type: ALG_HAS_STARTED
});

export const algHasStoppedAction = (): IAlgHasStoppedAction => ({
    type: ALG_HAS_STOPPED
});

export const getDataForSortAction = (text: TText[]): IGetDataForSortAction => ({
    type: GET_DATA_FOR_SORT,
    text: text
});

export const pageLeftAction = (): IPageLeft => ({
    type: PAGE_LEFT
});

export const moveElementAction = (index: number, letter: string, status: ElementStates): IMoveElementAction => ({
    type: MOVE_ELEMENT,
    index: index,
    letter: letter,
    status: status
});

export const addNumberAction = (number: number): IAddNumberAction => ({
    type: ADD_NUMBER,
    number: number,
});

export const clearArrayAction = (array: string): IClearArrayAction => ({
    type: CLEAR_ARRAY,
    array: array,
});

export type TAuthActions =
    IGetDataForSortAction
    | IAlgHasStoppedAction
    | IAlgHasStartedAction
    | IMoveElementAction
    | IPageLeft
    | IAddNumberAction
    | IClearArrayAction;
