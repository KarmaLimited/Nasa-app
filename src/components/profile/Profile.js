import React, { Component } from 'react';
import './profile.css';
const profile = require('../Icons/profile.png');

//Profile View
//Currently shows the Metadata of the the Bookmarked items stored in localStorage 
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: [],
      username: '',
    };
  }

  componentDidMount() {
    this.setState({
      username: localStorage.getItem('username'),
      metadata: localStorage.getItem('saved')
    });
  }
  render() {
    const metadata = this.state.metadata;
    return (
      <div>
        <div className="fl w-100">
          <div className="pa4 tc fl userblock">
            <p>
              <img src={profile} className="icon profileIcon" alt="profile-img" />
              <span>Logged in as: {this.state.username}</span>
              </p>
          </div>
          <div className="flex-grid w-100">
            <div className="col main-bg-color">Here is the Metadata of your bookmarks</div>
          </div>
              <div className="flex-grid-thirds">
                <div className="pa3 pa5-ns mb5">    
                  {metadata ? 
                    <div>{metadata}</div> :
                    <div>No saved bookmarks</div>
                  }
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Profile;

//TODO rebuild current bookmarks solution and render them from database in the profile-view