
import * as Actiontypes from './ActionTypes';

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []

}, action) => {
    switch (action.type) {
        case Actiontypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] }

        case Actiontypes.ADD_LEADERS:
            return { ...state, isLoading: false, errMess: null, leaders: action.payload }

        case Actiontypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] }
        default:
            return state;
    }
}


