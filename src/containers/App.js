import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DetailView from '../components/DetailView';
import api, { fetchPhotos } from '../api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const [hasError, setErrors] = useState(false);
  const [pics, setPics] = useState([]);
  const [currentLimit, setCurrentLimit] = useState(12);
  const limitMultiplier = 12;

  useEffect(() => {
    api(currentLimit).then(fetched => {
      setPics(fetched);
    })
  }, [currentLimit])

  return (
    <Container className="appcontainer">
      <Switch>
        <Route path="/img/:id" render={props => (
            <DetailView {...props} />
          )}
        />

        <Route path="/">
          <Row className="justify-content-center thumbnails">
              {pics}
          </Row>

          <div className="buttonContainer">
            <Button onClick={() => {
                setCurrentLimit(currentLimit + limitMultiplier)
            }}>Load more</Button>
          </div>
        </Route>

      </Switch>
    </Container>
  )
}

export default App;
