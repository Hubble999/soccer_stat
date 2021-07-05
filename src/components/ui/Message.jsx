import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant = 'info', text = 'Nothing found. Specify the period.' }) => {
  return (
    <Alert className="text-center" variant={variant}>
      {text}
    </Alert>
  );
};

export default Message;
