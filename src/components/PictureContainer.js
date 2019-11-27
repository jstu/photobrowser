import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PictureContainer({pic, mdParams}) {
    return (
            <Col md={{span: mdParams.span, offset: mdParams.offset}} sm={5} xs={5} > 
                <Link 
                    key={pic.id}
                    to={{
                        pathname: `/img/${pic.id}`,
                        state: {
                            pic: pic
                        }
                    }}>

                    <div className="thumbcontainer">
                        <h1 className="thumbtitle">{pic.title}</h1>
                    
                            <Image src={pic.thumbnailUrl} fluid/>
                    </div>
                </Link>
            </Col>
    )
}

export default PictureContainer;