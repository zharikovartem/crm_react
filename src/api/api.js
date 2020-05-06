import * as axios from 'axios';

//http://www.artcrm.h1n.ru/api/auth/me
const instanse = axios.create({
    withCredentials: true,
    baseURL: 'http://www.artcrm.h1n.ru/api/',
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

export const userAPI = {
    authMe() {
        return instanse.get('auth/me')
            .then(response => {
                // console.log(response);
                return response.data
            });
    },
    logout() {
        // console.log('start api');
        return instanse.get('auth/logout')
            .then(response => {
                // console.log(response);
                return response;
            });
    },
    login(phone, password, rememberMe) {
        let data = { phone, password , rememberMe};
        // console.log(data);
        return instanse.post('auth/login', data).then(response => {
            return response.data
        });
    }
}

export const adminAPI = {
    getProcessList(currentPage, totalCount) {
        return instanse.get('process/getList?page='+currentPage+'&count='+totalCount)
            .then(response => {
                console.log(response)
                return response.data
            });
    },

    getProductTypeList() {
        // console.log('start adminAPI-> getPage('+page+')');
        return instanse.get('product/types')
            .then(response => {
                return response.data
            });
    },
    crateNewProductType(data) {
        return instanse.post('product/createType', data)
            .then(response => {
                // console.log(response);
                return response;
            });
    },
    deleteProductType(id) {
        // console.log('deleteProductType');
        return instanse.post('product/deleteType', id)
            .then(response => {
                return response;
            });
    },
    loadProductTypeItemList(id, type, rememberMe) {
        const data = {id:id, type:type}
        return instanse.post('product/createTaskToProductTypeItem', data)
            .then(response => {
                // console.log(response);
                // console.log(id);
                return response;
            });
    },
    getSettingsList() {
        return instanse.get('settings/getSettingsList')
            .then(response => {
                // console.log(response);
                return response;
            });
    }
}

export const universalAPI = {
    updateFieldRecord(params) {
        return instanse.post('universal/updateField', params)
            .then(response => {
                // console.log(response);
                return params;
            });
    }
}
