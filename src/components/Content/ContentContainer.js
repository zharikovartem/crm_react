import {connect} from 'react-redux';
import Content from './Content';
// import {setUser, onPhoneChange, onPassChange, togleLoginProgress, getLoginThunkCreator} from '../../../redux/userReducer';

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, 
    {}) 
    (Content);