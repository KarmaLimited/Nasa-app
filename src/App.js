import React, { Component } from 'react';
import axios from 'axios';
import StartPage from './components/startpage/Nasa';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksmarks: []
    };
  }

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

