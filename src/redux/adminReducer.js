import { adminAPI } from './../api/api';

const SET_HANDLE_SELECT = 'SET_HANDLE_SELECT';
const SET_PRODUCT_TYPES = 'SET_PRODUCT_TYPES';
const ADD_NEW_PRODUCT_TYPE = 'ADD_NEW_PRODUCT_TYPE';
const RERENDER_COMPONENT = 'RERENDER_COMPONENT';
const SET_PROCESS = 'SET_PROCESS';
const SET_SETTINGS = 'SET_SETTINGS';
const TAB_IS_LOADED = 'TAB_IS_LOADED';
const SET_PROCESS_COUNT = 'SET_PROCESS_COUNT';
const SET_CURRENT_PROCESS_PAGE = 'SET_CURRENT_PROCESS_PAGE';

let initialState = {
    handleSelect: null,
    contentList: [],
    content: null,
    process: [],
    processData: {
        pageSize: 10, // количество процессов на стронице
        totalProcessCount: null, // общее количество процессов
        currentPage: 1 // текущая страница
    },
    settings: []
};

const adminReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_CURRENT_PROCESS_PAGE:
            // console.log('SET_CURRENT_PROCESS_PAGE: '+action.currentProcessPage);
            stateCopy = { ...state };
            stateCopy.processData.currentPage = action.currentProcessPage;
            // Очищаем список загруженных страниц для перезагрузки
            stateCopy.contentList = stateCopy.contentList.filter(item => item !== 'process');
            // console.log(state.processData.currentPage)
            // console.log(state.processData.totalProcessCount)
            // getProcessList(state.processData.currentPage, state.processData.totalProcessCount);
            return stateCopy

        case SET_PROCESS_COUNT:
            stateCopy = { ...state };
            stateCopy.processData.totalProcessCount = action.processCount;
            return stateCopy;

        case TAB_IS_LOADED: 
            stateCopy = { ...state };
            stateCopy.contentList.push(stateCopy.handleSelect);

            return stateCopy;

        case SET_HANDLE_SELECT:
            stateCopy = { ...state };
            stateCopy.handleSelect = action.eventKey;

            // if (!stateCopy.contentList.includes(action.eventKey)) {
            //     console.log(action.eventKey);
            //     getPageThunkCreator(action.eventKey);
            // }
            
            return stateCopy;

        case SET_PRODUCT_TYPES:
            stateCopy = { ...state };
            stateCopy.content = action.data.data;
            return stateCopy;

        case SET_PROCESS:
            stateCopy = { ...state };
            stateCopy.process = action.data.data;
            return stateCopy;

        case SET_SETTINGS:
            stateCopy = { ...state };
            stateCopy.settings = action.data.data;
            return stateCopy;

        case RERENDER_COMPONENT:
            stateCopy = { ...state };
            console.log(action.componentName);
            stateCopy.contentList = stateCopy.contentList.filter(item => item !== action.componentName);
            return stateCopy;

        case ADD_NEW_PRODUCT_TYPE:
            stateCopy = { ...state };
            // stateCopy.contentList

            // let value = 'mainCatalog'
            // let arr = [1, 2, 3, 4, 5, 3]
            stateCopy.contentList = stateCopy.contentList.filter(item => item !== 'mainCatalog');
            console.log(stateCopy)

            return stateCopy;

        default:
            return state;
    }
}

export const setHandleSelect = (eventKey) => ({ type: SET_HANDLE_SELECT, eventKey });
export const setProductTypes = (data) => ({ type: SET_PRODUCT_TYPES, data });
export const addNewProductType = () => ({type: ADD_NEW_PRODUCT_TYPE});
export const reRenderComponent = (componentName) => ({type: RERENDER_COMPONENT, componentName});
export const setProcess = (data) => ({ type: SET_PROCESS, data });
export const setSettings = (data) => ({ type: SET_SETTINGS, data });
export const tabIsLoaded = () => ({type: TAB_IS_LOADED})
const setPocessCount = (processCount) => ({type: SET_PROCESS_COUNT, processCount});
export const setCurrentProcessPage = (currentProcessPage) => ({type: SET_CURRENT_PROCESS_PAGE, currentProcessPage})


export const getProductTypeList = () => {
    return (dispatch) => {
        // dispatch(togleLoginProgress(true)); // запускаем спинер
        adminAPI.getProductTypeList().then(response => {
            console.log(response);
            // сохраняем ответ с сервера
            dispatch(setProductTypes(response));
            // dispatch(togleLoginProgress(false)); // stop спинер
        });
    }
}

export const crateNewProductType = (data) => {
    return (dispatch) =>{
        adminAPI.crateNewProductType(data).then(response => {
            // Добавить обновление страници
            dispatch(addNewProductType());
            dispatch(addNewProductType());
        });
    }
}

export const deleteProductType = (id) => {
    console.log('deleteProductType')
    return (dispatch) =>{
        adminAPI.deleteProductType(id).then(response => {
            dispatch(addNewProductType());
        });
    }
}

export const loadProductTypeItemList = (id, type) => {
    return (dispatch) =>{
        adminAPI.loadProductTypeItemList(id, type).then(response => {
            dispatch(addNewProductType());
        });
    }
}

export const getProcessList = (currentPage, totalCount) => {
    console.log('processData start')
    return (dispatch) =>{
        adminAPI.getProcessList(currentPage, totalCount).then(response => {
            dispatch(setProcess(response));
            // console.log(response.processCount)
            dispatch(setPocessCount(response.processCount));
            dispatch(tabIsLoaded());
        });
    }
}

export const getSettingsList = () => {
    return (dispatch) =>{
        adminAPI.getSettingsList().then(response => {
            dispatch(setSettings(response));
            // dispatch(reRenderComponent("settings"));
        });
    }
}


export default adminReducer;