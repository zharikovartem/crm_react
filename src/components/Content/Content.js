import React from 'react';
import { Route } from 'react-router-dom';
// import Login from './Login/Login';
import Container from 'react-bootstrap/Container';
import LoginContainer from './Login/LoginContainer';
import AdminContainer from './Admin/AdminContainer';
import TestForm from './../Catalog/Catalog';

class Content extends React.Component {
    
    render() {
        // console.log(this.props);
        return (
            <Container>
                <Route path='/login'
                                render={() => <LoginContainer />} />
                {this.props.user.status === 'admin' ?
                <Route path='/adminPanel'
                                render={() => <AdminContainer />} /> : null }

                <Route path='/catalog'
                                render={() => <TestForm />} />
            </Container>
        );
    }
}

export default Content;