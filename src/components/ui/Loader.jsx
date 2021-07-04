import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50px',
        height: '50px'
      }}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Loader;
