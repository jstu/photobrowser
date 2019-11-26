import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import api, { fetchPhotos } from '../api';

const App = () => {
  console.log("called App what the crApp");

  const [hasError, setErrors] = useState(false);
  const [pics, setPics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api(currentPage).then(fetched => {
      setPics(pics.concat(fetched));
    })
  }, [currentPage])

  return(
      <Container>
          <Row className="row">
              {pics}
          </Row>

          <Button className="moreButton" onClick={() => {
              setCurrentPage(currentPage + 1)
          }}>Load more</Button>
      </Container>
  )
}

export default App;
