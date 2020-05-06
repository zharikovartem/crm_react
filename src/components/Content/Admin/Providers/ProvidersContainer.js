import {connect} from 'react-redux';
import Providers from './Providers';
import {getProcessList, tabIsLoaded, setCurrentProcessPage} from '../../../../redux/adminReducer';

let mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, 
    {getProcessList, tabIsLoaded, setCurrentProcessPage}) 
    (Providers);