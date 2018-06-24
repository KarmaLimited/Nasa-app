import React, { Component } from 'react';
import axios from 'axios';
import StartPage from './components/startpage/Nasa';
import './App.css';

// Render the startpage view APOD (A picture a day-api)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksmarks: []
    };
  }

  // verify user auth else redirect to login
  componentDidMount() {
    axios.get('/api/Verify')
      .then(res => {
        this.setState({ Verify: res.data });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
  }

  render() {
    return (
    <div className="w-100 mw8 center pa4">
          <StartPage/>
    </div>
    );
  }
}

