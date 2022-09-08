import * as Actiontypes from './ActionTypes';

export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case Actiontypes.ADD_PROMOS:
            return { ...state, isLoading: false, errMess: null, promotions: action.payload }

        case Actiontypes.PROMOS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, promotions: [] }

        case Actiontypes.PROMOS_LOADING:
            return { ...state, isLoading: true, errMess: null, promotions: [] }

        default:
            return state;
    }
}