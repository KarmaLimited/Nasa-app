import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Auth.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('username', result.data.username);
        window.location.href = ('/');
      }).catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }else{
          this.setState({ message: 'Problems with the request' });
        }
      });      
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="fl w-100 pa2">
      <div className="pa4 black-80">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="br2 pa4 bg alert-warning alert-dismissible bg-gold white" role="alert">
              { message }
            </div>
          }
          <fieldset className="ba b--transparent ph0 mh0 fw6">
          <h2 className="form-signin-heading f4 fw6 ph0 mh0 mt2 fw6">Please sign in</h2>
          <input type="email" className="b pa2 input-reset ba mt2 bg-transparent hover-bg-black w-100" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <input type="password" className="b pa2 input-reset ba mt2 bg-transparent hover-bg-black w-100" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          </fieldset>
          <button className="b mt2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Login</button>
          <p className="f6 link dim black db mt2">
            Not a member? <Link to="/register"><span  aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;