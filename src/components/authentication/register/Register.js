import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Auth.css';

class CreateUser extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push('/login');
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="fl w-100 pa2">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading f4 fw6 ph0">Register</h2>
          <input type="email" className="form-control pa2 input-reset mt2 ba bg-transparent w-100" placeholder="Email address" name="username" value={username} onChange={this.onChange} required />
          <input type="password" className="form-control pa2 input-reset mt2 ba bg-transparent w-100" placeholder="Password" name="password" value={password} onChange={this.onChange} required />
          <button className="b mt2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Register</button>
          <Link to="/Login" className="f6 link dim db mt2"><span aria-hidden="true"></span> Back to Login</Link>
        </form>
      </div>
    );
  }
}

export default CreateUser;