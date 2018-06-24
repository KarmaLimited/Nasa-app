import React,{Component} from 'react';
import './style.css';

// Css-spinner used while content is loading
// from @danielcardoso/load-awesome
export default class Loader extends Component {

    render() {
        return (
        <div className="la-ball-clip-rotate-multiple tc ma4">
                <div></div>
                <div></div>
        </div>
        );
    }
}


