import React, {useState, useEffect} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


function DetailView({location}) {
    console.log("detail view");
    const pic = location.state.pic;
    console.log("match: " + pic.title);
    return (
        <Container>
            <h1 className="detailstitle">{pic.title}</h1>
            <Image src={pic.url} fluid/>

        </Container>
    )
}

export default DetailView;