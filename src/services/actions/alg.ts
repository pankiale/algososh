import {AppDispatch, AppThunk} from "../types";
import {TText} from "../types/data";
import {ElementStates} from "../types/element-states";

export const ALG_HAS_STARTED: "ALG_HAS_STARTED" = "ALG_HAS_STARTED";
export const ALG_HAS_STOPPED: "ALG_HAS_STOPPED" = "ALG_HAS_STOPPED";
export const GET_DATA_FOR_SORT: "GET_DATA_FOR_SORT" = "GET_DATA_FOR_SORT";
export const MOVE_ELEMENT: "MOVE_ELEMENT" = "MOVE_ELEMENT";

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

export const moveElementAction = (index: number, letter: string, status: ElementStates): IMoveElementAction => ({
    type: MOVE_ELEMENT,
    index: index,
    letter: letter,
    status: status
});

export type TAuthActions =
    IGetDataForSortAction
    | IAlgHasStoppedAction
    | IAlgHasStartedAction
    | IMoveElementAction;
