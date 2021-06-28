import React from 'react';
import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
    setKeyword('');
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search teams"
        className="mr-sm-2"
        value={keyword}
      />
      <Button type="submit" variant="outline-info">
        Search
      </Button>
    </Form>
  );
};

export default Search;
