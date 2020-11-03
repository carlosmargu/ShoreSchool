import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/';


class App extends Component {

  componentDidMount(){
    this.props.onPersistAuthentication();
  }

  render() {
     return (
       <BrowserRouter>
       <div className="App">
         <Main />
       </div>
     </BrowserRouter>
     );
   }

}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch( actionCreators.persistAuthentication() )
  };
};

export default connect(null, mapDispatchToProps)(App);