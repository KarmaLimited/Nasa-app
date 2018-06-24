import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import '../node_modules/tachyons/css/tachyons.min.css';
import Profile from './components/profile/Profile';
import Search from './components/search/SearchContainer.js';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Login from './components/authentication/login/Login';
import Register from './components/authentication/register/Register';
import Nav from './components/navbar/Navbar';


axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');


ReactDOM.render(
  <Router>
      <div className="fl w-100">
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/search' component={Search} />  
        <Nav />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();