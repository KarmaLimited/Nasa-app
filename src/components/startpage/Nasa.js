import React, { Component } from 'react';
import Fullscreen from './Fullscreen';
import Loader from '../cssloader/loader';

const todaysDate = new Date();

function convertDate(date) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString();
    const dd = date.getDate().toString();

    const mmChars = mm.split('');
    const ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1] ? mm : '0' + mmChars[0]) + '-' + (ddChars[1] ? dd : '0' + ddChars[0]);
}

export default class Nasa extends Component {

    constructor() {
        super();
        this.state = {
            post: [],
            startdate: '2018-06-10',
            enddate: convertDate(todaysDate),
            metadata: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        this.getData();
    }

    toggleClass() {
        const currentState = this.state.metadata;
        this.setState({ metadata: !currentState });
    }
    handleChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);

    }
    async getData() {
        const { startdate, enddate } = this.state;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NasaApiKey}&start_date=${startdate}&end_date=${enddate}&concept_tags=True`);
        const apodData = await response.json();
        this.setState({ post: apodData,  });
    }

    render() {
        let key = 1;
        const { startdate } = this.state;
        return (
            <section className="mw7 center avenir">
         
                <h1 className="fw1 ph3 ph0-l tc">A  Picture a day</h1>
               
                <h4 className="fw1 ph3 ph0-l tc">Nasa's APOD api between</h4>
                <div className="fw1 ph3 ph0-l tc ma4">
                    <b>From:</b> {startdate}  <br />
                    <b>To:</b> {this.state.enddate}<br />
                    <div className="ma2">
                        <span className="b bg-transparent tc">Set Startdate</span><br />
                        <input type="date" className="b bg-transparent w-30 tc" min='2017-01-01' max={this.state.enddate} name="startdate" value={this.state.startdate} onChange={this.handleChange} required />
                    </div>
                </div>
            
                {(this.state.post.length < 2) &&  <div className="tc"><Loader  /></div>}
                {this.state.post.map(posts => (
                    <div key={key++}>
                        <article className="pa3 pa5-ns">
                            <h2 className="f2 fw1 ph3 ph0-l">{posts.title}</h2>
                            <div>
                                {posts.media_type === 'video'
                                    ? (<div className="aspect-ratio aspect-ratio--16x9">
                                        <iframe title={key} src={posts.url} className="aspect-ratio--object" frameBorder="0" allowFullScreen=""></iframe>
                                    </div>) : <Fullscreen source={posts.url} text={posts.explanation} />
                                }
                                <span className="lh-copy">Date: {posts.date}</span>
                                <p className="lh-copy">
                                    {posts.explanation}
                                </p>
                                <button className="f6 link dim br2 ba ph3 pv2 mb4 dib near-black onItem" onClick={this.toggleClass}>View metadata</button>
                                <br />
                                {this.state.metadata && <div className="fl w-100 f10"><br /><hr />
                                    <div className="bg-light-gray ph2 metadata">
                                        <p>Date: <span>{posts.date}</span></p>
                                        <p>hdurl: <span>{posts.hdurl}</span></p>
                                        <p>media_type: <span>{posts.media_type}</span></p>
                                        <p>service_version: <span>{posts.service_version}</span></p>
                                        <p>title: <span>{posts.title}</span></p>
                                        <p>url: <span>{posts.url}</span></p>
                                    </div>
                                    <hr />
                                </div>
                                }
                            </div>
                        </article>
                    </div>
                ))}
            </section>
        );
    }
}