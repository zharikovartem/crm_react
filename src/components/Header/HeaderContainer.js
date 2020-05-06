import {connect} from 'react-redux';
import Header from './Header';
import {setUser, logout} from './../../redux/userReducer';
import {getAuth, getStatus} from './../../redux/userSelectors';

const mapStateToProps =  (state) => ({
    isAuth: getAuth(state),
    status: getStatus(state)
    // долить юзернэйм
});

export default connect( mapStateToProps, {setUser, logout} )(Header);