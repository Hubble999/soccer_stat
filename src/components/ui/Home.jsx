import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="justify">
      <Card style={{ width: '15rem', marginBottom: '50px' }}>
        <Card.Img style={{ width: 'auto', height: 'auto' }} variant="top" src="../img/logo1.jpg" />
        <Card.Body style={{ justifyContent: 'flex-end' }}>
          <Card.Title className="text-center">Teams</Card.Title>
          <Link to="/teams">
            <Button variant="primary">Show</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem', marginBottom: '50px' }}>
        <Card.Img style={{ width: 'auto', height: 'auto' }} variant="top" src="../img/logo1.jpg" />
        <Card.Body style={{ justifyContent: 'flex-end' }}>
          <Card.Title className="text-center">Tournaments</Card.Title>
          <Link to="/tournaments">
            <Button variant="primary">Show</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
