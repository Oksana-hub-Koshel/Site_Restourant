import * as Actiontypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []

}, action) => {
    switch (action.type) {
        case Actiontypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] }

        case Actiontypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload }

        case Actiontypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, dishes: [] }


        default:
            return state;
    }
}