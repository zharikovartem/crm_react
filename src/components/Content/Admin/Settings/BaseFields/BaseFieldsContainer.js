import {connect} from 'react-redux';
import BaseFields from './BaseFields';
import {getSettingsList} from '../../../../../redux/adminReducer';

let mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, 
    {getSettingsList}) 
    (BaseFields);