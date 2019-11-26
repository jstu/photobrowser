import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function PictureContainer(props) {
    return (
        <Col md={{span: props.mdParams.span, offset: props.mdParams.offset}} sm={5} xs={5}> 
            <Image src={props.pic.thumbnailUrl} fluid/>
        </Col>
    )
}

export default PictureContainer;