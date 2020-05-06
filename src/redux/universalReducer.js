import {universalAPI} from './../api/api';
const UPDATE_FILD_VALUE = 'UPDATE_FILD_VALUE';

let initialState = {
    value: null
};

const universalReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_FILD_VALUE:
            console.log('UPDATE_FILD_VALUE');
            stateCopy = {...state};
            console.log(action.params.value);
            stateCopy.value = action.params.value;
            return stateCopy;


        default:
            return state;
    }
}

export const updateFieldValue = (params) => ({ type: UPDATE_FILD_VALUE,  params});

export const updateFieldRecord = (params) => {
    return (dispatch) =>{
        dispatch(updateFieldValue(params));
        universalAPI.updateFieldRecord(params).then(response => {
            // console.log('start dispatch!');
            // dispatch(updateFieldValue(params));
            // console.log('stop dispatch!');
        });
    }
}

export default universalReducer;