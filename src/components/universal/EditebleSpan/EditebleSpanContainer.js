import {connect} from 'react-redux';
import EditebleSpan from './EditebleSpanHOC';
import {updateFieldRecord} from './../../../redux/universalReducer';

let mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, {updateFieldRecord}) 
    (EditebleSpan);