import {createSelector} from 'reselect';

export const getAuth = (state) => {
    return state.user.isAuth
}

export const getStatus = (state) => {
    return state.user.status
} 

// reselect: ///////////////////////////////////////
export const getSuperStatus = createSelector(getStatus, getAuth, 
    (users) => {
        return users.filter(u=>true);
    }
)
////////////////////////////////////////////////////