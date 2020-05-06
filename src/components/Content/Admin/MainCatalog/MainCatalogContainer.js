// import React from 'react';
import {connect} from 'react-redux';
import MainCatalog from './MainCatalog';
import {getProductTypeList, crateNewProductType, reRenderComponent,
     deleteProductType, loadProductTypeItemList} from '../../../../redux/adminReducer';

let mapStateToProps = (state) => {
    return {
        user: state.user,
        admin: state.admin
    }
}

export default connect(mapStateToProps, 
    {getProductTypeList, crateNewProductType, reRenderComponent, 
        deleteProductType, loadProductTypeItemList}) 
    (MainCatalog);