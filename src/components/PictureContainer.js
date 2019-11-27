import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {
  Link
} from "react-router-dom";

function PictureContainer({pic}) {
    return (
            <Col xl={2} lg={2} md={4} sm={4} xs={6} className="thumbcontainer"> 
                <Link 
                    to={{
                        pathname: `/img/${pic.id}`,
                    }}>
                    <Card style={{ width: 'auto', height: 'auto', border: '0px'}}>
                    <Card.Img variant="top" src={pic.thumbnailUrl} alt={pic.title}/>
                    <Card.Body className="cardbody">
                        {pic.title}
                    </Card.Body>
                    </Card>
                </Link>
            </Col>
    )
}

export default PictureContainer;