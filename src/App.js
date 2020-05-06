// import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import ContentContainer from './components/Content/ContentContainer';
import {getAuthMeThunkCreator} from './redux/userReducer';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthMeThunkCreator();
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderContainer />
        <ContentContainer />
      </BrowserRouter>
    );
  }
}

export default connect( null, {getAuthMeThunkCreator} )(App);
