
import {connect} from 'react-redux';
import Login from './Login';
import {togleLoginProgress, getLoginThunkCreator} from '../../../redux/userReducer';

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, 
    {togleLoginProgress, getLoginThunkCreator}) 
    (Login);