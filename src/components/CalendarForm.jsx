import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';

function CalendarForm({ id, path }) {
  const [beginPeriod, setBeginPeriod] = useState(null);
  const [endPeriod, setEndPeriod] = useState(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (beginPeriod && endPeriod) {
      history.push(`${path}/id/${id}/period/${beginPeriod}/${endPeriod}`);
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col lg="5" md="auto">
        <Form onSubmit={handleSubmit} className="shadow-sm p-3 mb-5 bg-body rounded">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Beginning of period</Form.Label>
            <Form.Control
              onChange={(e) => setBeginPeriod(e.target.value)}
              type="date"
              placeholder="Enter date"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>End of period</Form.Label>
            <Form.Control
              onChange={(e) => setEndPeriod(e.target.value)}
              type="date"
              placeholder="Enter date"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Get
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default CalendarForm;
