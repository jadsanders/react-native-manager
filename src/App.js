import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBOlavkeVw9vpRQbtDc7GdzKOIDQE31EXY',
    authDomain: 'manager-27397.firebaseapp.com',
    databaseURL: 'https://manager-27397.firebaseio.com',
    projectId: 'manager-27397',
    storageBucket: 'manager-27397.appspot.com',
    messagingSenderId: '612924820868'
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
