import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

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

        const pics = 
            json.map((pic, i) => {
                
                // a new row should start after every fifth picture for regular screens
                const mdParams = i % 5 === 0 
                ? {span: 2, offset: 1} 
                : {span: 2, offset: 0};

                return (
                    <Col md={{span: mdParams.span, offset: mdParams.offset}} sm={5} xs={5}> 
                        <Image src={pic.thumbnailUrl} fluid>
                        </Image> 
                    </Col>
                    )
                }
            )

        this.setState({
            pics: this.state.pics.concat(pics),
            currentPage: pageNum,
        })
    }

    render() {
        return(
            <body>
                
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
                />

                <Container>
                    <Row className="row">
                        {this.state.pics}
                    </Row>

                    <Button className="moreButton" onClick={() => {
                        this.fetchPhotos(this.state.currentPage + 1)
                    }}>Load more</Button>
                </Container>
            </body>
        )
    }
}

ReactDOM.render(<PhotoBrowser />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
