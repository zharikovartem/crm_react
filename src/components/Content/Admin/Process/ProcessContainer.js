import {connect} from 'react-redux';
import Process from './Process';
import {getProcessList, tabIsLoaded, setCurrentProcessPage} from '../../../../redux/adminReducer';

let mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, 
    {getProcessList, tabIsLoaded, setCurrentProcessPage}) 
    (Process);