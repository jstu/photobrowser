import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { stat } from 'fs';

class PhotoBrowser extends React.Component {
    constructor() {
        super();
        this.state = {
            pics: [],
            currentPage: 1,
        }
    }

    componentDidMount() {
        this.fetchPhotos(1);
    }

    fetchPhotos = async pageNum => {
        console.log("fetching images for page " + pageNum);
        let response = await fetch('http://jsonplaceholder.typicode.com/photos?_page=${pageNum}');
        const json = await response.json();

        let pics = json.map(pic => {
            return <img src={pic.thumbnailUrl}></img>
        })

        this.setState({
            pics: this.state.pics.concat(pics),
            currentPage: pageNum,
        })
    }

    render() {
        return(
            <div className="container">
                {this.state.pics}

                <button className="moreButton" onClick={() => {
                    this.fetchPhotos(this.state.currentPage + 1)
                }}>Load more</button>
            </div>
        )
    }
}

ReactDOM.render(<PhotoBrowser />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
