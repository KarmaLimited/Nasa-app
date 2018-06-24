import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconExit from '../Icons/exit';
import HomeIcon from '../Icons/home';
import './Navbar.css';

const profile = require('../Icons/profile.png');
const search = require('../Icons/search.png');

export default class Navbar extends Component {
    state = {
        isTop: true
    };
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 180;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop });
            }
        });
    }
    logout = () => {
        localStorage.removeItem('jwtToken');
    }
    render() {
        return (
            <div>
            {localStorage.getItem('jwtToken') &&
            <div className="nav">
                <div style={{ top: 0 }} className={'menu ' + (this.state.isTop ? 'bgTop' : 'bgScroll')}>
                    <Link to={'/'} className="menu-item current-link"><HomeIcon /></Link>
                    <Link to={'/profile/'} className="menu-item current-link"><img src={profile} alt="profileimg" className="icon" /></Link>
                    <Link to={'/search/'} className="menu-item current-link"><img src={search} className="icon" alt="searchimg" /></Link>
                    <Link to={'/login/'} className="menu-item current-link" onClick={this.logout}><IconExit /></Link>
                </div>
            </div>
            }
            </div>
        );
    }
}
