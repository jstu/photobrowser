import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {
  Link
} from "react-router-dom";

function PictureContainer({pic}) {
    return (
            <Col xl={2} lg={2} md={4} sm={4} xs={6} > 
                <Link 
                    key={pic.id}
                    to={{
                        pathname: `/img/${pic.id}`,
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