import {
    ADD_NUMBER,
    ALG_HAS_STARTED,
    ALG_HAS_STOPPED,
    CLEAR_ARRAY,
    GET_DATA_FOR_SORT,
    MOVE_ELEMENT,
    PAGE_LEFT,
    TAuthActions
} from "../actions/alg";
import {TText} from "../types/data";

export type TAuthState = {
    text: TText[] | [],
    number: number[],
    isLoader: boolean,
    isFinished: boolean
};

const initialState = {
    text: [],
    number: [],
    isLoader: false,
    isFinished: false
};

export const algReducer = (state:TAuthState = initialState, action: TAuthActions):TAuthState => {
    switch (action.type) {
        case ALG_HAS_STARTED: {
            return {
                ...state,
                isLoader: true
            };
        }
        case ALG_HAS_STOPPED: {
            return {
                ...state,
                isLoader: false,
                isFinished: true
            };
        }
        case GET_DATA_FOR_SORT: {
            return { ...state, text: action.text };
        }
        case PAGE_LEFT: {
            return { ...state, isFinished: false, text: [], number: [] };
        }
        case MOVE_ELEMENT: {
            return {...state, text: [...state.text].map((item, index)=>
                index === action.index? {letter: action.letter, state: action.status}:item )
            }
        }
        case ADD_NUMBER: {
            return {...state, number: [...state.number, action.number ]
            }
        }

        case CLEAR_ARRAY: {
            return {...state, [action.array]: []
            }
        }

        default: {
            return state;
        }
    }
};