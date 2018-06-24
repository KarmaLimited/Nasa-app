import React, { Component } from 'react';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { nasaActions } from './reducers';

class SearchContainer extends Component{

render(){
    const initialState = {
            page: 'home'
    };
const store = createStore(nasaActions,
  initialState,
  compose (
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

console.log(store.getState());

    return(
        <Provider store={store}>
        <Search />
      </Provider>
    );
}
}
export default SearchContainer;