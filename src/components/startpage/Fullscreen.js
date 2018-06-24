import React, { Component } from 'react';
import Fullscreen from 'react-full-screen';
import PropTypes from 'prop-types';




class FullscreenImage extends Component {
    constructor() {
        super();
        this.state = {
            isFull: false,
        };
    }
    goFull = () => {
        this.setState({ isFull: true });
    }
    render() {
        return (
            <div className="App">
                <button className="f6 link dim ba ph3 pv2 mb2 dib near-black pointer main-bg-color onItem" onClick={this.goFull}>
                    View in fullscreen
                </button>

                <Fullscreen
                    enabled={this.state.isFull}
                    onChange={isFull => this.setState({ isFull })}>
                    <div>
                        <img className="w-100" src={this.props.source} alt={this.props.text} />
                    </div>
                </Fullscreen>
            </div>
        );
    }
}
FullscreenImage.propTypes = {
    source: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default FullscreenImage;