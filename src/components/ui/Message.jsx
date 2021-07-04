import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant = 'info', text = 'Ничего не найдено. Укажите период.' }) => {
  return (
    <Alert className="text-center" variant={variant}>
      {text}
    </Alert>
  );
};

export default Message;
