import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import api from '../api';
import {
  Link
} from "react-router-dom";
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
                <Link to={{ pathname: `/`}}>
                    <Button variant="info" className="backbutton">Back</Button>
                </Link>
                <Container className="detailscontainer">
                    <Figure>
                    <Figure.Image
                        src={image.url}
                    />
                    <Figure.Caption>
                        {image.title}
                    </Figure.Caption>

                    <Figure.Caption>
                        Album: {image.albumId}
                    </Figure.Caption>
                    </Figure>
                </Container>

            </Container>
        )
    }
}

export default DetailView;