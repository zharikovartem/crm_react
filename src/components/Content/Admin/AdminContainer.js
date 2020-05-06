import {connect} from 'react-redux';
import Admin from './Admin';
import {setHandleSelect} from '../../../redux/adminReducer';

let mapStateToProps = (state) => {
    return {
        user: state.user,
        admin: state.admin
    }
}

export default connect(mapStateToProps, 
    {setHandleSelect}) 
    (Admin);