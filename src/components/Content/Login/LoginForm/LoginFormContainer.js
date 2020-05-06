
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
// import {setUser, onPhoneChange, onPassChange, togleLoginProgress, getLoginThunkCreator} from '../../../redux/userReducer';

let mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, 
    {}) 
    (LoginForm);