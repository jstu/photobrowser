import React, {useState, useEffect} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import api from '../api';
import {
  useParams
} from "react-router-dom";

function DetailView() {
    const {id} = useParams();
    const [image, setImage] = useState("");
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        api.photo(id)
        .then(fetched => {
            setImage(fetched);
        })
        .catch((error) => {
            setErrors(true);
        });
    }, [])

    if (hasError) {
        return (
            <Container>
                <h1 className="detailstitle">Image not found</h1>
            </Container>
        )
    } else {
        return (
            <Container>
                <h1 className="detailstitle">{image.title}</h1>
                <Image src={image.url} fluid/>

            </Container>
        )
    }
}

export default DetailView;