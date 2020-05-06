import * as axios from 'axios';
import { userAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'user/SET_USER_DATA';
const SET_NEW_PHONE = 'user/SET_NEW_PHONE';
const SET_NEW_PASS = 'user/SET_NEW_PASS';
const TOGGLE_IS_LOGIN_PROGRESS = 'user/TOGGLE_IS_LOGIN_PROGRESS';

let initialState = {
    phone: null,
    password: null,
    name: null,
    userId: null,
    status: null,
    isAuth: false,
    isLoginInProgress: false
};
// const initialState = [];

const userReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_USER_DATA:
            if (action.userData.resultCode == 0) {
                stateCopy = { ...state };
                // console.log(action.userData.data);
                if (action.userData.data.userId !== null) {
                    stateCopy.isAuth = true;
                } else {
                    stateCopy.isAuth = false;
                }
                
                stateCopy.isLoginInProgress = false;
                stateCopy.name = action.userData.data.User;
                stateCopy.userId = action.userData.data.userId;
                stateCopy.phone = action.userData.data.phone;
                stateCopy.password = action.userData.data.password;
                stateCopy.status = action.userData.data.status;
                // console.log('Auth OK!:'+stateCopy.isAuth);
                return stateCopy;
            } else {
                console.log(action.userData.error);
                return state;
            }
            

        case SET_NEW_PHONE:
            stateCopy = { ...state };
            stateCopy.phone = action.newPhone;
            return stateCopy;

        case SET_NEW_PASS:
            stateCopy = { ...state };
            stateCopy.password = action.newPass;
            return stateCopy;

        case TOGGLE_IS_LOGIN_PROGRESS:
            return { ...state, isLoginInProgress: action.isFetching }

        default:
            return state;
    }
}

export const togleLoginProgress = (isFetching) => ({ type: TOGGLE_IS_LOGIN_PROGRESS, isFetching });
export const setUser = (userData) => ({ type: SET_USER_DATA, userData });
export const onPhoneChange = (newPhone) => ({ type: SET_NEW_PHONE, newPhone });
export const onPassChange = (newPass) => ({ type: SET_NEW_PASS, newPass });
// export const setCategorysAC = (categorysObject) => ({type: SET_CATEGORYS, data: categorysObject});

//THUNKs:
export const getAuthMeThunkCreator = () => {
    return (dispatch) => {
        // dispatch(toggleIsFetching(isFetching: true)); // запускаем спинер
        userAPI.authMe().then(response => {
            // сохраняем ответ с сервера
            dispatch(setUser(response));
            // dispatch(toggleIsFetching(isFetching: true)); // stop спинер
        });
    }
}

export const getLoginThunkCreator = (phone, password, rememberMe) => {
    return (dispatch) => {
        // dispatch(togleLoginProgress(true)); // запускаем спинер
        userAPI.login(phone, password, rememberMe).then(response => {
            // console.log(response);
            // сохраняем ответ с сервера
            if (response.resultCode === 0) {
                dispatch(setUser(response));
            } else {
                let action = stopSubmit('login', {_error: response.messages[0]});
                dispatch(action);
            }
            
            // dispatch(togleLoginProgress(false)); // stop спинер
        });
    }
}
export const logout = () => {
    // console.log('logOut in reducer');
    return (dispatch) => {
        userAPI.logout().then(response => {
            // console.log(response);
            let data = {}
            data['data'] = {
                phone: null,
                password: null,
                name: null,
                userId: null,
                status: null,
                isAuth: false
            };
            data['resultCode'] = 0;
            dispatch(setUser(data));
        });
    }
}

export default userReducer;