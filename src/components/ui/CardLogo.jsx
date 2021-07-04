import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardLogo({ id, logoUrl, name, pathname }) {
  return (
    <Card style={{ width: '15rem', marginBottom: '50px' }}>
      <Card.Img variant="top" src={`${logoUrl}`} />
      <Card.Body style={{ justifyContent: 'flex-end' }}>
        <Card.Title className="text-center">{name}</Card.Title>
        <Link
          to={{
            pathname: `${pathname}/id/${id}`
          }}>
          <Button variant="primary">Show Calendar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardLogo;
