import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';

function CalendarForm() {
  const [beginPeriod, setBeginPeriod] = useState(null);
  const [endPeriod, setEndPeriod] = useState(null);
  const history = useHistory();
  const { pathname } = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (beginPeriod && endPeriod) {
      history.push(`${pathname}/period/${beginPeriod}/${endPeriod}`);
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col lg="5" md="auto">
        <Form onSubmit={handleSubmit} className="shadow-sm p-3 mb-5 bg-body rounded">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Начало периода</Form.Label>
            <Form.Control
              onChange={(e) => setBeginPeriod(e.target.value)}
              type="date"
              placeholder="Enter date"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Конец периода</Form.Label>
            <Form.Control
              onChange={(e) => setEndPeriod(e.target.value)}
              type="date"
              placeholder="Enter date"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Получить
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default CalendarForm;
