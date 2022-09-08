import * as Actiontypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


// COMMENTS

export const commentsFailed = (errmess) => ({
    type: Actiontypes.COMMENTS_FAILED,
    payload: errmess

});

export const addComments = (comments) => ({
    type: Actiontypes.ADD_COMMENTS,
    payload: comments
});
export const addComment = (comment) => ({
    type: Actiontypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, comment, author) => (dispatch) => {                //redux thunk

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        }, error => {
            throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your comment couldnt be posted\nError: ' + error.message);
        })

}


export const fetchComments = () => (dispatch) => {                         //redux thunk
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })

        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));;
}


// DISHES

export const dishesLoading = () => ({
    type: Actiontypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: Actiontypes.DISHES_FAILED,
    payload: errmess

});

export const addDishes = (dishes) => ({
    type: Actiontypes.ADD_DISHES,
    payload: dishes
});

export const fetchDishes = () => (dispatch) => {                       //redux thunk
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}





// PROMOS

export const promosLoading = () => ({
    type: Actiontypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: Actiontypes.PROMOS_FAILED,
    payload: errmess

});

export const addPromos = (promos) => ({
    type: Actiontypes.ADD_PROMOS,
    payload: promos
});


export const fetchPromos = () => (dispatch) => {                           //redux thunk
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })

        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));;
}


// LEADERS

export const leadersLoading = () => ({
    type: Actiontypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: Actiontypes.LEADERS_FAILED,
    payload: errmess

});

export const addLeaders = (leaders) => ({
    type: Actiontypes.ADD_LEADERS,
    payload: leaders
});

export const fetchLeaders = () => (dispatch) => {                           //redux thunk
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })

        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));;
}
