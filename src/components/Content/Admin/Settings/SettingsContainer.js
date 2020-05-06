import {connect} from 'react-redux';
import Settings from './Settings';
import {getSettingsList} from '../../../../redux/adminReducer';

let mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, 
    {getSettingsList}) 
    (Settings);